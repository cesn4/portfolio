import React, { FunctionComponent } from 'react';

import './Status.scss';

const Status: FunctionComponent<StatusProps> = ({ state }: StatusProps) => {
    const className = 'status-bar';
    const renderStatus: Function = (aiState: boolean) => {
        if (aiState) {
            return 'Available for Work';
        } else {
            return 'Offline';
        }
    };
    console.log(renderStatus(state));
    return (
        <div className={className}>
            <span className={`${className}__id`}>ID: mc94 portfolio AI</span>
            <span className={`${className}__status`}>
                Status: {renderStatus(state)}
            </span>
        </div>
    );
};

interface StatusProps {
    state?: boolean;
}

export default Status;
