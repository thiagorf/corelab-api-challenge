-- DropIndex
DROP INDEX "Vehicle_textSearch_idx";

-- AlterTable
ALTER TABLE "Vehicle" ALTER COLUMN "textSearch" DROP DEFAULT;

-- CreateIndex
CREATE INDEX "Vehicle_textSearch_idx" ON "Vehicle"("textSearch");
