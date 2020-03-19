import React, { FunctionComponent, Fragment } from 'react';
import Terminal from 'terminal-in-react';

import { SetAiCommand } from '~/store/actions';

import './AiTerminal.scss';

const aiTerminal: FunctionComponent = () => {
    const className = 'ai-terminal';
    return (
        <Fragment>
            <div className={`${className}`}>
                <Terminal
                    description={{ color: false, show: false, clear: false }}
                    prompt="gray"
                    color="white"
                    backgroundColor="black"
                    style={{ fontSize: '30px', height: '300px', width: '100%' }}
                    commandPassThrough={(cmd): string =>
                        `${cmd}: command not found`
                    }
                    msg="You can write anything here. Example - Hello! My name is Foo and I like Bar."
                    allowTabs={false}
                    showActions={false}
                    commands={{
                        gm: (): void => {
                            SetAiCommand('Good morning');
                        },
                        hu: (): void => {
                            SetAiCommand('Who are you?');
                        },
                    }}
                />
            </div>
        </Fragment>
    );
};

export default aiTerminal;
