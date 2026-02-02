export interface Mascota {
  id: number;
  nombre: string;
  especie: 'perro' | 'gato' | 'otro';
  raza: string;
  edad: number;
  clienteId: number; // ID del dueño (Cliente)
}

