import { Router } from "express";
import { getFiles } from "#db/queries/files";

const router = Router();

router.get("/", async (req, res) => {
  const files = await getFiles();
  res.send(files);
});

export default router;