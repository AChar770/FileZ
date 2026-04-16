-- DROP DATABASE IF EXISTS filez;
-- CREATE DATABASE filez;
DROP TABLE IF EXISTS files;
DROP TABLE IF EXISTS folders;

CREATE TABLE folders(
  id SERIAL PRIMARY KEY,
  name text UNIQUE NOT NULL
);
  
CREATE TABLE files(  
  id SERIAL PRIMARY KEY,
  name text NOT NULL,
  size int NOT NULL,
  folder_id int NOT NULL REFERENCES folders(id) ON DELETE CASCADE,
  UNIQUE(name, folder_id)
);