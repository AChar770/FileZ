import db from "#db/client";

export async function createFolder(name) {
  const { rows } = await db.query(
    `INSERT INTO folders (name) VALUES ($1) RETURNING *`,
    [name]
  );
  return rows[0];
}