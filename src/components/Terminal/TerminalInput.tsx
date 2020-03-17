import React, { FunctionComponent } from 'react';

import './TerminalInput.scss';
import Terminal from 'terminal-in-react';

const TerminalInput: FunctionComponent = () => {
    const className = 'terminal-input';
    const showMsg = 'shows a message';
    const commands = {
        'open-google': (): void => alert('hello'),
        showmsg: showMsg,
    };
    return (
        <div className={className}>
            <Terminal
                color="green"
                backgroundColor="black"
                barColor="black"
                style={{ fontWeight: 'bold', fontSize: '1em' }}
                commands={commands}
                msg="You can write anything here. Example - Hello! My name is Foo and I like Bar."
            />
        </div>
    );
};

export default TerminalInput;
