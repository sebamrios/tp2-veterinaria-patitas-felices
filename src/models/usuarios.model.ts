import pool from '../database/mysql';
import { RowDataPacket, ResultSetHeader } from 'mysql2';
import {
  Usuario,
  CreateUsuarioDTO,
  UpdateUsuarioDTO
} from '../types/usuarios.types';

export const createUsuario = async (
  user: CreateUsuarioDTO
): Promise<number> => {

  const [result] = await pool.execute<ResultSetHeader>(
    `INSERT INTO usuarios (nombre, email, password, role)
     VALUES (?, ?, ?, ?)`,
    [user.nombre, user.email, user.password, user.role]
  );

  return result.insertId;
};

export const findUsuarioById = async (
  id: number
): Promise<Usuario | null> => {

  const [rows] = await pool.execute<RowDataPacket[]>(
    `SELECT id, nombre, email, role, created_at
     FROM usuarios WHERE id = ?`,
    [id]
  );

  return rows.length ? (rows[0] as Usuario) : null;
};

export const findUsuarioByEmail = async (
  email: string
): Promise<Usuario | null> => {

  const [rows] = await pool.execute<RowDataPacket[]>(
    `SELECT id, nombre, email, role, created_at
     FROM usuarios WHERE email = ?`,
    [email]
  );

  return rows.length ? (rows[0] as Usuario) : null;
};
