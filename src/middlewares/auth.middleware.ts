import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  // 1. Obtener el token del header "Authorization"
  const authHeader = req.headers['authorization'];
  
  // El formato suele ser "Bearer TOKEN", así que separamos el string
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(403).json({ message: "Token no proporcionado" });
  }

  try {
    const secret = process.env.JWT_SECRET || 'clave_secreta_utn_2026';
    
    // 2. Verificar el token
    const decoded = jwt.verify(token, secret);
    
    // 3. Guardar los datos del usuario en la request para usarlo después
    (req as any).user = decoded;

    // 4. Continuar a la siguiente función
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token inválido o expirado" });
  }
};