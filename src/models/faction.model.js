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
  //toJSON y toObject son necesarios para enviar datos al cliente, sino el populate de characters no pasa//
  {
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

/*
virtual es necesario para hacer un populate desde una colección sin referencias, en este caso, faction no tiene referencias a character
Se usa el Schema con .virtual, se le crea una referencia (characters) y luego se le pasan los parámetros:
ref = referencia del modelo que se va a usar (Character)
localField = campo local (la id de Faction)
foreignField = el campo externo referido a la facción del personaje como está en el modelo de Character (affiliation)
*/


FactionSchema.virtual("characters", {
  ref: "Character",
  localField: "_id",
  foreignField: "affiliation",
});

export const FactionModel = model("Faction", FactionSchema);
