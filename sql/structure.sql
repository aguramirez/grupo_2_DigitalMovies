CREATE DATABASE IF NOT EXISTS db_peliculas;

USE db_peliculas;

CREATE TABLE IF NOT EXISTS peliculas (
   id INT AUTO_INCREMENT,
   titulo VARCHAR(150) NOT NULL,
   descripcion TEXT NOT NULL,
   anio INT NOT NULL,
   imagen  VARCHAR(255) NOT NULL,
   trailer VARCHAR(255),
   categoria_id INT NOT NULL,categoria_id
   PRIMARY KEY (id)
);

CREATE TABLE categorias (
   id INT AUTO_INCREMENT,
   nombre VARCHAR(255) NOT NULL,
   PRIMARY KEY (id)
);

CREATE TABLE usuarios (
   id INT AUTO_INCREMENT,
   usuario  VARCHAR(255) NOT NULL,
   email VARCHAR(255) NOT NULL,
   password VARCHAR(255) NOT NULL,
   foto VARCHAR(255),
   PRIMARY KEY (id)
);

ALTER TABLE peliculas 
ADD CONSTRAINT fkcategorias_peliculas
FOREIGN KEY (categoria_id) 
REFERENCES categorias(id);