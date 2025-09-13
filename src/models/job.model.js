import { model, Schema } from "mongoose";

export const JobSchema = new Schema(
  {
    occupation: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      enum: ["novice", "expert", "veteran"],
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export const JobModel = model("Job", JobSchema);
