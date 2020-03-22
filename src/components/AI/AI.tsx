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
                return (
                    <span>
                        I am an artificial inteligence machine mc49 created
                        based on front-end developer Mindaugas Cesna.
                    </span>
                );
            case 'Why do you exist?':
                return (
                    <span>
                        Well my sole purpose of existence is to represent
                        experiance, works, skills and mindset it self of my self
                        and my creator.
                    </span>
                );
            default:
                return '';
        }
    };
    return <div className={className}>{aiCall(command)}</div>;
};

export interface AIProps {
    command: AiCommandTypes;
}

export default AI;
