**CRUD - Productos y Autenticación**

***Descripción del Proyecto***

Este es un proyecto completo de una aplicación CRUD que permite gestionar productos y autenticación de usuarios. 
La aplicación está dividida en un backend hecho con Node.js y Express, junto con una base de datos utilizando 
Sequelize. El frontend está construido con React.
- Backend: API REST utilizando Node.js y Express para manejar el CRUD de productos y la autenticación de
  usuarios usando JWT (JSON Web Token).
- Frontend: Interfaz de usuario construida con React, donde los usuarios pueden gestionar productos y
  autenticarse en la aplicación.
Este proyecto fue desarrollado como parte de un aprendizaje práctico, implementando autenticación con JWT y
protegidos para manejar operaciones CRUD.

***Motivación***

El objetivo de este proyecto fue aprender a construir una aplicación full-stack que incluye autenticación de 
usuarios y protección de rutas, además de aprender cómo conectar el frontend con el backend utilizando React y 
Express.

***Tecnologías Utilizadas***

Backend:
- Node.js con Express.js
- Sequelize (ORM para manejar la base de datos)
- JWT (JSON Web Token) para autenticación
- bcrypt para el hashing de contraseñas
- CORS para permitir solicitudes entre el frontend y el backend
Frontend:
- React para la interfaz de usuario
- Axios para las solicitudes HTTP entre el frontend y el backend
- React Router para la navegación entre páginas
- localStorage para almacenar el token JWT en el frontend

***Funcionalidades***

- Registro de usuarios: Los usuarios pueden crear una cuenta con email y contraseña.
- Inicio de sesión: Los usuarios registrados pueden iniciar sesión y obtener un token JWT.
- Protección de rutas: Solo los usuarios autenticados pueden acceder a las rutas para crear, editar o
  eliminar productos.
- Gestión de productos: Los usuarios autenticados pueden crear, editar y eliminar productos desde una
  interfaz amigable.

***Instalación***

Requisitos previos:
- Node.js
- MySQL o cualquier base de datos compatible con Sequelize
Instrucciones para ejecutar el proyecto:
1. Clonar el repositorio
2. Instalar dependencias del backend
3. Configurar la base de datos: Asegúrate de tener MySQL corriendo y configura tu archivo de base de
   datos (database/db.js) con tus credenciales
4. Instalar dependencias del frontend
5. Levantar el servidor del backend -> nodemon app
6. Levantar el servidor del frontend -> npm start
7. Acceder a la aplicación en el navegador visitando http://localhost:3000

***Cómo Usar el Proyecto***

1. Registro: Los usuarios pueden registrarse proporcionando un email y una contraseña.
2. Inicio de Sesión: Después de iniciar sesión, el usuario obtiene un token JWT que se almacena en
   localStorage.
3. Gestión de Productos: El usuario puede acceder a la página de productos para ver, crear, editar y
   eliminar productos.
4. Cerrar Sesión: El botón de “Cerrar Sesión” se encuentra en la página de productos.

***Créditos***

Este proyecto fue desarrollado por Tomás Núñez como parte de un aprendizaje sobre desarrollo full-stack.
