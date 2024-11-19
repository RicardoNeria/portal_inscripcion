-- Crear base de datos
CREATE DATABASE unadm;

-- Usar la base de datos recién creada
USE unadm;

-- Crear la tabla inscripciones para almacenar los datos de los estudiantes
CREATE TABLE inscripciones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    identificacion VARCHAR(50) NOT NULL,
    curso VARCHAR(50) NOT NULL,
    fecha_inscripcion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
