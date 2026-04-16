import express from "express";
import { getFiles } from "#db/queries/files";
import { getFolders } from "#db/queries/folders";

const app = express();

app.get("/files", async (req, res) => {
  const files = await getFiles();
  res.send(files);
});

app.get("/folders", async (req, res) => {
  const folders = await getFolders();
  res.send(folders);
});

export default app;
