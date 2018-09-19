//Importamos el archivo que necesitamos
import { tipoEmpleadoModel } from './tipoEmpleadoModel';
import { ciudadModel } from './ciudadModel';

/**
 * Entidad empleado
 */
export class Empleado {
    
    cedula: string;
    nombre: string;
    apellido: string;
    fecha_nacimiento: Date;
    fecha_ingreso: Date;
    genero: string;
    direccion: string;
    salario: number;
    ciudad: ciudadModel;
    telefono: string;
    entevistaAceptada: boolean;
    email: string;
    tipoEmpleado: tipoEmpleadoModel;
     
}
