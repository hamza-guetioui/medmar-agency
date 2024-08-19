import mongoose from "mongoose";

// Function to validate if a given ID is a valid MongoDB ObjectId
export const validate_Id = (_id: string | null): boolean => {
  // Check if the _id is null or undefined
  if (!_id) {
    return false; // Return false if the ID is not provided
  }

  // Check if the _id is a valid MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return false; // Return false if the ID is not a valid ObjectId
  }

  return true; // Return true if the ID is valid
};


