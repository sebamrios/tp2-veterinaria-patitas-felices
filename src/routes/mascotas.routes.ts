import { Router } from 'express';
import { 
    registrarMascota, 
    listarMascotasPorCliente, 
    actualizarMascota,
    listarTodasLasMascotas

} from '../controllers/mascotas.controllers';

const router = Router();

router.post('/', registrarMascota);
router.get('/', listarTodasLasMascotas);
router.get('/cliente/:usuarioId', listarMascotasPorCliente);
router.put('/:id', actualizarMascota); 


export default router;