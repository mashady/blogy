/*
  Warnings:

  - You are about to alter the column `tags` on the `post` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.

*/
-- AlterTable
ALTER TABLE `post` MODIFY `tags` JSON NOT NULL;
