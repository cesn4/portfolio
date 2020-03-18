import React, { FunctionComponent } from 'react';

import StatusBar from '~/components/StatusBar';
import InformationBar from '~/components/InformationBar';

const Navigation: FunctionComponent = () => {
    const className = 'navigation';
    return (
        <div className={className}>
            <StatusBar />
            <InformationBar />
        </div>
    );
};

export default Navigation;
