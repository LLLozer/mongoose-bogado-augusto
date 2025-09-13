import { model, Schema } from "mongoose";

export const CharacterSchema = new Schema(
  {
    character_name: {
      type: String,
      required: true,
      unique: true,
    },
    race: {
      type: String,
      required: true,
    },
    mutations: {
      type: String,
      enum: ["yes", "no"],
    },
    psyker: {
      type: Boolean,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export const CharacterModel = model("Character", CharacterSchema);
