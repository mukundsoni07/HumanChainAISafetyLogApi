import express from "express";
import { getIncidents, addIncident, findIncident, deleteIncident } from "../controllers/incidentController.js";


const router = express.Router();

router.get("/", getIncidents);
router.post("/", addIncident);
router.get("/:id", findIncident);
router.delete("/:id", deleteIncident);

export default router;