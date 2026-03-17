DROP DATABASE IF EXISTS filez;
CREATE DATABASE filez;

CREATE TABLE folders(
  ID SERIAL PRIMARY KEY,
  name text UNIQUE NOT NULL
);
  
CREATE TABLE files(  
  ID SERIAL PRIMARY KEY,
  name text NOT NULL,
  size int NOT NULL,
  folder_id int REFERENCES folders(id) ON DELETE CASCADE
  CREATE UNIQUE INDEX ON files(name, folder_id)
);

-- INSERT INTO folders(name) VALUES ()
--    INSERT INTO folders(name) VALUES ()
-- )
