import express, { json } from "express";
import { asyncErrors } from "./middleware/async-erros";
import { v1 } from "./routes/versions";
import "express-async-errors";
import cors from "cors";

const app = express();

app.use(cors());
app.use(json());

app.use(v1);
app.use(asyncErrors);

export { app };
