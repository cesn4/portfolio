import { ApplicationState } from './types/applicationState';
import { Actions } from './types/ActionTypes';

const initialState: ApplicationState = {
    aiCommand: '',
};
const reducer = (state = initialState, action: Actions): ApplicationState => {
    switch (action.type) {
        case 'SetAiCommand': {
            return {
                ...state,
                aiCommand: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};

export default reducer;
