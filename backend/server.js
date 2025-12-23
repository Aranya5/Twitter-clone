import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from "./config/db.js";
import { connect } from "mongoose";

const app = express();

const PORT = process.env.PORT || 5000;
dotenv.config();

app.use("/api/auth",authRoutes);

app.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}`);
    connectMongoDB();
})