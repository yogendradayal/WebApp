import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connectd to MongoDb database");
  } catch (error) {
    console.log("Error connecting to MongoDb", error);
  }
};

export default connectToMongoDB;
