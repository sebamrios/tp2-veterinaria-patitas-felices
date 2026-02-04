import pool from '../database/mysql';
import {
  Mascota,
  CreateMascotaDTO,
  UpdateMascotaDTO
} from '../types/mascotas.types';

/**
 * Crear mascota
 */
export const createMascota = async (
  data: CreateMascotaDTO
): Promise<number> => {

  const [result]: any = await pool.execute(
    `INSERT INTO mascotas
     (nombre, especie, raza, edad, usuario_id)
     VALUES (?, ?, ?, ?, ?)`,
    [
      data.nombre,
      data.especie,
      data.raza,
      data.edad,
      data.usuarioId
    ]
  );

  return result.insertId;
};

/**
 * Obtener mascotas por usuario
 */
export const getMascotasByUsuario = async (
  usuarioId: number
): Promise<Mascota[]> => {

  const [rows] = await pool.execute(
    `SELECT
      id,
      nombre,
      especie,
      raza,
      edad,
      usuario_id AS usuarioId,
      created_at AS createdAt
     FROM mascotas
     WHERE usuario_id = ?`,
    [usuarioId]
  );

  return rows as Mascota[];
};

export const updateMascota = async (id: number, data: UpdateMascotaDTO): Promise<boolean> => {
    const [result]: any = await pool.execute(
        `UPDATE mascotas SET nombre = ?, especie = ?, raza = ?, edad = ? WHERE id = ?`,
        [data.nombre, data.especie, data.raza, data.edad, id]
    );
    return result.affectedRows > 0;
};

export const getAllMascotas = async (): Promise<Mascota[]> => {
  const [rows] = await pool.execute(
    `SELECT id, nombre, especie, raza, edad, usuario_id AS usuarioId, created_at AS createdAt 
     FROM mascotas`
  );
  return rows as Mascota[];
};

export const deleteMascota = async (id: number): Promise<void> => {
  await pool.execute(
    `DELETE FROM mascotas WHERE id = ?`,
    [id]
  );
};