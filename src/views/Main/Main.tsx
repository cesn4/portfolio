import React, { FunctionComponent } from 'react';

import './Main.scss';
import AI from '~/components/AI/AI';
import AiTerminal from '~/components/AiTerminal';
import Navigation from '~/sections/Navigation';

const Main: FunctionComponent = () => {
    const className = 'main';
    return (
        <div className={`${className}`}>
            <Navigation />
            <div className={`${className}__ai-term-box`}>
                <div className={`${className}__ai`}>
                    <AI command={'Good morning'} />
                </div>
                <AiTerminal />
            </div>
        </div>
    );
};

export default Main;
