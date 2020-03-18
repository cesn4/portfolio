import React, { FunctionComponent } from 'react';

import StatusBar from '~/components/StatusBar';

const Navigation: FunctionComponent = () => {
    const className = 'navigation';
    return (
        <div className={className}>
            <StatusBar />
        </div>
    );
};

export default Navigation;
