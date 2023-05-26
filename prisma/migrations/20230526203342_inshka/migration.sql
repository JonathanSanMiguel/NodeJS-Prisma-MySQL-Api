-- CreateTable
CREATE TABLE `marcas` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Nombre` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `marcas_Nombre_key`(`Nombre`),
    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `productos` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `CreatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `UpdatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `Nombre` VARCHAR(191) NOT NULL,
    `Descricpion` VARCHAR(191) NOT NULL,
    `Peso` INTEGER NOT NULL,
    `MarcaId` INTEGER NOT NULL,
    `Estado` VARCHAR(191) NOT NULL,
    `Cantidad` INTEGER NOT NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `productos` ADD CONSTRAINT `productos_MarcaId_fkey` FOREIGN KEY (`MarcaId`) REFERENCES `marcas`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;
