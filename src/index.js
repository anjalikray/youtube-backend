import express from "express";
import dotevn from "dotenv";
import connectDB from "./db/index.js";

const app = express();

dotevn.config({
    path: "./.env",
});

connectDB();
