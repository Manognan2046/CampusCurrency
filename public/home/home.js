import dotenv from "dotenv";
dotenv.config();
import express, { response } from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";

app.get("/ieee", (req, res) => {
  res.sendFile(__dirname + "/public/home/ieee.html");
});