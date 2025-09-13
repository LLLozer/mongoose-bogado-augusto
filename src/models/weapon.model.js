import { model, Schema } from "mongoose";

export const WeaponSchema = new Schema(
  {
    weapon_name: {
      type: String,
    },
    type: {
      type: String,
      enum: ["melee", "ranged", "mixed"],
      required: true,
    },
    status: {
      type: String,
      enum: ["perfect", "damaged", "broken"],
      required: true,
    },
    kill_count: {
      type: Number,
    },
  },
  {
    versionKey: false,
  }
);

export const WeaponModel = model("Weapon", WeaponSchema);
