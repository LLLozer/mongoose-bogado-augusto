import express from "express";
import "dotenv/config";
import { DBStart } from "./src/config/database.js";

const PORT = 3004;
const app = express();

app.listen(PORT, async () => {
  try {
    await DBStart();
    console.log(`Servidor encendido en https://localhost:${PORT}`);
  } catch (error) {
    console.log("Error al conectar con MongoDB", error);
  }
});
