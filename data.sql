CREATE TABLE IF NOT EXISTS `users`(
   `username` VARCHAR(64) NOT NULL,
   `password` VARCHAR(64) NOT NULL,
   `author` VARCHAR(32) NOT NULL,
   `createdAt` DATETIME NOT NULL,
   `updatedAt` DATETIME NOT NULL,
   PRIMARY KEY ( `username` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `carousels`(
   `id` VARCHAR(64) NOT NULL,
   `img` VARCHAR(100) NOT NULL,
   `title` VARCHAR(100) NOT NULL,
   `caption` LONGTEXT NOT NULL,
   `createdAt` DATETIME NOT NULL,
   `updatedAt` DATETIME NOT NULL,
   PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `shops`(
   `id` VARCHAR(64) NOT NULL,
   `name` VARCHAR(64) NOT NULL,
   `sweet_id` VARCHAR(64) NOT NULL,
   `level` INTEGER NOT NULL,
   `address` VARCHAR(64) NOT NULL,
   `imgGroup` VARCHAR(100) NOT NULL,
   `createdAt` DATETIME NOT NULL,
   `updatedAt` DATETIME NOT NULL,
   PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `sweet_categorys`(
   `id` VARCHAR(64) NOT NULL,
   `title` VARCHAR(100) NOT NULL,
   `sweet_order` INTEGER NOT NULL,
   `createdAt` DATETIME NOT NULL,
   `updatedAt` DATETIME NOT NULL,
   PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `sweet_infos`(
   `id` VARCHAR(64) NOT NULL,
   `title` VARCHAR(100) NOT NULL,
   `thumb` VARCHAR(100) NOT NULL,
   `caption` LONGTEXT NOT NULL,
   `desc` LONGTEXT NOT NULL,
   `category_id` VARCHAR(100) NOT NULL,
   `area` VARCHAR(100) NOT NULL,
   `diff` INTEGER NOT NULL,
   `shop_id` VARCHAR(100) NOT NULL,
   `createdAt` DATETIME NOT NULL,
   `updatedAt` DATETIME NOT NULL,
   PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


