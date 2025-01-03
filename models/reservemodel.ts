import mongoose, { Schema, Document } from "mongoose";

interface Reservation extends Document {
  name: string;
  phone: string;
  date: Date;
  time: string; // New field to store time as a string (e.g., "12:00 PM")
  guest: number;
}

const ReservationSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true }, // Add the time field here
    guest: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<Reservation>("Reservation", ReservationSchema);
