import { Router } from "express";
import { getFolders, getFolderById } from "#db/queries/folders";
import { createFile } from "#db/queries/files";

const router = Router();

router.get("/", async (req, res) => {
  const folders = await getFolders();
  res.send(folders);
});

router.get("/:id", async (req, res) => {
  const folder = await getFolderById(req.params.id);
  if (!folder) return res.status(404).send("Folder not found");
  res.send(folder);
});

router.post("/:id/files", async (req, res) => {
  const folder = await getFolderById(req.params.id);
  if (!folder) return res.status(404).send("Folder not found");

  if (!req.body) return res.status(400).send("Request body is required");
  const { name, size } = req.body;
  if (!name || !size) return res.status(400).send("name and size are required");

  const file = await createFile(name, size, req.params.id);
  res.status(201).send(file);
});

export default router;
