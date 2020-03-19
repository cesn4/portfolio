import React, { FunctionComponent } from 'react';

import AiTerminal from '~/components/AiTerminal';
import AI from '~/components/AI/AI';

import './Machine.scss';

const Machine: FunctionComponent = () => {
    const className = 'machine';
    return (
        <div className={className}>
            <AI command="Good morning" />
            <AiTerminal />
        </div>
    );
};

export default Machine;
