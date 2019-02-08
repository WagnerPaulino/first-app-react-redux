import { GET_TAREFAS } from "./type";

var tarefas = [{id: 1, nome: 'ir ao banheiro', horario: 'Agora'}];

export const getTarefas = () => {
    return {type: GET_TAREFAS, tarefas: tarefas}
    }