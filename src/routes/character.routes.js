import { Router } from "express";
import {
  createCharacter,
  getAllCharacters,
  getCharacterById,
  updateCharacter,
  deleteCharacter,
} from "../controllers/character.controllers.js";

export const characterRoutes = Router();

characterRoutes.post("/characters", createCharacter);
characterRoutes.get("/characters", getAllCharacters);
characterRoutes.get("/characters/:id", getCharacterById);
characterRoutes.put("/characters/:id", updateCharacter);
characterRoutes.delete("/characters/:id", deleteCharacter);

export default characterRoutes