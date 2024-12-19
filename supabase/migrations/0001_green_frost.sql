/*
  # Create products table with full-text search

  1. New Tables
    - `products`
      - `id` (uuid, primary key)
      - `title` (text)
      - `price` (decimal)
      - `original_price` (decimal, nullable)
      - `rating` (decimal)
      - `review_count` (text)
      - `image` (text)
      - `store` (text)
      - `description` (text, nullable)
      - `features` (text[], nullable)
      - `specifications` (jsonb, nullable)
      - `created_at` (timestamptz)
      - `search_text` (tsvector, generated column for full-text search)

  2. Security
    - Enable RLS on `products` table
    - Add policy for public read access
*/

-- Create products table with full-text search
CREATE TABLE products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  price decimal(10,2) NOT NULL,
  original_price decimal(10,2),
  rating decimal(3,1) NOT NULL,
  review_count text,
  image text NOT NULL,
  store text NOT NULL,
  description text,
  features text[],
  specifications jsonb,
  created_at timestamptz DEFAULT now(),
  search_text tsvector GENERATED ALWAYS AS (
    setweight(to_tsvector('italian', coalesce(title, '')), 'A') ||
    setweight(to_tsvector('italian', coalesce(description, '')), 'B') ||
    setweight(to_tsvector('italian', coalesce(store, '')), 'C')
  ) STORED
);

-- Create index for full-text search
CREATE INDEX products_search_idx ON products USING GIN (search_text);

-- Enable Row Level Security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Allow public read access"
  ON products
  FOR SELECT
  TO public
  USING (true);