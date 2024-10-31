import express from "express";
import {
  getAllPositions,
  createPosition,
} from "../controllers/positionController.js";

const router = express.Router();

router.get("/", getAllPositions);
router.post("/create-position", createPosition);

export default router;
