import express from "express";
import { getFiles } from "#db/queries/files";
import { getFolders, getFolderById } from "#db/queries/folders";

const app = express();

app.get("/files", async (req, res) => {
  const files = await getFiles();
  res.send(files);
});

app.get("/folders", async (req, res) => {
  const folders = await getFolders();
  res.send(folders);
});

app.get("/folders/:id", async (req, res) => {
  const folder = await getFolderById(req.params.id);
  if (!folder) return res.status(404).send("Folder not found");
  res.send(folder);
});

export default app;
