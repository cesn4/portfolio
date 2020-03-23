import React, { FunctionComponent } from 'react';
import Typewriter from 'typewriter-effect';

import { AiCommandTypes } from '~/store/types/commandTypes';

import './AI.scss';

const AI: FunctionComponent<AIProps> = ({ command }: AIProps) => {
    const className = 'ai';
    console.log(command);
    const aiCall: Function = (command: AiCommandTypes) => {
        switch (command) {
            case 'Good morning':
                return (
                    <Typewriter
                        options={{
                            strings: 'Hello there, how can I help you?',
                            autoStart: true,
                        }}
                    />
                );
            case 'Who are you?':
                return (
                    <Typewriter
                        options={{
                            strings:
                                ' I am an artificial inteligence machine mc49 created based on fron-end developer Mindaugas Cesna.',
                            autoStart: true,
                        }}
                    />
                );
            case 'Why do you exist?':
                return (
                    <Typewriter
                        options={{
                            strings:
                                'Well... my sole purpose of existence is to represent experiance, works, skills and mindset it self of my self and my creator.',
                            autoStart: true,
                        }}
                    />
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
