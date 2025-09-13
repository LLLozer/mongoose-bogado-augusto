import { Router } from "express";

import { factionRoutes } from "./faction.routes.js";
import { characterRoutes } from "./character.routes.js";
import { jobRoutes } from "./job.routes.js";

export const routes = Router();

routes.use(factionRoutes);
routes.use(characterRoutes);
routes.use(jobRoutes);
