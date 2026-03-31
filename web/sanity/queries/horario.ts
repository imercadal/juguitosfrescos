export type HorarioData = {
    _id: string;
    cuerpo: string;
};

export const HORARIO_QUERY = `*[_type == "horario"][0]`