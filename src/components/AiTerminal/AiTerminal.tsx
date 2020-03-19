import React, { FunctionComponent, Fragment } from 'react';
import Terminal from 'terminal-in-react';

const aiTerminal: FunctionComponent = () => {
    return (
        <Fragment>
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
                        console.log('Good morning');
                    },
                    hu: (): void => {
                        console.log('Who are you?');
                    },
                }}
            />
        </Fragment>
    );
};

export default aiTerminal;
