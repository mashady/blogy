/*
  Warnings:

  - You are about to drop the `tags` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `tags` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `tags` DROP FOREIGN KEY `Tags_postId_fkey`;

-- AlterTable
ALTER TABLE `post` ADD COLUMN `tags` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `tags`;
