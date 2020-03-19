import { store } from '~/store';

import { AiCommandTypes } from './types/commandTypes';

export const SetAiCommand = (payload: AiCommandTypes): void => {
    store.dispatch({ type: 'SetAiCommand', payload: payload });
};
