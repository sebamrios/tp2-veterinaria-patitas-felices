import { Router } from 'express';
import { 
    getUsuarios, 
    getUsuarioById, 
    createUsuario, 
    updateUsuario, 
    deleteUsuario, 
    getUsuariosClientes
} from '../controllers/users.controller';

const router = Router();

router.get('/', getUsuarios);
router.get('/clientes', getUsuariosClientes); 
router.get('/:id', getUsuarioById);
router.post('/', createUsuario);
router.put('/:id', updateUsuario);
router.delete('/:id', deleteUsuario);

export default router;