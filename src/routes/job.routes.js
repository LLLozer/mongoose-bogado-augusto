import { Router } from "express";
import {
  createJob,
  getAllJobs,
  getJobById,
  updateJob,
  deleteJob,
} from "../controllers/job.controllers.js";

export const jobRoutes = Router();

jobRoutes.post("/jobs", createJob);
jobRoutes.get("/jobs", getAllJobs);
jobRoutes.get("/jobs/:id", getJobById);
jobRoutes.put("/jobs/:id", updateJob);
jobRoutes.delete("/jobs/:id", deleteJob);

export default jobRoutes;
