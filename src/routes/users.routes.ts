import { Router } from 'express';
import { 
    getUsuarios, 
    getUsuarioById, 
    createUsuario, 
    updateUsuario, 
    deleteUsuario, 
    getUsuariosClientes 
} from '../controllers/users.controller';
import { login } from '../controllers/auth.controllers'; 

const router = Router();

router.post('/login', login); 
router.post('/', createUsuario); 

router.get('/', getUsuarios);
router.get('/clientes', getUsuariosClientes); 
router.get('/:id', getUsuarioById);

router.put('/:id', updateUsuario);
router.delete('/:id', deleteUsuario);

export default router;