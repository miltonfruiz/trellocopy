# Clon Sencillo de Trello
=====================================

## Descripción
Este proyecto es un clon sencillo de la aplicación Trello, diseñado para gestionar tableros, listas y tarjetas. La aplicación utiliza un stack de tecnologías modernas y cuenta con seguridad para proteger los datos de los usuarios.

## Stack
* **Backend:** Node.js con Express.js
* **Base de datos:** MongoDB
* **Autenticación:** JSON Web Tokens (JWT)
* **Docker:** para contenerización y despliegue

## Instalación
Para instalar la aplicación, sigue los siguientes pasos:
1. Clona el repositorio: `git clone https://github.com/usuario/repo.git`
2. Instala las dependencias: `npm install`
3. Configura la variable de entorno `MONGO_URI` con la URL de tu base de datos MongoDB
4. Inicia la aplicación: `npm start`

## Docker
Para desplegar la aplicación con Docker, sigue los siguientes pasos:
1. Crea una imagen Docker: `docker build -t trello-clone .`
2. Inicia un contenedor Docker: `docker run -p 5000:5000 trello-clone`

## Endpoints
La aplicación cuenta con los siguientes endpoints:

### Autenticación
* **POST /api/auth/register**: Registra un nuevo usuario
* **POST /api/auth/login**: Inicia sesión un usuario

### Tableros
* **GET /api/boards**: Lista todos los tableros (requiere autenticación)
* **POST /api/boards**: Crea un nuevo tablero (requiere autenticación)
* **GET /api/boards/:boardId**: Obtiene un tablero por ID (requiere autenticación)
* **PUT /api/boards/:boardId**: Actualiza un tablero (requiere autenticación)
* **DELETE /api/boards/:boardId**: Elimina un tablero (requiere autenticación)

### Listas
* **GET /api/boards/:boardId/lists**: Lista todas las listas de un tablero (requiere autenticación)
* **POST /api/boards/:boardId/lists**: Crea una nueva lista en un tablero (requiere autenticación)
* **GET /api/boards/:boardId/lists/:listId**: Obtiene una lista por ID (requiere autenticación)
* **PUT /api/boards/:boardId/lists/:listId**: Actualiza una lista (requiere autenticación)
* **DELETE /api/boards/:boardId/lists/:listId**: Elimina una lista (requiere autenticación)

### Tarjetas
* **GET /api/boards/:boardId/lists/:listId/cards**: Lista todas las tarjetas de una lista (requiere autenticación)
* **POST /api/boards/:boardId/lists/:listId/cards**: Crea una nueva tarjeta en una lista (requiere autenticación)
* **GET /api/boards/:boardId/lists/:listId/cards/:cardId**: Obtiene una tarjeta por ID (requiere autenticación)
* **PUT /api/boards/:boardId/lists/:listId/cards/:cardId**: Actualiza una tarjeta (requiere autenticación)
* **DELETE /api/boards/:boardId/lists/:listId/cards/:cardId**: Elimina una tarjeta (requiere autenticación)

## Seguridad
La aplicación utiliza JSON Web Tokens (JWT) para autenticar a los usuarios y proteger los datos. Los tokens se generan al iniciar sesión y se envían en cada solicitud para verificar la autenticación.

## Modelo de Datos
El modelo de datos principal es la tarjeta, que tiene los siguientes campos:
* **title**: Título de la tarjeta (cadena)
* **description**: Descripción de la tarjeta (cadena)
* **boardId**: ID del tablero al que pertenece la tarjeta (cadena)
* **listId**: ID de la lista al que pertenece la tarjeta (cadena)