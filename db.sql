-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 04, 2018 at 11:31 AM
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
-- Table structure for table `task`
--

CREATE TABLE `task` (
  `task_id` int(7) UNSIGNED NOT NULL,
  `task_name` varchar(20) NOT NULL,
  `task_description` varchar(255) NOT NULL,
  `actual_start_date` date NOT NULL,
  `actual_end_date` date NOT NULL,
  `task_status` tinyint(1) NOT NULL,
  `modified_by` int(10) UNSIGNED NOT NULL,
  `modified_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  `created_by` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `task_members`
--

CREATE TABLE `task_members` (
  `emp_id` int(11) NOT NULL,
  `task_id` int(7) UNSIGNED NOT NULL,
  `created_by` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
(1, 100, 'Adam', 'John', 'cGFzc3dvcmQxMjM0', 1111111111, 'adam@gmail.com', 'm', '', 0, '2018-08-04 08:12:57', 0, '2018-08-04 08:12:57'),
(12, 101, 'John', 'Peter', 'cGFzc3dvcmQxMjM0', 83838383, 'jptr@gmail.com', 'm', '', 100, '2018-08-04 08:27:42', 0, '2018-08-04 08:27:42'),
(13, 102, 'Charles', 'Johnson', 'cGFzc3dvcmQxMjM0', 22222222221, 'cjohn@gmail.com', 'm', '', 100, '2018-08-04 08:40:42', 100, '2018-08-04 08:46:55');

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
(1, 'asso', 'Associate', 'To perform the various HR tasks & monitor them', 100, '2018-08-04 09:08:00', 100, '2018-08-04 09:11:17'),
(2, 'adm', 'Admin', 'to add users,roles,tasks etc.', 100, '2018-08-04 09:11:54', 0, '0000-00-00 00:00:00'),
(3, 'lead', 'HR LEAD', 'To monitor the performance of his team', 100, '2018-08-04 09:12:16', 0, '0000-00-00 00:00:00'),
(4, 'head', 'HR HEAD', 'to lead the entire HR panel', 100, '2018-08-04 09:13:04', 0, '0000-00-00 00:00:00');

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
('asso', 101, 0, '2018-07-31 09:41:51'),
('head', 102, 0, '2018-07-31 10:39:38');

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
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `emp_id` (`emp_id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `phone_no` (`phone_no`);

--
-- Indexes for table `user_role`
--
ALTER TABLE `user_role`
  ADD PRIMARY KEY (`role_id`),
  ADD UNIQUE KEY `role_code` (`role_code`),
  ADD UNIQUE KEY `role_id` (`role_id`);

--
-- Indexes for table `user_role_mapping`
--
ALTER TABLE `user_role_mapping`
  ADD PRIMARY KEY (`role_code`,`emp_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
