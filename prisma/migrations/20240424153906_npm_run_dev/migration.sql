/*
  Warnings:

  - You are about to drop the column `postId` on the `tags` table. All the data in the column will be lost.
  - Added the required column `articleId` to the `Tags` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `tags` DROP FOREIGN KEY `Tags_postId_fkey`;

-- AlterTable
ALTER TABLE `tags` DROP COLUMN `postId`,
    ADD COLUMN `articleId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Tags` ADD CONSTRAINT `Tags_articleId_fkey` FOREIGN KEY (`articleId`) REFERENCES `Post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
