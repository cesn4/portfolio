import React, { FunctionComponent } from 'react';

import './StatusBar.scss';

const StatusBar: FunctionComponent<StatusBarProps> = ({
    state,
}: StatusBarProps) => {
    const className = 'status-bar';
    const availableText = 'Available ';
    const renderStatus: Function = (aiState: boolean) => {
        if (aiState) {
            return (
                <span className={`${className}__online-state`}>
                    <span className={`${className}__online-state-available`}>
                        {availableText}
                    </span>
                    for Work
                </span>
            );
        } else {
            return (
                <span className={`${className}__offline-state`}>Offline</span>
            );
        }
    };
    console.log(renderStatus(state));
    return (
        <div className={className}>
            <span className={`${className}__id`}>ID: mc94 portfolio AI</span>
            <span className={`${className}__status`}>
                Status: {renderStatus(true)}
            </span>
        </div>
    );
};

interface StatusBarProps {
    state?: boolean;
}

export default StatusBar;
