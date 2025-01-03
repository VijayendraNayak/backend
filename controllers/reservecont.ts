import { Request, Response } from "express";
import Reserve from "../models/reservemodel";

// Create a new reservation
export const createReservation = async (req: Request, res: Response) => {
  const { name, phone, date, time, guest } = req.body; // Include `time` in the request body
  try {
    const reservation = await Reserve.create({ name, phone, date, time, guest }); // Save `time` to the database
    res.status(201).json({ reservation });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Get all reservations
export const getReservation = async (req: Request, res: Response) => {
  try {
    const reservations = await Reserve.find(); // Fetch all reservations
    res.status(200).json({ reservations }); // Send response with all reservations
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete a reservation by ID
export const deleteReservation = async (
    req: Request<{ id: string }>, // Explicitly define the shape of req.params
    res: Response
  ): Promise<void> => {
    const id = req.params.id;
    try {
      const reservation = await Reserve.findByIdAndDelete(id);
      if (!reservation) {
        res.status(404).json({ message: "Reservation not found" });
        return;
      }
      res.status(200).json({ reservation });
    } catch (err) {
      res.status(500).json({ message: "Server Error" });
    }
  };