import cors from "cors";
import express from "express";

import api from "./api/index.js";
import * as middlewares from "./middlewares";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Request Incoming! Server is Live.",
    });
});

app.use("/api/v1", api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
