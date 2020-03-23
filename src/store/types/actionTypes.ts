import { AiCommandTypes, AiStateType, AiLazyType } from './commandTypes';

export interface SetAiCommand {
    type: 'SetAiCommand';
    payload: AiCommandTypes;
}

export interface SetAiType {
    type: 'SetAiState';
    payload: AiStateType;
}

export interface SetAiLazy {
    type: 'SetAiLazy';
    payload: AiLazyType;
}

export type Actions = SetAiCommand | SetAiType | SetAiLazy;
