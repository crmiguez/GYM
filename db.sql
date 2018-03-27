DROP DATABASE IF EXISTS `gymapp`;

CREATE DATABASE `gymapp`;

CREATE TABLE `gymapp`.`user` (
    `email` varchar(50) NOT NULL,
    `name` varchar(50) NOT NULL,
    `lastname1` varchar(50) DEFAULT '',
    `lastname2` varchar(50) DEFAULT '',
    `pass` varchar(50) NOT NULL,
    `telf` varchar(50) DEFAULT '',
    `direction` varchar(150) DEFAULT '',
    `kind` int NOT NULL ,
    `avatar` varchar(200) DEFAULT '',
    `gender` varchar(50) DEFAULT '',
    `birthday` timestamp NULL DEFAULT NULL,
    `datehigh` timestamp NULL DEFAULT NULL,
    `height` int NOT NULL ,
    `weight` int NOT NULL ,
    PRIMARY KEY (`email`)
);
CREATE TABLE `gymapp`.`exercise` (
    `id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(50) NOT NULL,
    `category` varchar(100) DEFAULT 'others',
    `description` varchar(500)DEFAULT NULL,
    `image` varchar(300) DEFAULT NULL,
    `tutorial` varchar(500)DEFAULT NULL,
    PRIMARY KEY (`id`)
);
CREATE TABLE `gymapp`.`exercises_table` (
    `id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(50) DEFAULT 'new Exercise',
    `dificulty` int DEFAULT 0,
    `description` varchar(500) DEFAULT NULL,
    PRIMARY KEY (`id`)
);
CREATE TABLE `gymapp`.`routine` (
    `id` int NOT NULL AUTO_INCREMENT,
    `id_table` int NOT NULL,
    `id_exercise` int NOT NULL,
    `load` int DEFAULT 0,
    `time` varchar(500) DEFAULT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`id_table`) REFERENCES `gymapp`.`exercises_table`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`id_exercise`) REFERENCES `gymapp`.`exercise`(`id`) ON DELETE CASCADE
);
CREATE TABLE `gymapp`.`activity` (
    `id` int NOT NULL AUTO_INCREMENT,
    `id_user` varchar(45)DEFAULT NULL,
    `description` varchar(500) DEFAULT NULL,
    `name` varchar(50) DEFAULT 'new Activity',
    `max_places` int DEFAULT 0,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`id_user`) REFERENCES `gymapp`.`user`(`email`) ON DELETE SET NULL
);
CREATE TABLE `gymapp`.`session` (
    `id` int NOT NULL AUTO_INCREMENT,
    `id_activity` int NOT NULL,
    `id_user` varchar(45)DEFAULT NULL,
    `name` varchar(50) DEFAULT 'new session',
    `date` timestamp NULL DEFAULT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`id_user`) REFERENCES `gymapp`.`user`(`email`) ON DELETE SET NULL,
    FOREIGN KEY (`id_activity`) REFERENCES `gymapp`.`activity`(`id`) ON DELETE CASCADE
);
CREATE TABLE `gymapp`.`reservation` (
    `id` int NOT NULL AUTO_INCREMENT,
    `id_user` varchar(45)DEFAULT NULL,
    `id_session` int DEFAULT NULL,
    `attendance` bool DEFAULT NULL,
    `date_reservation` date NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`id_user`) REFERENCES `gymapp`.`user`(`email`) ON DELETE CASCADE,
    FOREIGN KEY (`id_session`) REFERENCES `gymapp`.`session`(`id`) ON DELETE CASCADE
);
CREATE TABLE `gymapp`.`session_training` (
    -- HACER QUE ESTA TABLA SEA INDEPENDIENTE DE LA BD.
    `id` int NOT NULL AUTO_INCREMENT,
    `id_user` varchar(45)DEFAULT NULL,
    -- `id_table` int NOT NULL ,
    -- `id_exercise` int NOT NULL,
    `comment` varchar(140) NOT NULL,
    `comment_date` date NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`id_user`) REFERENCES `gymapp`.`user`(`email`) ON DELETE CASCADE
    -- FOREIGN KEY (`id_table`) REFERENCES `gymapp`.`table`(`id`),
    -- FOREIGN KEY (`id_exercise`) REFERENCES `gymapp`.`exercise`(`id`)
);

GRANT ALL ON `gymapp`.* TO 'gymapp'@'localhost' IDENTIFIED BY 'gymapp';

-- INSERTs

INSERT INTO `gymapp`.`user` (`email`, `name`, `lastname1`, `lastname2`, `pass`, `telf`, `direction`, `kind`, `avatar`, `gender`, `birthday`, `datehigh`, `height`, `weight`)
VALUES ('admin', 'admin', 'admin', 'admin', 'admin', '988776655', 'Avenida Habana, 9', '1', 'avatar.png', 'male', '1977-10-23 05:22:00', '2016-10-01 00:00:00', '170', '70'),
('a', 'Manolo', 'Ruiz', 'Vallejo', 'a', '988776655', 'Avenida Habana, 9', '1', 'avatar.png', 'male', '1977-10-23 05:22:00', '2016-10-01 00:00:00', '170', '70'),
('lara@lara.com', 'Lara', 'Rivero', 'Vázquez', 'UTF', '986808080', 'Plaza España, 4', '0', 'avatar2.png', 'female', '2016-05-09 17:30:00', '2016-09-11 00:00:00', '163', '75');

INSERT INTO `gymapp`.`activity` (`id`, `id_user`, `description`, `name`, `max_places`)
VALUES (1, NULL, 'Consiste en realizar ejercicios cardiovasculares. ', 'Cardio', '5'),
(2, NULL, 'Consiste en realizar ejercicios de relevo estilo militar.', 'Crossfit', '5');

INSERT INTO `gymapp`.`exercise` (`id`, `name`, `category`, `description`, `image`, `tutorial`)
VALUES (1, 'Flexiones Básicas', 'others', 'Realizar sencillas flexiones en el suelo.', NULL, NULL),
(2, 'Saltos ', 'others', 'Realizar saltos', NULL, NULL);

INSERT INTO `gymapp`.`reservation` (`id`, `id_user`, `attendance`, `date_reservation`)
VALUES ('1', NULL, '0','2016-10-31 00:00:00'), ('2', NULL, '1', '2016-10-31 00:00:00');

INSERT INTO `gymapp`.`session` (`id`, `id_activity`, `id_user`, `name`, `date`)
VALUES ('1', '2', 'a', 'Sesión Intensiva', '2016-10-30 00:00:00'),
('2', '2', 'a', 'Sesión Matinal', '2016-10-31 00:00:00');

INSERT INTO `gymapp`.`exercises_table` (`id`, `name`, `dificulty`, `description`)
VALUES (1, 'Tabla Cardio', '3', 'Tabla ejercicios cardio'),
(2, 'Tabla Crossfit', '7', 'Tabla ejercicios Crossfit.');

-- INSERT INTO `gymapp`.`sessiontraining` (`id`, `id_user`, `id_table`, `id_exercise`, `comment_sessiontraining`, `date_comment_sessiontraining`)
-- VALUES ('1', 'a', '1', '1', 'Hice las flexiones básicas. ', '2016-11-04 00:00:00'),
-- ('2', 'a', '2', '2', 'Hice los saltos. ', '2016-11-08 00:00:00');
