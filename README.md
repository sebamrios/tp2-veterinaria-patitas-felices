# Backend Node TS - Veterinaria Patitas Felices

Un pequeño backend desarrollado con Node.js y TypeScript para la gestión de una veterinaria. Incluye autenticación con JWT, manejo de base de datos MySQL y vistas simples con Handlebars.

## 🚀 Tecnologías

*   **Node.js** con **TypeScript**
*   **Express** (Framework Web)
*   **MySQL** (Base de datos) con `mysql2`
*   **JWT** (Autenticación)
*   **Bcryptjs** (Hashing de contraseñas)
*   **Handlebars** (Motor de plantillas para vistas)
*   **Docker** & **Docker Compose** (Contenedorización)

## 📋 Prerrequisitos

*   **Docker** y **Docker Compose** instalados.
*   (Opcional) **Node.js** y **NPM** si deseas ejecutarlo localmente sin Docker.

## 🛠️ Instalación y Configuración

1.  **Clonar el repositorio:**

    ```bash
    git clone <url-del-repo>
    cd backend-node-ts
    ```

2.  **Variables de Entorno:**
    El archivo `.env` ya viene configurado por defecto para trabajar con Docker. (Verificar archivo `.env`).

3.  **Iniciar con Docker (Recomendado):**
    Levanta la aplicación, la base de datos MySQL y PhpMyAdmin.

    ```bash
    docker-compose up --build
    ```

    *   **API:** `http://localhost:3000`
    *   **PhpMyAdmin:** `http://localhost:8081` (Servidor: `mysql`, Usuario: `root`, Password: `root123`)

4.  **Si vas a desarrollar localmente (Sin Docker para la App):**
    
    *   Asegúrate de tener la base de datos MySQL corriendo (puedes usar `docker-compose up mysql` solamente).
    *   Instala dependencias:
        ```bash
        npm install
        ```
    *   Iniciar en modo desarrollo:
        ```bash
        npm run dev
        ```

## 🔌 Endpoints de la API

### Autenticación y Usuarios (`/api/users`)

| Método   | Endpoint             | Descripción                        | Requiere Auth |
| :---     | :---                 | :---                               | :---          |
| `POST`   | `/api/users/login`   | Iniciar sesión (Retorna Token JWT) | No            |
| `POST`   | `/api/users`         | Registrar nuevo usuario            | No            |
| `GET`    | `/api/users`         | Listar todos los usuarios          | No            |
| `GET`    | `/api/users/clientes`| Listar solo usuarios clientes      | No            |
| `GET`    | `/api/users/:id`     | Obtener usuario por ID             | No            |
| `PUT`    | `/api/users/:id`     | Actualizar usuario                 | No            |
| `DELETE` | `/api/users/:id`     | Eliminar usuario                   | No            |

### Mascotas (`/api/mascotas`)

| Método   | Endpoint                           | Descripción                  | Requiere Auth |
| :---     | :---                               | :---                         | :---          |
| `POST`   | `/api/mascotas`                    | Registrar mascota            | No            |
| `GET`    | `/api/mascotas`                    | Listar todas las mascotas    | No            |
| `GET`    | `/api/mascotas/cliente/:usuarioId` | Listar mascotas de un cliente| No            |
| `PUT`    | `/api/mascotas/:id`                | Actualizar mascota           | **Sí** (Token)|
| `DELETE` | `/api/mascotas/:id`                | Eliminar mascota             | **Sí** (Token)|

### Vistas (`/handlebars`)

| Método | Endpoint            | Descripción          |
| :---   | :---                | :---                 |
| `GET`  | `/handlebars`       | Vista Home de prueba |
| `GET`  | `/handlebars/about` | Vista About (ToDo)   |
