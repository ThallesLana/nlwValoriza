import "reflect-metadata";
import express, { response } from "express";

import "./database";

const app = express();

// config do servidor
app.listen(3000, () => console.log("Server is running"));
