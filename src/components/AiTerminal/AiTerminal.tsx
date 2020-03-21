import React, { FunctionComponent } from 'react';
import Terminal from 'react-console-emulator';

import { SetAiState, SetAiCommand } from '~/store/actions';

import './AiTerminal.scss';

const aiTerminal: FunctionComponent = () => {
    const commands = {
        mc49: {
            fn: (arg1: string, arg2: string | false): void | string => {
                if (arg1 === 'run' && arg2 === 'build') {
                    SetAiState(true);
                    SetAiCommand('Good morning');
                } else if (arg1 === 'stop') {
                    SetAiState(false);
                } else {
                    return 'Command not found';
                }
            },
        },
        Who: {
            fn: (arg1: string, arg2: string): void | string => {
                if (arg1 === 'are' && arg2 === 'you?') {
                    SetAiCommand('Who are you?');
                } else if (arg1 === 'created' && arg2 === 'you?') {
                    SetAiCommand('Who created you?');
                }
            },
        },
        who: {
            fn: (arg1: string, arg2: string): void | string => {
                if (arg1 === 'are' && arg2 === 'you?') {
                    SetAiCommand('Who are you?');
                } else if (arg1 === 'created' && arg2 === 'you?') {
                    SetAiCommand('Who created you?');
                }
            },
        },
        Why: {
            fn: (arg1: string, arg2: string, arg3: string): void | string => {
                if (arg1 === 'do' && arg2 === 'you' && arg3 === 'exist?') {
                    SetAiCommand('Why do you exist?');
                } else {
                    return 'Command not found';
                }
            },
        },
        why: {
            fn: (arg1: string, arg2: string, arg3: string): void | string => {
                if (arg1 === 'do' && arg2 === 'you' && arg3 === 'exist?') {
                    SetAiCommand('Why do you exist?');
                } else {
                    return 'Command not found';
                }
            },
        },
        Tell: {
            fn: (
                arg1: string,
                arg2: string,
                arg3: string,
                arg4: string
            ): void | string => {
                if (
                    arg1 === 'me' &&
                    arg2 === 'about' &&
                    arg3 === 'your' &&
                    (arg4 === 'experiances.' || 'experiances')
                ) {
                    SetAiCommand('Tell me about your experiances.');
                } else {
                    return 'Command not found';
                }
            },
        },
        tell: {
            fn: (
                arg1: string,
                arg2: string,
                arg3: string,
                arg4: string
            ): void | string => {
                if (
                    arg1 === 'me' &&
                    arg2 === 'about' &&
                    arg3 === 'your' &&
                    (arg4 === 'experiances.' || 'experiances')
                ) {
                    SetAiCommand('Tell me about your experiances.');
                } else {
                    return 'Command not found';
                }
            },
        },
        Show: {
            fn: (arg1: string, arg2: string, arg3: string): void | string => {
                if (
                    arg1 === 'me' &&
                    arg2 === 'your' &&
                    (arg3 === 'works.' || 'works')
                ) {
                    SetAiCommand('Show me your works.');
                } else {
                    return 'Command not found';
                }
            },
        },
        show: {
            fn: (arg1: string, arg2: string, arg3: string): void | string => {
                if (
                    arg1 === 'me' &&
                    arg2 === 'your' &&
                    (arg3 === 'works.' || 'works')
                ) {
                    SetAiCommand('Show me your works.');
                } else {
                    return 'Command not found';
                }
            },
        },
        What: {
            fn: (
                arg1: string,
                arg2: string,
                arg3: string,
                arg4: string,
                arg5: string,
                arg6: string
            ): void | string => {
                if (
                    arg1 === 'kind' &&
                    arg2 === 'of' &&
                    arg3 === 'skills' &&
                    arg4 === 'do' &&
                    arg5 === 'you' &&
                    (arg6 === 'posses?' || 'posses')
                ) {
                    SetAiCommand('What kind of skills do you posses?');
                } else {
                    return 'Command not found';
                }
            },
        },
        what: {
            fn: (
                arg1: string,
                arg2: string,
                arg3: string,
                arg4: string,
                arg5: string,
                arg6: string
            ): void | string => {
                if (
                    arg1 === 'kind' &&
                    arg2 === 'of' &&
                    arg3 === 'skills' &&
                    arg4 === 'do' &&
                    arg5 === 'you' &&
                    (arg6 === 'posses?' || 'posses')
                ) {
                    SetAiCommand('What kind of skills do you posses?');
                } else {
                    return 'Command not found';
                }
            },
        },
        How: {
            fn: (
                arg1: string,
                arg2: string,
                arg3: string,
                arg4: string
            ): void | string => {
                if (
                    arg1 === 'about' &&
                    arg2 === 'match' &&
                    arg3 === 'of' &&
                    (arg4 === 'chess?' || 'chess')
                ) {
                    SetAiCommand('How about match of chess?');
                } else {
                    return 'Command not found';
                }
            },
        },
        how: {
            fn: (
                arg1: string,
                arg2: string,
                arg3: string,
                arg4: string
            ): void | string => {
                if (
                    arg1 === 'about' &&
                    arg2 === 'match' &&
                    arg3 === 'of' &&
                    (arg4 === 'chess?' || 'chess')
                ) {
                    SetAiCommand('How about match of chess?');
                } else {
                    return 'Command not found';
                }
            },
        },
        I: {
            fn: (
                arg1: string,
                arg2: string,
                arg3: string,
                arg4: string,
                arg5: string,
                arg6: string
            ): void | string => {
                if (
                    arg1 === 'would' &&
                    arg2 === 'like' &&
                    arg3 === 'to' &&
                    arg4 === 'contact' &&
                    arg5 === 'your' &&
                    (arg6 === 'creator.' || 'creator')
                ) {
                    SetAiCommand('I would like to contact your creator.');
                } else {
                    return 'Command not found';
                }
            },
        },
        i: {
            fn: (
                arg1: string,
                arg2: string,
                arg3: string,
                arg4: string,
                arg5: string,
                arg6: string
            ): void | string => {
                if (
                    arg1 === 'would' &&
                    arg2 === 'like' &&
                    arg3 === 'to' &&
                    arg4 === 'contact' &&
                    arg5 === 'your' &&
                    (arg6 === 'creator.' || 'creator')
                ) {
                    SetAiCommand('I would like to contact your creator.');
                } else {
                    return 'Command not found';
                }
            },
        },
    };
    const className = 'ai-terminal';
    return (
        <div className={`${className}`}>
            <Terminal className={`${className}__box`} commands={commands} />
        </div>
    );
};

export default aiTerminal;
