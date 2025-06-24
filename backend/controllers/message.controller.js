import Message from "../models/message.model.js";
import Conversation from "./../models/conversation.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params; // API endpoint se reciever ID aa jayegi.
    const senderId = req.user._id; // sender ID means the authenticated user. But authenticated user id is not present. So we will use middleware to check authenticated user using JWT and grab the sender id from there

    // First we will check whether the conversation between two above occured or not
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    // If not occured, we will create a new filed in conversation model and default message will be empty array
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    // message is created
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    // we will push the message in conversation
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    await Promise.all([conversation.save(), newMessage.save()]);

    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      // io.to(<socket_id>).emit() used to send events to specific client
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    res.status(201).send(newMessage);
  } catch (error) {
    console.log("Error in sendMessage controller:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages"); // these are actual messages given one by one as populate is used

    if (!conversation) {
      return res.status(200).json([]);
    }

    const messages = conversation.messages;
    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in getMessages controller:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
