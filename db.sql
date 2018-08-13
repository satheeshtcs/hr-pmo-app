-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 11, 2018 at 08:19 PM
-- Server version: 10.1.32-MariaDB
-- PHP Version: 7.2.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_v1`
--

-- --------------------------------------------------------

--
-- Table structure for table `dept`
--

CREATE TABLE `dept` (
  `dept_id` int(8) UNSIGNED NOT NULL,
  `dept_name` varchar(20) NOT NULL,
  `created_by` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `modified_by` int(10) UNSIGNED NOT NULL,
  `modified_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `dept_role_mapping`
--

CREATE TABLE `dept_role_mapping` (
  `dept_id` int(8) UNSIGNED NOT NULL,
  `epm_id` int(10) UNSIGNED NOT NULL,
  `mapped_by` int(10) UNSIGNED NOT NULL,
  `mapped_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tag`
--

CREATE TABLE `tag` (
  `child_id` int(10) UNSIGNED NOT NULL,
  `parent_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tag`
--

INSERT INTO `tag` (`child_id`, `parent_id`) VALUES
(103, 105),
(100, 105),
(111, 105),
(112, 103),
(113, 103),
(114, 106),
(115, 106),
(116, 107),
(117, 107),
(118, 107),
(1122331111, 107);

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

CREATE TABLE `task` (
  `task_id` int(7) UNSIGNED NOT NULL,
  `task_name` varchar(50) NOT NULL,
  `task_description` varchar(255) NOT NULL,
  `task_status` tinyint(2) NOT NULL DEFAULT '0',
  `actual_start_date` date NOT NULL,
  `actual_end_date` date NOT NULL,
  `modified_by` int(10) UNSIGNED NOT NULL,
  `modified_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  `created_by` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `task`
--

INSERT INTO `task` (`task_id`, `task_name`, `task_description`, `task_status`, `actual_start_date`, `actual_end_date`, `modified_by`, `modified_at`, `created_by`, `created_at`) VALUES
(1, 'Intern', 'xyz', 0, '2018-08-08', '2018-08-16', 0, '2018-08-06 05:20:01', 0, '2018-08-04 10:24:29'),
(2, 'Taking campus Interviews', 'Select students from a campus interview', 0, '2018-08-08', '2018-08-16', 0, '2018-08-05 14:15:06', 0, '2018-08-05 03:23:44'),
(3, 'Taking HR Interviews', 'To conduct the HR interviews of students selected from campus interviews', 0, '2018-08-09', '2018-08-09', 0, '0000-00-00 00:00:00', 0, '2018-08-05 14:16:37'),
(4, 'Project Presentation', 'Display and explain the projects', 0, '0000-00-00', '0000-00-00', 0, '0000-00-00 00:00:00', 0, '2018-08-06 05:37:07'),
(5, 'abc', 'project', 0, '0000-00-00', '0000-00-00', 0, '2018-08-06 13:27:48', 0, '2018-08-06 13:27:14'),
(6, 'Hostel allot', 'something', 0, '0000-00-00', '0000-00-00', 0, '0000-00-00 00:00:00', 0, '2018-08-07 12:52:13');

-- --------------------------------------------------------

--
-- Table structure for table `task_members`
--

CREATE TABLE `task_members` (
  `emp_id` int(10) NOT NULL,
  `task_id` int(7) UNSIGNED NOT NULL,
  `assigned_by` int(11) NOT NULL,
  `assigned_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `task_members`
--

INSERT INTO `task_members` (`emp_id`, `task_id`, `assigned_by`, `assigned_at`) VALUES
(100, 1, 0, '2018-08-05 16:27:28'),
(100, 2, 0, '2018-08-05 08:10:41'),
(106, 1, 0, '2018-08-05 16:28:43'),
(116, 3, 0, '2018-08-09 10:03:40'),
(117, 4, 0, '2018-08-09 10:03:40'),
(118, 1, 0, '2018-08-09 20:39:23'),
(118, 4, 0, '2018-08-09 10:39:06'),
(118, 5, 0, '2018-08-09 10:32:59'),
(1122331111, 3, 0, '2018-08-11 11:56:46');

-- --------------------------------------------------------

--
-- Table structure for table `task_report`
--

CREATE TABLE `task_report` (
  `id` int(10) UNSIGNED NOT NULL,
  `emp_id` int(10) UNSIGNED NOT NULL,
  `task_id` int(7) UNSIGNED NOT NULL,
  `month` varchar(10) NOT NULL,
  `Value` varchar(10) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `task_report`
--

INSERT INTO `task_report` (`id`, `emp_id`, `task_id`, `month`, `Value`, `created_at`, `modified_at`) VALUES
(1, 100, 1, 'March', '1', '2018-08-08 23:11:12', '2018-08-11 11:41:54'),
(3, 106, 1, 'January', '6', '2018-08-09 04:44:19', '0000-00-00 00:00:00'),
(4, 100, 2, 'March', '', '2018-08-09 10:12:14', '2018-08-11 11:41:09'),
(7, 116, 3, 'January', '9', '2018-08-09 10:12:14', '0000-00-00 00:00:00'),
(8, 117, 4, 'January', '9', '2018-08-09 10:12:14', '0000-00-00 00:00:00'),
(9, 118, 5, 'January', '6', '2018-08-09 10:33:29', '0000-00-00 00:00:00'),
(10, 118, 4, 'January', '6', '2018-08-09 10:39:27', '0000-00-00 00:00:00'),
(19, 118, 1, 'January', '9', '2018-08-09 20:39:53', '0000-00-00 00:00:00'),
(55, 1122331111, 3, 'January', '9', '2018-08-11 11:57:10', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(10) UNSIGNED NOT NULL,
  `emp_id` int(10) UNSIGNED NOT NULL,
  `first_name` varchar(40) NOT NULL,
  `last_name` varchar(40) NOT NULL,
  `password` varchar(32) NOT NULL DEFAULT 'cGFzc3dvcmQxMjM0',
  `phone_no` bigint(11) NOT NULL,
  `email` varchar(30) NOT NULL,
  `gender` char(1) NOT NULL,
  `profile_pic` blob NOT NULL,
  `created_by` int(10) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_by` int(10) NOT NULL,
  `modified_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `emp_id`, `first_name`, `last_name`, `password`, `phone_no`, `email`, `gender`, `profile_pic`, `created_by`, `created_at`, `modified_by`, `modified_at`) VALUES
(1, 100, 'Adaman', 'charles', 'cGFzc3dvcmQxMjM0', 1111111116, 'adam@gmail.com', 'm', '', 0, '2018-08-04 08:12:57', 100, '2018-08-08 19:58:16'),
(18, 102, 'Chris ', 'Woakes', 'cGFzc3dvcmQxMjM0', 7373737373, 'cw@gmail.com', 'm', '', 106, '2018-08-07 10:02:54', 0, '0000-00-00 00:00:00'),
(16, 103, 'MANSEE', 'VERMA', 'cGFzc3dvcmQxMjM0', 12121, 'mansee123@gmail.com', 'f', '', 106, '2018-08-06 13:02:01', 0, '0000-00-00 00:00:00'),
(17, 105, 'ATUL', 'ANAND', 'cGFzc3dvcmQxMjM0', 9497219002, 'ananda@gmail.com', 'm', '', 106, '2018-08-06 13:12:47', 0, '0000-00-00 00:00:00'),
(15, 106, 'John', 'Dalton', 'cGFzc3dvcmQxMjM0', 9494949494, 'jd@gmail.com', 'm', '', 102, '2018-08-05 10:53:42', 0, '0000-00-00 00:00:00'),
(19, 107, 'Ross', 'Geller', 'cGFzc3dvcmQxMjM0', 93939392, 'rg@gmail.com', 'm', '', 100, '2018-08-07 12:50:27', 0, '0000-00-00 00:00:00'),
(0, 108, 'Atul', 'Annnn', 'cGFzc3dvcmQxMjM0', 7783587456, 'nananan@g', 'm', '', 100, '2018-08-09 05:30:23', 0, '0000-00-00 00:00:00'),
(0, 109, 'Arthur', 'Melo', 'cGFzc3dvcmQxMjM0', 84884, 'am@g', 'm', '', 100, '2018-08-09 08:48:41', 0, '0000-00-00 00:00:00'),
(0, 110, 'Malcom', 'Vierra', 'cGFzc3dvcmQxMjM0', 94949494, 'mv@bar', 'm', '', 100, '2018-08-09 08:51:33', 0, '0000-00-00 00:00:00'),
(0, 111, 'Ousmane', 'Dembele', 'cGFzc3dvcmQxMjM0', 3424144454, 'od@dem', 'm', '', 100, '2018-08-09 08:59:00', 0, '0000-00-00 00:00:00'),
(0, 112, 'Phillipe', 'Coutinho', 'cGFzc3dvcmQxMjM0', 94949494943, 'pc@c', 'm', '', 100, '2018-08-09 09:00:08', 0, '0000-00-00 00:00:00'),
(0, 113, 'Steven', 'Gerard', 'cGFzc3dvcmQxMjM0', 344566, 'sg@gmail.com', 'm', '', 100, '2018-08-09 09:01:02', 0, '0000-00-00 00:00:00'),
(0, 114, 'Luka', 'Modric', 'cGFzc3dvcmQxMjM0', 74737272, 'mas@icc', 'm', '', 100, '2018-08-09 09:02:30', 0, '0000-00-00 00:00:00'),
(0, 115, 'Ivan', 'Rakitic', 'cGFzc3dvcmQxMjM0', 33333, 'ir@gm', 'm', '', 100, '2018-08-09 09:03:28', 0, '0000-00-00 00:00:00'),
(0, 116, 'Sarah', 'Taylor', 'cGFzc3dvcmQxMjM0', 66456, 'aj@gmail.com', 'f', '', 100, '2018-08-09 09:05:08', 0, '0000-00-00 00:00:00'),
(0, 117, 'Taylor', 'Swift', 'cGFzc3dvcmQxMjM0', 4556734, 'jsjsjs@gma', 'f', '', 100, '2018-08-09 09:06:33', 0, '0000-00-00 00:00:00'),
(0, 118, 'Adam', 'Eve', 'cGFzc3dvcmQxMjM0', 1111111111111, 'ae@gmail', 'm', '', 100, '2018-08-09 10:31:45', 0, '0000-00-00 00:00:00'),
(0, 1122331111, 'Digital', 'Compass', 'cGFzc3dvcmQxMjM0', 123, '1@1.com', 'm', '', 100, '2018-08-11 11:51:31', 0, '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `user_role`
--

CREATE TABLE `user_role` (
  `role_id` int(5) UNSIGNED NOT NULL,
  `role_code` varchar(20) NOT NULL,
  `role_name` varchar(20) NOT NULL,
  `role_description` varchar(255) NOT NULL,
  `created_by` int(10) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_by` int(10) NOT NULL,
  `modified_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_role`
--

INSERT INTO `user_role` (`role_id`, `role_code`, `role_name`, `role_description`, `created_by`, `created_at`, `modified_by`, `modified_at`) VALUES
(2, 'adm', 'Admin', 'to add users,roles,tasks etc.', 100, '2018-08-04 09:11:54', 0, '0000-00-00 00:00:00'),
(1, 'asso', 'Associate', 'To perform the various HR tasks & monitor them', 100, '2018-08-04 09:08:00', 100, '2018-08-04 09:11:17'),
(4, 'head', 'Head', 'to lead the entire HR panel', 100, '2018-08-04 09:13:04', 0, '2018-08-07 14:22:22'),
(3, 'lead', 'Lead', 'To monitor the performance of his team', 100, '2018-08-04 09:12:16', 0, '2018-08-07 14:22:15');

-- --------------------------------------------------------

--
-- Table structure for table `user_role_mapping`
--

CREATE TABLE `user_role_mapping` (
  `role_code` varchar(20) NOT NULL,
  `emp_id` int(10) UNSIGNED NOT NULL,
  `mapped_by` int(10) NOT NULL,
  `mapped_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_role_mapping`
--

INSERT INTO `user_role_mapping` (`role_code`, `emp_id`, `mapped_by`, `mapped_at`) VALUES
('adm', 100, 0, '2018-08-07 11:36:28'),
('adm', 102, 0, '2018-08-05 08:55:47'),
('asso', 100, 0, '2018-08-06 07:21:41'),
('asso', 111, 0, '2018-08-09 08:59:23'),
('asso', 112, 0, '2018-08-09 09:00:19'),
('asso', 113, 0, '2018-08-09 09:01:29'),
('asso', 114, 0, '2018-08-09 09:02:50'),
('asso', 115, 0, '2018-08-09 09:03:45'),
('asso', 116, 0, '2018-08-09 09:05:18'),
('asso', 117, 0, '2018-08-09 09:06:45'),
('asso', 118, 0, '2018-08-09 10:31:57'),
('asso', 1122331111, 0, '2018-08-11 11:53:04'),
('head', 109, 0, '2018-08-09 08:50:16'),
('head', 110, 0, '2018-08-09 08:51:49'),
('lead', 103, 0, '2018-08-09 08:52:48'),
('lead', 105, 0, '2018-08-05 10:38:52'),
('lead', 106, 0, '2018-08-09 08:57:21'),
('lead', 107, 0, '2018-08-09 08:55:39');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dept`
--
ALTER TABLE `dept`
  ADD PRIMARY KEY (`dept_id`);

--
-- Indexes for table `dept_role_mapping`
--
ALTER TABLE `dept_role_mapping`
  ADD PRIMARY KEY (`dept_id`,`epm_id`);

--
-- Indexes for table `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`task_id`);

--
-- Indexes for table `task_members`
--
ALTER TABLE `task_members`
  ADD PRIMARY KEY (`emp_id`,`task_id`);

--
-- Indexes for table `task_report`
--
ALTER TABLE `task_report`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`emp_id`),
  ADD UNIQUE KEY `emp_id` (`emp_id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `phone_no` (`phone_no`);

--
-- Indexes for table `user_role`
--
ALTER TABLE `user_role`
  ADD PRIMARY KEY (`role_code`),
  ADD UNIQUE KEY `role_code` (`role_code`),
  ADD UNIQUE KEY `role_id` (`role_id`);

--
-- Indexes for table `user_role_mapping`
--
ALTER TABLE `user_role_mapping`
  ADD PRIMARY KEY (`role_code`,`emp_id`),
  ADD KEY `emp_id` (`emp_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `task`
--
ALTER TABLE `task`
  MODIFY `task_id` int(7) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `task_report`
--
ALTER TABLE `task_report`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `user_role_mapping`
--
ALTER TABLE `user_role_mapping`
  ADD CONSTRAINT `user_role_mapping_ibfk_1` FOREIGN KEY (`emp_id`) REFERENCES `user` (`emp_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_role_mapping_ibfk_2` FOREIGN KEY (`role_code`) REFERENCES `user_role` (`role_code`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
