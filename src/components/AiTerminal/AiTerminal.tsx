import React, { FunctionComponent } from 'react';
import Terminal from 'react-console-emulator';
import { connect } from 'react-redux';

import { SetAiState, SetAiCommand } from '~/store/actions';
import { ApplicationState } from '~/store/types/applicationState';

import './AiTerminal.scss';

const aiTerminal: FunctionComponent<AiTerminalProps> = ({
    aiState,
}: AiTerminalProps) => {
    let errorText = 'AI mc49 needs to be booted before launching commands.';
    if (aiState) {
        errorText = 'Command not found';
    }
    const commands = {
        mc49: {
            fn: (arg1: string, arg2: string | false): void | string => {
                if (arg1 === 'run' && arg2 === 'build') {
                    SetAiState(true);
                    SetAiCommand('Good morning');
                } else if (arg1 === 'stop' && aiState) {
                    SetAiState(false);
                } else {
                    return errorText;
                }
            },
        },
        Who: {
            fn: (arg1: string, arg2: string): void | string => {
                if (arg1 === 'are' && arg2 === 'you?' && aiState) {
                    SetAiCommand('Who are you?');
                } else if (arg1 === 'created' && arg2 === 'you?' && aiState) {
                    SetAiCommand('Who created you?');
                } else {
                    return errorText;
                }
            },
        },
        who: {
            fn: (arg1: string, arg2: string): void | string => {
                if (arg1 === 'are' && arg2 === 'you?' && aiState) {
                    SetAiCommand('Who are you?');
                } else if (arg1 === 'created' && arg2 === 'you?' && aiState) {
                    SetAiCommand('Who created you?');
                } else {
                    return errorText;
                }
            },
        },
        Why: {
            fn: (arg1: string, arg2: string, arg3: string): void | string => {
                if (
                    arg1 === 'do' &&
                    arg2 === 'you' &&
                    arg3 === 'exist?' &&
                    aiState
                ) {
                    SetAiCommand('Why do you exist?');
                } else {
                    return errorText;
                }
            },
        },
        why: {
            fn: (arg1: string, arg2: string, arg3: string): void | string => {
                if (
                    arg1 === 'do' &&
                    arg2 === 'you' &&
                    arg3 === 'exist?' &&
                    aiState
                ) {
                    SetAiCommand('Why do you exist?');
                } else {
                    return errorText;
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
                    (arg4 === 'experiances.' || 'experiances') &&
                    aiState
                ) {
                    SetAiCommand('Tell me about your experiances.');
                } else {
                    return errorText;
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
                    (arg4 === 'experiances.' || 'experiances') &&
                    aiState
                ) {
                    SetAiCommand('Tell me about your experiances.');
                } else {
                    return errorText;
                }
            },
        },
        Show: {
            fn: (arg1: string, arg2: string, arg3: string): void | string => {
                if (
                    arg1 === 'me' &&
                    arg2 === 'your' &&
                    (arg3 === 'works.' || 'works') &&
                    aiState
                ) {
                    SetAiCommand('Show me your works.');
                } else {
                    return errorText;
                }
            },
        },
        show: {
            fn: (arg1: string, arg2: string, arg3: string): void | string => {
                if (
                    arg1 === 'me' &&
                    arg2 === 'your' &&
                    (arg3 === 'works.' || 'works') &&
                    aiState
                ) {
                    SetAiCommand('Show me your works.');
                } else {
                    return errorText;
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
                    (arg6 === 'posses?' || 'posses') &&
                    aiState
                ) {
                    SetAiCommand('What kind of skills do you posses?');
                } else {
                    return errorText;
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
                    (arg6 === 'posses?' || 'posses') &&
                    aiState
                ) {
                    SetAiCommand('What kind of skills do you posses?');
                } else {
                    return errorText;
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
                    (arg4 === 'chess?' || 'chess') &&
                    aiState
                ) {
                    SetAiCommand('How about match of chess?');
                } else {
                    return errorText;
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
                    (arg4 === 'chess?' || 'chess') &&
                    aiState
                ) {
                    SetAiCommand('How about match of chess?');
                } else {
                    return errorText;
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
                    (arg6 === 'creator.' || 'creator') &&
                    aiState
                ) {
                    SetAiCommand('I would like to contact your creator.');
                } else {
                    return errorText;
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
                    (arg6 === 'creator.' || 'creator') &&
                    aiState
                ) {
                    SetAiCommand('I would like to contact your creator.');
                } else {
                    return errorText;
                }
            },
        },
    };
    const className = 'ai-terminal';
    return (
        <div className={`${className}`}>
            <Terminal
                className={`${className}__box`}
                commands={commands}
                errorText={errorText}
            />
        </div>
    );
};

const mapStateToProps = (state: ApplicationState): AiTerminalProps => {
    return {
        aiState: state.aiState,
    };
};

interface AiTerminalProps {
    aiState: boolean;
}

export default connect(mapStateToProps)(aiTerminal);
