import { Router } from "express";
import {
  createFaction,
  deleteFaction,
  getAllFactions,
  getFactionById,
  updateFaction,
} from "../controllers/faction.controllers.js";

export const factionRoutes = Router();

factionRoutes.post("/factions", createFaction);
factionRoutes.get("/factions", getAllFactions);
factionRoutes.get("/factions/:id", getFactionById);
factionRoutes.put("/factions/:id", updateFaction);
factionRoutes.delete("/factions/:id", deleteFaction);

export default factionRoutes;
