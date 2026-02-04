import express, { Request, Response } from 'express';
import path from 'path';
import 'dotenv/config';

// 1. Importar los routers correctamente
import usersRouter from './routes/users.routes';
import mascotasRouter from './routes/mascotas.routes'; // Importamos el de mascotas
import viewsRouter from './routes/views.routes';

const app = express();
const PORT = 3000;

// 2. Middleware para interpretar JSON (Crucial para que funcionen los POST)
app.use(express.json());

// 3. Endpoints de prueba y raíz
app.get('/api', (req: Request, res: Response) => {
  console.log('¡Alguien accedió al endpoint raíz! 🌐');
  res.json({
    message: '¡Hola, mundo! Este es un servidor Express con TypeScript. Es una API veterinaria 🚀',
  });
});

app.get('/api/saludo', (req: Request, res: Response) => {
  console.log('¡Alguien accedió al api/saludo! 🌐');
  res.json({ mensaje: 'Hola desde la API a saludo 🚀' });
});
console.log('--- Configurando Rutas de API---');
// 4. Registro de Rutas (Aquí corregimos el error anterior)
app.use('/api/users', usersRouter);       // Maneja /api/users
console.log('Ruta /api/users cargada');
app.use('/api/mascotas', mascotasRouter); // Maneja /api/mascotas
app.use('/api/mascotas', mascotasRouter); // <--- ASEGÚRATE QUE AQUÍ DIGA /api/mascotas
console.log('Ruta /api/mascotas cargada');
app.use('/handlebars', viewsRouter);      // Maneja las vistas

// ESTA RUTA DE ABAJO ES PARA PRUEBAS
app.get('/api/test-mascotas', (req, res) => {
    res.json({ msg: "Si ves esto, el prefijo /api funciona" });
});



// 5. Iniciar el servidor
// IMPORTANTE: Solo dejamos un .listen y usamos '0.0.0.0' para que Docker responda
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en el puerto ${PORT} y accesible desde Docker 🚀`);
});