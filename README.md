# Consumo de Servicios Web: Fetch vs. Axios

Este proyecto consiste en el desarrollo de una API REST básica y una interfaz web para la gestión de estudiantes, con el objetivo de comparar dos herramientas populares para el consumo de servicios web: la API nativa **Fetch** y la biblioteca **Axios**.

## 📋 Descripción

La aplicación permite realizar peticiones HTTP de tipo `GET` y `POST` a un servidor local para consultar y registrar alumnos. A través de esta implementación, se analizan las diferencias en el manejo de respuestas JSON, la validación de errores y la simplicidad del código entre ambas tecnologías.

## 🛠️ Tecnologías Utilizadas

* **Backend:** Node.js, Express y middleware CORS.
* **Frontend:** HTML5, CSS3 y JavaScript (ES6+).
* **Herramientas de consumo:** Fetch API (nativo) y Axios (librería externa).

## 🚀 Instalación y Configuración

### 1. Requisitos previos
Es necesario tener instalado [Node.js](https://nodejs.org/) en el sistema.

### 2. Configuración del Servidor
Desde la carpeta raíz del proyecto, inicializa las dependencias necesarias:

```bash
# Inicializar el proyecto
npm init -y

# Instalar Express y CORS
npm install express cors
```

### 3. Ejecución

Para poner en marcha la API REST, ejecuta el siguiente comando en tu terminal:

```bash
node server.js
```
El servidor se ejecutará por defecto en: http://localhost:3000

## 🔌 Endpoints de la API 

El servidor (server.js) expone las siguientes rutas para la gestión de alumnos:
* **GET /api/students**. Devuelve un arreglo JSON con la lista de todos los estudiantes registrados.
* **POST /api/students**. Registra un nuevo estudiante. Requiere un cuerpo JSON con los campos name, email y age.
