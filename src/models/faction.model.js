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
    military_forces: {
      astartes_chapter: {
        type: String,
      },
      imperial_regiment: {
        type: String,
        required: true,
      },
      adeptus_titanicus: {
        type: String,
        enum: ["available", "unavailable"],
      },
    },
  },
  {
    versionKey: false,
  }
);

export const FactionModel = model("Faction", FactionSchema);
