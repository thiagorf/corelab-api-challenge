-- DropIndex
DROP INDEX "Vehicle_textSearch_idx";

-- AlterTable
ALTER TABLE "Vehicle" DROP COLUMN "textSearch";

ALTER TABLE "Vehicle" ADD COLUMN "textSearch" TSVECTOR
  GENERATED ALWAYS AS (
    to_tsvector('english', coalesce(name, '')
     || ' ' || 
     coalesce(description, '') 
     || ' ' || 
     coalesce(color, '') 
     || ' ' || 
     coalesce(brand, '') 
     || ' ' || 
     coalesce(price, '') 
     || ' ' || 
     coalesce(year, ''))) STORED;

-- CreateIndex
CREATE INDEX "Vehicle_textSearch_idx" ON "Vehicle" USING GIN ("textSearch");
