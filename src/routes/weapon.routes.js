import { Router } from "express";
import {
  createWeapon,
  getAllWeapons,
  getWeaponById,
  updateWeapon,
  deleteWeapon,
} from "../controllers/weapon.controllers.js";

export const weaponRoutes = Router();

weaponRoutes.post("/weapons/", createWeapon);
weaponRoutes.get("/weapons/", getAllWeapons);
weaponRoutes.get("/weapons/:id", getWeaponById);
weaponRoutes.put("/weapons/:id", updateWeapon);
weaponRoutes.delete("/weapons/:id", deleteWeapon);

export default weaponRoutes;
