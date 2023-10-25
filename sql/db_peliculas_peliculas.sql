CREATE DATABASE  IF NOT EXISTS `db_peliculas` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `db_peliculas`;
-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: db_peliculas
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `peliculas`
--

DROP TABLE IF EXISTS `peliculas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `peliculas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) DEFAULT NULL,
  `descripcion` longtext,
  `anio` varchar(10) DEFAULT NULL,
  `imagen` varchar(100) DEFAULT NULL,
  `trailer` varchar(100) DEFAULT NULL,
  `categoria_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `categoria_id` FOREIGN KEY (`id`) REFERENCES `categorias` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `peliculas`
--

LOCK TABLES `peliculas` WRITE;
/*!40000 ALTER TABLE `peliculas` DISABLE KEYS */;
INSERT INTO `peliculas` VALUES (1,'Oppenheimer','descripcion','2023','/images/oppenheimer.jpg','https://www.youtube.com/embed/MVvGSBKV504',1),(2,'Barbie','descripcion','2023','/images/barbie.jpg','https://www.youtube.com/embed/gH2mRECr6y4',4),(3,'Elvis','Una mirada a la vida y la carrera del legendario cantante y músico Elvis Presley.','2022','/images/elvis.jpg','https://www.youtube.com/embed/JoqmHAr3fu8',2),(4,'Top Gun: Maverick','Pete \'Maverick\' Mitchell debe entrenar a un grupo de jóvenes pilotos de combate para una misión especial.','2022','/images/topgunmaverick.jpg','https://www.youtube.com/embed/zzBIzYmxatU',5),(5,'Spider-Man: Across the Spider-Verse','Miles Morales se embarca en una aventura interdimensional para unir a los Spider-Men de diferentes universos.','2023','/images/spidermanacrossthespiderverse.jpg','https://www.youtube.com/embed/b3_1cyJRaQ8',7),(6,'The Batman','Bruce Wayne se enfrenta a un nuevo villano, El Acertijo, mientras intenta limpiar Gotham City de la corrupción.','2022','/images/thebatman.jpg','https://www.youtube.com/embed/fWQrd6cwJ0A',5),(7,'Doctor Strange in the Multiverse of Madness','Doctor Strange debe enfrentarse a una amenaza multiversal mientras intenta ayudar a América Chávez a controlar sus poderes.','2022','/images/doctorstrangeinthemultiverseofmadness.jpg','https://www.youtube.com/embed/D9AzGVmMVpk',4);
/*!40000 ALTER TABLE `peliculas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-24 22:00:11
