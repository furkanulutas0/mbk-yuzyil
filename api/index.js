import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import ticketRouter from "./routes/ticket.route.js";
import path from "path";

dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const __dirname = path.resolve();

const app = express();

// app.use(express.static(path.join(__dirname + "/client/dist")));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
// });

app.use(express.json());
app.listen(3000, () => {
  console.log(`Server listening on port http://localhost:3000`);
});

app.use("/api/post/ticket", ticketRouter);
app.use("/api/get/ticket", ticketRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
