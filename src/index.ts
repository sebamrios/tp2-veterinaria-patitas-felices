import express, { Request, Response } from 'express';
import 'dotenv/config';

// 1. Importar los routers
import usersRouter from './routes/users.routes';
import mascotasRouter from './routes/mascotas.routes';
import viewsRouter from './routes/views.routes';

const app = express();
const PORT = 3000;

// 2. MIDDLEWARES GLOBALES (Siempre primero)
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); // Recomendado para formularios

// 3. LOG DE CONTROL (Opcional pero ayuda en el TP)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// 4. REGISTRO DE RUTAS DE LA API
// Es mejor poner las rutas de los routers arriba de las rutas "sueltas"
app.use('/api/users', usersRouter);
app.use('/api/mascotas', mascotasRouter);
app.use('/handlebars', viewsRouter);

// 5. ENDPOINTS DE PRUEBA (Mantenlos abajo de los routers)
app.get('/api', (req: Request, res: Response) => {
  res.json({ message: 'API Veterinaria Activa 🚀' });
});

app.get('/api/test-mascotas', (req, res) => {
  res.json({ msg: "Si ves esto, el prefijo /api funciona" });
});

// 6. INICIAR EL SERVIDOR
app.listen(PORT, '0.0.0.0', () => {
  console.log(`--- Configuración Exitosa ---`);
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`Rutas de usuarios: /api/users`);
  console.log(`Ruta de login: /api/users/login`);
});