import { AiCommandTypes } from './commandTypes';

export interface SetAiCommand {
    type: 'SetAiCommand';
    payload: AiCommandTypes;
}

export type Actions = SetAiCommand;
