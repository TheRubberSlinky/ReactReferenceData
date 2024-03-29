USE [master]
GO
/****** Object:  Database [React_DB]    Script Date: 3/31/2020 1:59:17 PM ******/
CREATE DATABASE [React_DB]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'React_DB', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL13.MSSQLSERVER\MSSQL\DATA\React_DB.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'React_DB_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL13.MSSQLSERVER\MSSQL\DATA\React_DB_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [React_DB] SET COMPATIBILITY_LEVEL = 130
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [React_DB].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [React_DB] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [React_DB] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [React_DB] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [React_DB] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [React_DB] SET ARITHABORT OFF 
GO
ALTER DATABASE [React_DB] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [React_DB] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [React_DB] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [React_DB] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [React_DB] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [React_DB] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [React_DB] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [React_DB] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [React_DB] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [React_DB] SET  ENABLE_BROKER 
GO
ALTER DATABASE [React_DB] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [React_DB] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [React_DB] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [React_DB] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [React_DB] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [React_DB] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [React_DB] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [React_DB] SET RECOVERY FULL 
GO
ALTER DATABASE [React_DB] SET  MULTI_USER 
GO
ALTER DATABASE [React_DB] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [React_DB] SET DB_CHAINING OFF 
GO
ALTER DATABASE [React_DB] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [React_DB] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [React_DB] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [React_DB] SET QUERY_STORE = OFF
GO
USE [React_DB]
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
USE [React_DB]
GO
/****** Object:  Table [dbo].[Branches]    Script Date: 3/31/2020 1:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Branches](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[BranchCode] [int] NOT NULL,
	[BranchName] [varchar](50) NOT NULL,
	[BranchCategory] [int] NOT NULL,
	[ParentBranch] [int] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[employees]    Script Date: 3/31/2020 1:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[employees](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[NbNo] [varchar](8) NOT NULL,
	[Name] [varchar](50) NOT NULL,
	[Surname] [varchar](50) NOT NULL,
	[LastLoggedOn] [datetime] NOT NULL,
	[EmployeeID] [varchar](13) NOT NULL,
	[Branch] [int] NULL
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Branches] ON 
GO
INSERT [dbo].[Branches] ([ID], [BranchCode], [BranchName], [BranchCategory], [ParentBranch]) VALUES (1, 1, N'Roodepoort', 5, NULL)
GO
INSERT [dbo].[Branches] ([ID], [BranchCode], [BranchName], [BranchCategory], [ParentBranch]) VALUES (2, 2, N'Krugersdorp', 5, NULL)
GO
INSERT [dbo].[Branches] ([ID], [BranchCode], [BranchName], [BranchCategory], [ParentBranch]) VALUES (3, 3, N'Corona', 5, 1)
GO
INSERT [dbo].[Branches] ([ID], [BranchCode], [BranchName], [BranchCategory], [ParentBranch]) VALUES (4, 4, N'Fairlands', 5, NULL)
GO
INSERT [dbo].[Branches] ([ID], [BranchCode], [BranchName], [BranchCategory], [ParentBranch]) VALUES (5, 5, N'Fourways', 5, NULL)
GO
INSERT [dbo].[Branches] ([ID], [BranchCode], [BranchName], [BranchCategory], [ParentBranch]) VALUES (6, 6, N'Cresta', 5, 4)
GO
INSERT [dbo].[Branches] ([ID], [BranchCode], [BranchName], [BranchCategory], [ParentBranch]) VALUES (7, 7, N'westGate', 5, 1)
GO
INSERT [dbo].[Branches] ([ID], [BranchCode], [BranchName], [BranchCategory], [ParentBranch]) VALUES (8, 8, N'clearwater', 5, 1)
GO
INSERT [dbo].[Branches] ([ID], [BranchCode], [BranchName], [BranchCategory], [ParentBranch]) VALUES (9, 9, N'key west', 5, 2)
GO
INSERT [dbo].[Branches] ([ID], [BranchCode], [BranchName], [BranchCategory], [ParentBranch]) VALUES (10, 10, N'Fourways mall', 5, 5)
GO
INSERT [dbo].[Branches] ([ID], [BranchCode], [BranchName], [BranchCategory], [ParentBranch]) VALUES (11, 11, N'CleawaterWest', 5, 8)
GO
INSERT [dbo].[Branches] ([ID], [BranchCode], [BranchName], [BranchCategory], [ParentBranch]) VALUES (12, 12, N'ClearWaterEast', 5, 8)
GO
INSERT [dbo].[Branches] ([ID], [BranchCode], [BranchName], [BranchCategory], [ParentBranch]) VALUES (13, 13, N'Ebola', 5, 5)
GO
SET IDENTITY_INSERT [dbo].[Branches] OFF
GO
SET IDENTITY_INSERT [dbo].[employees] ON 
GO
INSERT [dbo].[employees] ([ID], [NbNo], [Name], [Surname], [LastLoggedOn], [EmployeeID], [Branch]) VALUES (1, N'cc309921', N'Tristan', N'Donovan', CAST(N'2020-03-12T00:00:00.000' AS DateTime), N'9610225060083', 8)
GO
INSERT [dbo].[employees] ([ID], [NbNo], [Name], [Surname], [LastLoggedOn], [EmployeeID], [Branch]) VALUES (2, N'cc302066', N'mulalo', N'mudao', CAST(N'2020-03-12T00:00:00.000' AS DateTime), N'5678341290875', 10)
GO
INSERT [dbo].[employees] ([ID], [NbNo], [Name], [Surname], [LastLoggedOn], [EmployeeID], [Branch]) VALUES (3, N'cc059873', N'herman', N'Nel motors', CAST(N'2020-03-12T00:00:00.000' AS DateTime), N'4583848968435', 13)
GO
INSERT [dbo].[employees] ([ID], [NbNo], [Name], [Surname], [LastLoggedOn], [EmployeeID], [Branch]) VALUES (4, N'cc034568', N'Louis', N'Armstrong', CAST(N'2020-03-12T00:00:00.000' AS DateTime), N'2348794835435', 12)
GO
INSERT [dbo].[employees] ([ID], [NbNo], [Name], [Surname], [LastLoggedOn], [EmployeeID], [Branch]) VALUES (5, N'cc284564', N'Tiisetso', N'smith', CAST(N'2020-03-12T00:00:00.000' AS DateTime), N'4538963578493', 5)
GO
INSERT [dbo].[employees] ([ID], [NbNo], [Name], [Surname], [LastLoggedOn], [EmployeeID], [Branch]) VALUES (6, N'cc059685', N'Mark', N'Holloway', CAST(N'2020-03-12T00:00:00.000' AS DateTime), N'3458648395796', 10)
GO
INSERT [dbo].[employees] ([ID], [NbNo], [Name], [Surname], [LastLoggedOn], [EmployeeID], [Branch]) VALUES (7, N'cc485647', N'michael', N'Jordan', CAST(N'2020-03-12T00:00:00.000' AS DateTime), N'3495867583464', 6)
GO
SET IDENTITY_INSERT [dbo].[employees] OFF
GO
/****** Object:  Index [UQ__Branches__1C61B888BC615D0A]    Script Date: 3/31/2020 1:59:19 PM ******/
ALTER TABLE [dbo].[Branches] ADD UNIQUE NONCLUSTERED 
(
	[BranchCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ__employee__703416DE5E535D76]    Script Date: 3/31/2020 1:59:19 PM ******/
ALTER TABLE [dbo].[employees] ADD UNIQUE NONCLUSTERED 
(
	[NbNo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Branches]  WITH CHECK ADD FOREIGN KEY([ParentBranch])
REFERENCES [dbo].[Branches] ([BranchCode])
GO
ALTER TABLE [dbo].[employees]  WITH CHECK ADD FOREIGN KEY([Branch])
REFERENCES [dbo].[Branches] ([BranchCode])
GO
USE [master]
GO
ALTER DATABASE [React_DB] SET  READ_WRITE 
GO
