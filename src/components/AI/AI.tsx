import React, { FunctionComponent } from 'react';

import { AiCommandTypes } from '~/store/types/commandTypes';

import './AI.scss';

const AI: FunctionComponent<AIProps> = ({ command }: AIProps) => {
    const className = 'ai';
    const aiCall: Function = (command: AiCommandTypes) => {
        switch (command) {
            case 'Good morning':
                return 'Hello there, how can I help you?';
            case 'Who are you?':
                return 'Why do you care?';
            default:
                return '_';
        }
    };
    return <div className={className}>{aiCall(command)}</div>;
};

export interface AIProps {
    command: AiCommandTypes;
}

export default AI;
