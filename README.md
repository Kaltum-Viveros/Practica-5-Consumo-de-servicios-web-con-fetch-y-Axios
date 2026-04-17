# Consumo de Servicios Web: Fetch vs. Axios

[cite_start]Este proyecto consiste en el desarrollo de una API REST básica y una interfaz web para la gestión de estudiantes, con el objetivo de comparar dos herramientas populares para el consumo de servicios web: la API nativa **Fetch** y la biblioteca **Axios**[cite: 83, 89].

## 📋 Descripción

[cite_start]La aplicación permite realizar peticiones HTTP de tipo `GET` y `POST` a un servidor local para consultar y registrar alumnos[cite: 88]. [cite_start]A través de esta implementación, se analizan las diferencias en el manejo de respuestas JSON, la validación de errores y la simplicidad del código entre ambas tecnologías[cite: 91].

## 🛠️ Tecnologías Utilizadas

* [cite_start]**Backend:** Node.js, Express y middleware CORS[cite: 92].
* [cite_start]**Frontend:** HTML5, CSS3 y JavaScript (ES6+)[cite: 211, 213, 230].
* [cite_start]**Herramientas de consumo:** Fetch API (nativo) y Axios (librería externa)[cite: 89, 90].

## 🚀 Instalación y Configuración

### 1. Requisitos previos
[cite_start]Es necesario tener instalado [Node.js](https://nodejs.org/) en el sistema[cite: 96, 184].

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

##🔌 Endpoints de la API

El servidor (server.js) expone las siguientes rutas para la gestión de alumnos:
* **GET /api/students**. Devuelve un arreglo JSON con la lista de todos los estudiantes registrados.
* **POST /api/students**. Registra un nuevo estudiante. Requiere un cuerpo JSON con los campos name, email y age.
