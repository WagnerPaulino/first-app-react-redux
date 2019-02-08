import { GET_TAREFAS } from "./type";

var tarefas = {nome: 'ir ao banheiro', horario: 'Agora'};

export const getTarefas = () => ({ type: GET_TAREFAS, ...tarefas })