import React, { FunctionComponent, useState } from 'react';
import Terminal from 'terminal-in-react';

import './app.scss';

const App: FunctionComponent = () => {
    const [answerState, setanswerState] = useState('');
    const aiCall: Function = (command: commandType) => {
        switch (command) {
            case 'Good morning':
                return 'Hell there, how can I help you?';
            case 'Who are you?':
                return 'Why do you care?';
            default:
                return null;
        }
    };
    console.log(answerState);
    return (
        <div>
            <div className="answer">{aiCall(answerState)}</div>
            <div className="terminal">
                <div className="terminal__title">Terminal</div>
                <Terminal
                    description={{ color: false, show: false, clear: false }}
                    prompt="gray"
                    color="white"
                    backgroundColor="black"
                    style={{ fontSize: '30px' }}
                    commandPassThrough={(cmd): string =>
                        `${cmd}: command not found`
                    }
                    msg="You can write anything here. Example - Hello! My name is Foo and I like Bar."
                    allowTabs={false}
                    showActions={false}
                    commands={{
                        gm: (): void => {
                            setanswerState('Good morning');
                        },
                        hu: (): void => {
                            setanswerState('Who are you?');
                        },
                    }}
                />
            </div>
        </div>
    );
};

type commandType = 'Good morning' | 'Who are you?';

export default App;
