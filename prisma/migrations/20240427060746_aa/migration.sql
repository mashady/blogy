/*
  Warnings:

  - You are about to drop the column `articleId` on the `tags` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `tags` DROP FOREIGN KEY `Tags_articleId_fkey`;

-- AlterTable
ALTER TABLE `tags` DROP COLUMN `articleId`;

-- CreateTable
CREATE TABLE `_PostToTags` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_PostToTags_AB_unique`(`A`, `B`),
    INDEX `_PostToTags_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_PostToTags` ADD CONSTRAINT `_PostToTags_A_fkey` FOREIGN KEY (`A`) REFERENCES `Post`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PostToTags` ADD CONSTRAINT `_PostToTags_B_fkey` FOREIGN KEY (`B`) REFERENCES `Tags`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
