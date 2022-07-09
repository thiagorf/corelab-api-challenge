-- AlterTable
ALTER TABLE "Vehicle" ADD COLUMN "textSearch" tsvector
  GENERATED ALWAYS AS (
    to_tsvector('english', coalesce(name, '') || coalesce(description, '') || coalesce(brand, '') || coalesce(price, '') || coalesce(year, ''))) STORED;

-- CreateIndex
CREATE INDEX "Vehicle_textSearch_idx" ON "Vehicle" USING GIN ("textSearch");
