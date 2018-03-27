-- phpMyAdmin SQL Dump
-- version 4.2.9
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 15, 2016 at 05:34 PM
-- Server version: 5.5.39
-- PHP Version: 5.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `gymapp`
--
CREATE DATABASE IF NOT EXISTS `gymapp` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `gymapp`;

-- --------------------------------------------------------

--
-- Table structure for table `activity`
--
-- Creation: Dec 15, 2016 at 05:07 PM
-- Last update: Dec 15, 2016 at 05:15 PM
--

DROP TABLE IF EXISTS `activity`;
CREATE TABLE IF NOT EXISTS `activity` (
`id` int(11) NOT NULL,
  `id_user` varchar(45) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `name` varchar(50) DEFAULT 'new Activity',
  `max_places` int(11) DEFAULT '0',
  `discount` int(11) DEFAULT NULL,
  `promotion_until` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `activity`
--

INSERT INTO `activity` (`id`, `id_user`, `description`, `name`, `max_places`, `discount`, `promotion_until`) VALUES
(1, NULL, 'Consiste en realizar ejercicios cardiovasculares', 'Cardio', 5, NULL, NULL),
(2, NULL, NULL, '', 0, NULL, NULL),
(3, NULL, '20% de descuento para nuestros usuarios UTF', 'Cardio Especial', 15, 20, '2017-01-25 17:00:00'),
(4, NULL, '15% de descuento para nuestros usuarios UTF', 'Crossfit Especial', 15, 15, '2017-01-31 19:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `exercise`
--
-- Creation: Oct 30, 2016 at 01:38 PM
-- Last update: Oct 30, 2016 at 01:48 PM
--

DROP TABLE IF EXISTS `exercise`;
CREATE TABLE IF NOT EXISTS `exercise` (
`id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `category` varchar(100) DEFAULT 'others',
  `description` varchar(500) DEFAULT NULL,
  `image` varchar(300) DEFAULT NULL,
  `tutorial` varchar(500) DEFAULT NULL
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `exercise`
--

INSERT INTO `exercise` (`id`, `name`, `category`, `description`, `image`, `tutorial`) VALUES
(1, 'Flexiones Básicas', 'others', 'Realizar sencillas flexiones en el suelo.', NULL, NULL),
(2, 'Saltos ', 'others', 'Realizar saltos', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `reservation`
--
-- Creation: Oct 30, 2016 at 01:38 PM
-- Last update: Oct 30, 2016 at 01:51 PM
--

DROP TABLE IF EXISTS `reservation`;
CREATE TABLE IF NOT EXISTS `reservation` (
`id` int(11) NOT NULL,
  `id_user` varchar(45) DEFAULT NULL,
  `description` tinyint(1) DEFAULT NULL
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `reservation`
--

INSERT INTO `reservation` (`id`, `id_user`, `description`) VALUES
(1, NULL, 2),
(2, NULL, 3);

-- --------------------------------------------------------

--
-- Table structure for table `routine`
--
-- Creation: Oct 30, 2016 at 01:38 PM
-- Last update: Oct 30, 2016 at 01:53 PM
--

DROP TABLE IF EXISTS `routine`;
CREATE TABLE IF NOT EXISTS `routine` (
`id` int(11) NOT NULL,
  `id_table` int(11) NOT NULL,
  `id_exercise` int(11) NOT NULL,
  `load` int(11) DEFAULT '0',
  `time` varchar(500) DEFAULT NULL
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `routine`
--

INSERT INTO `routine` (`id`, `id_table`, `id_exercise`, `load`, `time`) VALUES
(1, 1, 1, 15, '30 min'),
(2, 1, 1, 5, '15 min');

-- --------------------------------------------------------

--
-- Table structure for table `session`
--
-- Creation: Oct 30, 2016 at 01:38 PM
-- Last update: Oct 30, 2016 at 01:55 PM
--

DROP TABLE IF EXISTS `session`;
CREATE TABLE IF NOT EXISTS `session` (
`id` int(11) NOT NULL,
  `id_activity` int(11) NOT NULL,
  `id_user` varchar(45) DEFAULT NULL,
  `name` varchar(50) DEFAULT 'new session',
  `date` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `session`
--

INSERT INTO `session` (`id`, `id_activity`, `id_user`, `name`, `date`) VALUES
(1, 1, '1', 'Sesión Intensiva', '2016-10-29 22:00:00'),
(2, 1, '2', 'Sesión Matinal', '2016-10-30 23:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `table`
--
-- Creation: Oct 30, 2016 at 01:38 PM
-- Last update: Oct 30, 2016 at 01:58 PM
--

DROP TABLE IF EXISTS `table`;
CREATE TABLE IF NOT EXISTS `table` (
`id` int(11) NOT NULL,
  `id_user` varchar(45) DEFAULT NULL,
  `name` varchar(50) DEFAULT 'new Exercise',
  `dificulty` int(11) DEFAULT '0',
  `description` varchar(500) DEFAULT NULL
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `table`
--

INSERT INTO `table` (`id`, `id_user`, `name`, `dificulty`, `description`) VALUES
(1, '1', 'Tabla Cardio', 3, 'Tabla ejercicios cardio'),
(2, '2', 'Tabla Crossfit', 7, 'Tabla ejercicios Crossfit.');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--
-- Creation: Oct 30, 2016 at 01:38 PM
-- Last update: Oct 30, 2016 at 02:03 PM
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `email` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `lastname1` varchar(50) DEFAULT '',
  `lastname2` varchar(50) DEFAULT '',
  `pass` varchar(50) NOT NULL,
  `telf` varchar(50) DEFAULT '',
  `direction` varchar(150) DEFAULT '',
  `kind` int(11) NOT NULL,
  `avatar` varchar(200) DEFAULT '',
  `gender` varchar(50) DEFAULT '',
  `birthday` timestamp NULL DEFAULT NULL,
  `datehigh` timestamp NULL DEFAULT NULL,
  `height` int(11) NOT NULL,
  `weight` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`email`, `name`, `lastname1`, `lastname2`, `pass`, `telf`, `direction`, `kind`, `avatar`, `gender`, `birthday`, `datehigh`, `height`, `weight`) VALUES
('manolo@manolo.com', 'Manolo', 'Ruiz', 'Vallejo', 'PET', '988776655', 'Avenida Habana, 9', 3, 'avatar.png', 'male', '1977-10-23 03:22:00', '2016-09-30 22:00:00', 170, 70),
('lara@lara.com', 'Lara', 'Rivero', 'Vázquez', 'UTF', '986808080', 'Plaza España, 4', 10, 'avatar2.png', 'female', '2016-05-09 15:30:00', '2016-09-10 22:00:00', 163, 75);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activity`
--
ALTER TABLE `activity`
 ADD PRIMARY KEY (`id`), ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `exercise`
--
ALTER TABLE `exercise`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reservation`
--
ALTER TABLE `reservation`
 ADD PRIMARY KEY (`id`), ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `routine`
--
ALTER TABLE `routine`
 ADD PRIMARY KEY (`id`), ADD KEY `id_table` (`id_table`), ADD KEY `id_exercise` (`id_exercise`);

--
-- Indexes for table `session`
--
ALTER TABLE `session`
 ADD PRIMARY KEY (`id`), ADD KEY `id_user` (`id_user`), ADD KEY `id_activity` (`id_activity`);

--
-- Indexes for table `table`
--
ALTER TABLE `table`
 ADD PRIMARY KEY (`id`), ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
 ADD PRIMARY KEY (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `activity`
--
ALTER TABLE `activity`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `exercise`
--
ALTER TABLE `exercise`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `reservation`
--
ALTER TABLE `reservation`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `routine`
--
ALTER TABLE `routine`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `session`
--
ALTER TABLE `session`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `table`
--
ALTER TABLE `table`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
