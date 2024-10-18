import mongoose, { mongo } from "mongoose";

const VisualizationUserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const VisualizationUser = mongoose.model(
  "VisualizationUser",
  VisualizationUserSchema
);
