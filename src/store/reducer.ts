import { ApplicationState } from './types/applicationState';
import { Actions } from './types/ActionTypes';

const initialState: ApplicationState = {
    aiCommand: '',
    aiState: false,
    aiLazy: false,
};
const reducer = (state = initialState, action: Actions): ApplicationState => {
    switch (action.type) {
        case 'SetAiCommand': {
            return {
                ...state,
                aiCommand: action.payload,
            };
        }
        case 'SetAiState': {
            return {
                ...state,
                aiState: action.payload,
            };
        }
        case 'SetAiLazy': {
            return {
                ...state,
                aiLazy: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};

export default reducer;
