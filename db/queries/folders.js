import db from "#db/client";

export async function createFolder(name) {
  const { rows } = await db.query(
    `INSERT INTO folders (name) VALUES ($1) RETURNING *`,
    [name]
  );
  return rows[0];
}

export async function getFolders() {
  const { rows } = await db.query(`SELECT * FROM folders`);
  return rows;
}

export async function getFolderById(id) {
  const { rows: folderRows } = await db.query(
    `SELECT * FROM folders WHERE id = $1`,
    [id]
  );
  const folder = folderRows[0];
  if (!folder) return null;

  const { rows: files } = await db.query(
    `SELECT * FROM files WHERE folder_id = $1`,
    [id]
  );
  folder.files = files;
  return folder;
}