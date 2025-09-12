import mongoose from "mongoose";

export const DBStart = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/rpg_game");
    console.log("Conexión exitosa a MongoDB");
  } catch (error) {
    console.log("Error al conectar a la base de datos", error);
  }
};
