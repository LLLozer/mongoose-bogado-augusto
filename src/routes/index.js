import { Router } from "express";

import { factionRoutes } from "./faction.routes.js";

export const routes = Router();

routes.use(factionRoutes);
