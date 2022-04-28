//acá vamos a manejar la base de datos
export interface Task {
    id?: number; //cuando creamos una task podría no venir la id, por eso la creamos
    text: string;
    day: string;
    reminder: boolean;
}