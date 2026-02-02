import { Request, Response } from 'express';
import * as MascotaModel from '../models/mascotas.model';

/**
 * POST /mascotas
 */

export const registrarMascota = async (req: Request, res: Response) => {
  try {
    const id = await MascotaModel.createMascota(req.body);
    res.status(201).json({ message: 'Mascota registrada', id });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar mascota', error });
  }
};

export const listarMascotasPorDueño = async (req: Request, res: Response) => {
  try {
    const { usuarioId } = req.params;
    const mascotas = await MascotaModel.getMascotasByUsuario(Number(usuarioId));
    res.json(mascotas);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener mascotas', error });
  }
};