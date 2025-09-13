import express from "express";
import "dotenv/config";
import { DBStart } from "./src/config/database.js";
import { routes } from "./src/routes/index.js";

const PORT = 3004;
const app = express();

app.use(express.json())

app.use("/api", routes)

app.listen(PORT, async () => {
  try {
    await DBStart();
    console.log(`Servidor encendido en https://localhost:${PORT}`);
  } catch (error) {
    console.log("Error al conectar con MongoDB", error);
  }
});
