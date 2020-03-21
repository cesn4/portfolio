import React, { FunctionComponent } from 'react';

import Navigation from '~/sections/Navigation';
import Machine from '~/sections/Machine';

import './Main.scss';

const Main: FunctionComponent = () => {
    const className = 'main';
    return (
        <div className={`${className}`}>
            <div className={`${className}__navigation`}>
                <Navigation />
            </div>
            <Machine />
        </div>
    );
};

export default Main;
