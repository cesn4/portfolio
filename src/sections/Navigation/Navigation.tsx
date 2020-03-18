import React, { FunctionComponent } from 'react';

import Status from '~/components/Status';

const Navigation: FunctionComponent = () => {
    const className = 'navigation';
    return (
        <div className={className}>
            <Status />
        </div>
    );
};

export default Navigation;
