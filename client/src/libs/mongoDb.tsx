import mongoose from "mongoose";

const mongoUri = process.env.MONGO_URI as string;

const connectMongDb = async () => {
  try {
    if (!mongoUri) {
      throw new Error("MONGO_URI is not defined in the environment variables.");
    }

    await mongoose.connect(mongoUri);

    console.log("Database Connected !");
  } catch (err) {
    console.log(err);
  }
};

export default connectMongDb;
