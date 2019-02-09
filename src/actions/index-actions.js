import { GET_TAREFAS, INSERT_TAREFA, SET_TAREFA, UPDATE_TAREFA, DELETE_TAREFA } from "./type";

var tarefas = [{ id: 1, nome: 'ir ao banheiro', horario: 'Agora' }];

const generateId = () => {
    return Math.floor(Math.random() * 10000 + 10000);
}

const salvarTarefa = (tarefa) => {
    const id = generateId();
    return { ...tarefa, id }
}

export const getTarefas = () => {
    return { type: GET_TAREFAS, tarefas: tarefas }
}

export const insert_tarefa = (tarefa) => {
    return { type: INSERT_TAREFA, tarefa: salvarTarefa(tarefa) }
}
export const set_tarefa = (tarefa) => {
    return { type: SET_TAREFA, tarefa }
};

export const update_tarefa = (id, tarefa) => ({ type: UPDATE_TAREFA, tarefa: { id, ...tarefa } });

export const delete_tarefa = (id) => ({ type: DELETE_TAREFA, id });