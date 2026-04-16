import express from "express";
import { getFiles } from "#db/queries/files";

const app = express();

app.get("/files", async (req, res) => {
  const files = await getFiles();
  res.send(files);
});

export default app;
