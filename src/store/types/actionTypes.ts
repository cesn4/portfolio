import { AiCommandTypes, AiStateType } from './commandTypes';

export interface SetAiCommand {
    type: 'SetAiCommand';
    payload: AiCommandTypes;
}

export interface SetAiType {
    type: 'SetAiState';
    payload: AiStateType;
}

export type Actions = SetAiCommand | SetAiType;
