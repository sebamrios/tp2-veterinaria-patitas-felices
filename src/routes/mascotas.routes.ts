import { Router } from 'express';
import { registrarMascota, listarMascotasPorDueño } from '../controllers/mascotas.controllers';

const router = Router();

// Endpoint para crear: POST http://localhost:3000/api/mascotas
router.post('/', registrarMascota);

// Endpoint para listar: GET http://localhost:3000/api/mascotas/usuario/1
router.get('/usuario/:usuarioId', listarMascotasPorDueño);

export default router;