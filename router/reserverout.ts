import express from "express";
import { createReservation, getReservation, deleteReservation } from "../controllers/reservecont";

const router = express.Router();
router.post("/create", createReservation);
router.get("/get", getReservation);
router.delete("/delete/:id", deleteReservation);

export default router;
