import React, { FunctionComponent } from 'react';

import './AI.scss';

const AI: FunctionComponent<AIProps> = ({ command }: AIProps) => {
    const className = 'ai';
    const aiCall: Function = (command: commandType) => {
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

type commandType = 'Good morning' | 'Who are you?';

interface AIProps {
    command: commandType;
}

export default AI;
