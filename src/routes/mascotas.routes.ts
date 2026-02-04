import { Router } from 'express';
import { 
    registrarMascota, 
    listarMascotasPorCliente, 
    actualizarMascota,
    listarTodasLasMascotas,
    eliminarMascota
} from '../controllers/mascotas.controllers';
import { verifyToken } from '../middlewares/auth.middleware';

const router = Router();

router.post('/', registrarMascota);
router.get('/', listarTodasLasMascotas);
router.put('/:id', verifyToken, actualizarMascota); 
router.delete('/:id', verifyToken, eliminarMascota);
router.get('/cliente/:usuarioId', listarMascotasPorCliente);


export default router;