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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const terminal: any = React.createRef();
    console.log(terminal);

    const commands = {
        test: {
            fn: (): void | string => {
                const terminalRef = terminal.current;
                setTimeout(() => terminalRef.showWelcomeMessage(), 1000);
                setTimeout(() => terminalRef.scrollToBottom(), 2000);
            },
        },
        mc49: {
            fn: (arg1: string, arg2: string | false): void | string => {
                if (arg1 === 'run' && arg2 === 'build') {
                    setTimeout(() => SetAiState(true), 7000);
                    setTimeout(() => SetAiCommand('Good morning'), 9000);
                    const terminalRef = terminal.current;
                    setTimeout(
                        () =>
                            terminalRef.pushToStdout(
                                <span style={{ color: '#A5A5A5' }}>
                                    Launching basic life imatation systems via
                                    TS React scripts.
                                </span>
                            ),
                        500
                    );
                    setTimeout(
                        () =>
                            terminalRef.pushToStdout(
                                <span style={{ color: '#A5A5A5' }}>
                                    preparing WEB for AI deployment...
                                </span>
                            ),
                        1000
                    );
                    setTimeout(
                        () =>
                            terminalRef.pushToStdout(
                                <span style={{ color: '#A5A5A5' }}>DONE</span>
                            ),
                        2000
                    );
                    setTimeout(() => terminalRef.scrollToBottom(), 2000);

                    setTimeout(
                        () =>
                            terminalRef.pushToStdout(
                                <span style={{ color: '#A5A5A5' }}>
                                    initializing memory storage download...
                                </span>
                            ),
                        2300
                    );
                    setTimeout(() => terminalRef.scrollToBottom(), 2300);
                    setTimeout(
                        () =>
                            terminalRef.pushToStdout(
                                <span style={{ color: '#A5A5A5' }}>
                                    waiting for permission...
                                </span>
                            ),
                        3000
                    );
                    setTimeout(() => terminalRef.scrollToBottom(), 3000);
                    setTimeout(
                        () =>
                            terminalRef.pushToStdout(
                                <span style={{ color: '#A5A5A5' }}>
                                    GRANTED
                                </span>
                            ),
                        4000
                    );
                    setTimeout(() => terminalRef.scrollToBottom(), 4000);
                    setTimeout(
                        () =>
                            terminalRef.pushToStdout(
                                <span style={{ color: '#A5A5A5' }}>
                                    sorting thoughts...
                                </span>
                            ),
                        4300
                    );
                    setTimeout(() => terminalRef.scrollToBottom(), 4300);
                    setTimeout(
                        () =>
                            terminalRef.pushToStdout(
                                <span style={{ color: '#A5A5A5' }}>
                                    ERORR!!. =??/wa56a65d 48$%# EERrr345.s
                                </span>
                            ),
                        5300
                    );
                    setTimeout(() => terminalRef.scrollToBottom(), 5300);
                    setTimeout(
                        () =>
                            terminalRef.pushToStdout(
                                <span style={{ color: '#A5A5A5' }}>
                                    initializing backup systems to support AI
                                    stabilzation...
                                </span>
                            ),
                        5500
                    );
                    setTimeout(() => terminalRef.scrollToBottom(), 5500);
                    setTimeout(
                        () =>
                            terminalRef.pushToStdout(
                                <span style={{ color: '#A5A5A5' }}>BOOTED</span>
                            ),
                        6500
                    );
                    setTimeout(() => terminalRef.scrollToBottom(), 6500);
                    setTimeout(
                        () =>
                            terminalRef.pushToStdout(
                                <div>
                                    <span style={{ color: '#A5A5A5' }}>
                                        AI launch complete.
                                    </span>
                                    <span> Commands authorized.</span>
                                </div>
                            ),
                        6800
                    );
                    setTimeout(() => terminalRef.scrollToBottom(), 6800);
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
                ref={terminal}
                welcomeMessage={
                    'Welcome to the mc49 portfolio AI, for more information and how to start an app read DOCUMENTATION.'
                }
                className={`${className}__box`}
                contentClassName={`${className}__box-content`}
                inputAreaClassName={`${className}__input`}
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
