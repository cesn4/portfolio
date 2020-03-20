import React, { FunctionComponent } from 'react';
import Terminal from 'react-console-emulator';

// import { SetAiCommand } from '~/store/actions';

import './AiTerminal.scss';

const aiTerminal: FunctionComponent = () => {
    const className = 'ai-terminal';
    return (
        <div className={`${className}`}>
            <Terminal
                style={{ minHeight: '170px', maxHeight: '170px', width: '50%' }}
            />
        </div>
    );
};

export default aiTerminal;
