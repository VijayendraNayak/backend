import express from "express";
import connectDb from "./config/db";
import reserveRouter from "./router/reserverout";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "https://vijayendra-todo-list.vercel.app", // Replace with your front-end URL
    methods: "GET,POST,DELETE", // Correctly separate methods with commas
    allowedHeaders: "Content-Type", // Allowed headers
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
