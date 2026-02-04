import { Router } from 'express';
import { 
    getUsuarios, 
    getUsuarioById, 
    createUsuario, 
    updateUsuario, 
    deleteUsuario, 
    getUsuariosClientes 
} from '../controllers/users.controller';
import { login } from '../controllers/auth.controllers'; // Importamos el login

const router = Router();

// --- RUTAS PÚBLICAS ---
router.post('/login', login); // 👈 Esta es la nueva ruta para obtener el token
router.post('/', createUsuario); // Registro de usuario

// --- RUTAS DE CONSULTA ---
router.get('/', getUsuarios);
router.get('/clientes', getUsuariosClientes); 
router.get('/:id', getUsuarioById);

// --- RUTAS DE ACCIÓN ---
router.put('/:id', updateUsuario);
router.delete('/:id', deleteUsuario);

export default router;