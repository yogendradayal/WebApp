import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
  try {
    const loggedInUser = req.user._id;

    const allUsers = await User.find({ _id: { $ne: loggedInUser } }).select(
      "-password"
    ); // { _id: { $ne: loggedInUser }.select("-password") gives all the users expect the loggedin user and without the password

    res.status(200).json(allUsers);
  } catch (error) {
    console.log("Error in getUsers controller:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
