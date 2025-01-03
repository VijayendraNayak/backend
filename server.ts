import express from "express";
import connectDb from "./config/db";
import reserveRouter from "./router/reserverout";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "https://backend-beryl-omega.vercel.app/", // Allow requests from all domains
    methods: "GET,POST,DELETE", // Allow specific methods
    allowedHeaders: "Content-Type", // Allow specific headers
  })
);


connectDb();
app.use(express.json());
// Root route (just a placeholder)
app.get("/", (req, res) => {
  res.send("Backend is up and running!");
});

app.use("/api", reserveRouter);

// Export the app as a default export to make it compatible with Vercel
export default app;
