import express from "express";
import { getFiles, createFile } from "#db/queries/files";
import { getFolders, getFolderById } from "#db/queries/folders";

const app = express();
app.use(express.json());

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

app.post("/folders/:id/files", async (req, res) => {
  const folder = await getFolderById(req.params.id);
  if (!folder) return res.status(404).send("Folder not found");

  if (!req.body) return res.status(400).send("Request body is required");
  const { name, size } = req.body;
  if (!name || !size) return res.status(400).send("name and size are required");

  const file = await createFile(name, size, req.params.id);
  res.status(201).send(file);
});

export default app;
