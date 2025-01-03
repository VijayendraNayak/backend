import express from "express";
import connectDb from "./config/db";
import reserveRouter from "./router/reserverout";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your front-end URL
    methods: "GET,POST,DELETE", // Correctly separate methods with commas
    allowedHeaders: "Content-Type", // Allowed headers
  })
);

connectDb();
app.use(express.json());
app.use("/api", reserveRouter);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
