-- CreateTable
CREATE TABLE `payment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `housenumber` VARCHAR(191) NOT NULL,
    `moo` VARCHAR(191) NOT NULL,
    `village` VARCHAR(191) NOT NULL,
    `soi` VARCHAR(191) NOT NULL,
    `road` VARCHAR(191) NOT NULL,
    `province` VARCHAR(191) NOT NULL,
    `district` VARCHAR(191) NOT NULL,
    `subdistrict` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NOT NULL,
    `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
