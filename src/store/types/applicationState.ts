import { AiCommandTypes, AiStateType, AiLazyType } from './commandTypes';

export interface ApplicationState {
    aiCommand: AiCommandTypes;
    aiState: AiStateType;
    aiLazy: AiLazyType;
}
