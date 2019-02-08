import { combineReducers} from 'redux';
import agendaReducer from './agenda-reducer';

const rootReducer = combineReducers({
    agenda: agendaReducer
});

export default rootReducer;