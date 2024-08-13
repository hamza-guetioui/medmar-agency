import mongoose from "mongoose";

const mongoDBUri = process.env.MONGODB_URI as string;

const connectToMongoDb = async () => {
  try {
    if (!mongoDBUri) {
      throw new Error("MONGO_URI is not defined in the environment variables.");
    }

    await mongoose.connect(mongoDBUri);

    console.log("Database Connected !");
  } catch (err) {
    console.log("Failed To Connect To Database" + err);
  }
};

export default connectToMongoDb;
