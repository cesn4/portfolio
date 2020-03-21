import { store } from '~/store';

import { AiCommandTypes, AiStateType } from './types/commandTypes';

export const SetAiCommand = (payload: AiCommandTypes): void => {
    store.dispatch({ type: 'SetAiCommand', payload: payload });
};

export const SetAiState = (payload: AiStateType): void => {
    store.dispatch({ type: 'SetAiState', payload: payload });
};
