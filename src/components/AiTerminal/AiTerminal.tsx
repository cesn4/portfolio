import React, { FunctionComponent } from 'react';
import Terminal from 'react-console-emulator';

// import { SetAiCommand } from '~/store/actions';

import './AiTerminal.scss';

const aiTerminal: FunctionComponent = () => {
    const className = 'ai-terminal';
    return (
        <div className={`${className}`}>
            <Terminal className={`${className}__box`} />
        </div>
    );
};

export default aiTerminal;
