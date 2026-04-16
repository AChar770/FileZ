import express from "express";
import filesRouter from "#api/files";
import foldersRouter from "#api/folders";

const app = express();
app.use(express.json());

app.use("/files", filesRouter);
app.use("/folders", foldersRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

export default app;
