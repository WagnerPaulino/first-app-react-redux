import {
    GET_TAREFAS
} from '../actions/type';

export default (state = {agenda: []}, action) => {
    console.log(action);
    switch(action.type) {
        case GET_TAREFAS:
            return {
                ...state,
                tarefas: action.tarefas
            }

            default:
                return {state, action};
    }
}