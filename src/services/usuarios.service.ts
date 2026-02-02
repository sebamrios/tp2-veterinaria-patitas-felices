import bcrypt from 'bcrypt';
import * as usuariosModel from '../models/usuarios.model';
import {
  Usuario,
  CreateUsuarioDTO,
  UpdateUsuarioDTO,
  UserRole
} from '../types/usuarios.types';

/**
 * Obtener todos los usuarios
 */
export const getAllUsers = async (): Promise<Usuario[]> => {
  return await usuariosModel.getAllUsuarios();
};

/**
 * Obtener usuario por ID
 */
export const getUserById = async (id: number): Promise<Usuario> => {
  const user = await usuariosModel.findUsuarioById(id);

  if (!user) {
    throw new Error('Usuario no encontrado');
  }

  return user;
};

/**
 * Crear usuario
 */
export const createUser = async (
  email: string,
  password: string,
  role: UserRole
): Promise<number> => {

  // Verificar email único
  const existingUser = await usuariosModel.findUsuarioByEmail(email);
  if (existingUser) {
    throw new Error('El email ya está registrado');
  }

  // Hash de contraseña
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser: CreateUsuarioDTO = {
    nombre: email.split('@')[0], // nombre por defecto
    email,
    password: hashedPassword,
    role
  };

  const userId = await usuariosModel.createUsuario(newUser);
  return userId;
};

/**
 * Actualizar usuario
 */
export const updateUser = async (
  userId: number,
  updatedFields: UpdateUsuarioDTO
): Promise<void> => {

  const user = await usuariosModel.findUsuarioById(userId);
  if (!user) {
    throw new Error('Usuario no encontrado');
  }

  // Si cambia la contraseña, volver a hashear
  if (updatedFields.password) {
    updatedFields.password = await bcrypt.hash(updatedFields.password, 10);
  }

  await usuariosModel.updateUsuario(userId, updatedFields);
};

/**
 * Eliminar usuario
 */
export const deleteUser = async (userId: number): Promise<void> => {
  const user = await usuariosModel.findUsuarioById(userId);

  if (!user) {
    throw new Error('Usuario no encontrado');
  }

  await usuariosModel.deleteUsuario(userId);
};

/**
 * Reglas de autorización (negocio)
 */
export const canCreateUsers = (role: UserRole): boolean => {
  return role === 'admin';
};

export const canDeleteUsers = (role: UserRole): boolean => {
  return role === 'admin';
};
