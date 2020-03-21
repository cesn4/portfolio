import { AiCommandTypes, AiStateType } from './commandTypes';

export interface ApplicationState {
    aiCommand: AiCommandTypes;
    aiState: AiStateType;
}
