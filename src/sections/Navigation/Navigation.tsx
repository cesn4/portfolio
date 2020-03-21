import React, { FunctionComponent } from 'react';

import StatusBar from '~/components/StatusBar';
import InformationBar from '~/components/InformationBar';

import './Navigation.scss';

const Navigation: FunctionComponent = () => {
    const className = 'navigation';
    return (
        <div className={className}>
            <StatusBar />
            <div className={`${className}__information-box`}>
                <InformationBar />
            </div>
        </div>
    );
};

export default Navigation;
