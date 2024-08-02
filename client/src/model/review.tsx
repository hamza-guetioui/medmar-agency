import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema({
  id: Number,
  name: String,
  rating: Number,
  comment: String,
},{
    timestamps: true
});

const Review = mongoose.model("Review" , reviewSchema)


export default Review;