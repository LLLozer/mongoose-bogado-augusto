import { model, Schema } from "mongoose";

const FactionSchema = new Schema(
  {
    faction_name: {
      type: String,
      required: true,
      unique: true,
    },
    racism: {
      type: String,
      enum: ["enabled", "disabled"],
      required: true,
    },
    members: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export const FactionModel = model("Faction", FactionSchema);
