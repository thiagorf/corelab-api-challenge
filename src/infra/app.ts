import express, { json } from "express";
import cors from "cors";
import { v1 } from "./routes/versions";

const app = express();

app.use(cors());
app.use(json());

app.use(v1);

export { app };
