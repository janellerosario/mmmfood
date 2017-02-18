BEGIN;

CREATE TABLE food (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  url TEXT NOT NULL,
  description TEXT,
  likes INT NOT NULL DEFAULT 0,
  created_at TIMESTAMP DEFAULT current_timestamp
);

COMMIT;
