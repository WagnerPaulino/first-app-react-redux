import {
    GET_TAREFAS,
    INSERT_TAREFA,
    SET_TAREFA,
    UPDATE_TAREFA,
    DELETE_TAREFA
} from '../actions/type';

const default_form = {
    nome: '',
    horario: ''
}

export default (state = { tarefas: [] }, action) => {
    switch (action.type) {
        case GET_TAREFAS:
            return {
                ...state,
                tarefas: action.tarefas
            }
        case INSERT_TAREFA:
            return {
                ...state,
                tarefa: default_form,
                tarefas: state.tarefas.concat(action.tarefa)
            }
        case SET_TAREFA:
            return {
                ...state,
                tarefa: action.tarefa
            }
        case UPDATE_TAREFA:
            return {
                ...state,
                tarefa: default_form,
                tarefas: state.tarefas.map((tarefa) => (tarefa.id === action.id) ? action.tarefa : tarefa)
            }
        case DELETE_TAREFA:
            let tarefas = state.tarefas;
            tarefas = tarefas.filter((tarefa) => tarefa.id !== action.id);
            return {
                ...state,
                tarefa: default_form,
                tarefas: tarefas
            }
        default:
            return state || '';
    }
}