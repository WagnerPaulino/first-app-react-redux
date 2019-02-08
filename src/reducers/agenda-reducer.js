import {
    DEFAULT_ACTION
} from '../actions/type';

export default (state = {ordenacao: "a-z"}, action) => {
    return state[DEFAULT_ACTION] || '';
}