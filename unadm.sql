-- Crear la base de datos si no existe
CREATE DATABASE IF NOT EXISTS unadm;
USE unadm;

-- Crear la tabla `inscripciones` con los campos necesarios para almacenar los datos ingresados
CREATE TABLE IF NOT EXISTS inscripciones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido_paterno VARCHAR(100) NOT NULL,
    apellido_materno VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    identificacion VARCHAR(50) NOT NULL,
    curso VARCHAR(50) NOT NULL,
    curp VARCHAR(18), -- Campo para CURP autogenerada
    rfc VARCHAR(13),  -- Campo para RFC autogenerado
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Este archivo no incluye inserciones, pero puedes hacerlo manualmente a través de phpMyAdmin o el formulario
