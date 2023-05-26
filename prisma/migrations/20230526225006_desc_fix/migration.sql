/*
  Warnings:

  - You are about to drop the column `Descricpion` on the `productos` table. All the data in the column will be lost.
  - Added the required column `Descripcion` to the `productos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `productos` DROP COLUMN `Descricpion`,
    ADD COLUMN `Descripcion` VARCHAR(191) NOT NULL;
