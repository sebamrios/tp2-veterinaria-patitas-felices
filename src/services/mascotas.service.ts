import * as MascotaModel from '../models/mascotas.model';
import { CreateMascotaDTO , UpdateMascotaDTO } from '../types/mascotas.types';

export const registrarNuevaMascota = async (datos: CreateMascotaDTO) => {
    // Aquí podrías validar cosas antes de llamar al modelo
    const insertId = await MascotaModel.createMascota(datos);
    return insertId;
};

export const obtenerMascotasDeUsuario = async (usuarioId: number) => {
    return await MascotaModel.getMascotasByUsuario(usuarioId);
};

export const editarMascota = async (id: number, datos: UpdateMascotaDTO) => {
    return await MascotaModel.updateMascota(id, datos);
};

export const obtenerTodasLasMascotas = async () => {
  return await MascotaModel.getAllMascotas();
};

export const eliminarMascota = async (id: number) => {
    // Aquí podrías agregar lógica extra, como verificar si el usuario tiene permiso
    const resultado = await MascotaModel.deleteMascota(id);
    return resultado;
};