import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';

import './StatusBar.scss';
import { ApplicationState } from '~/store/types/applicationState';

const StatusBar: FunctionComponent<StatusBarProps> = ({
    aiState,
}: StatusBarProps) => {
    const className = 'status-bar';
    const availableText = 'Available ';
    console.log(aiState);
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
    return (
        <div className={className}>
            <span className={`${className}__id`}>ID: mc94 portfolio AI</span>
            <span className={`${className}__status`}>
                Status: {renderStatus(aiState)}
            </span>
        </div>
    );
};

const mapStateToProps = (state: ApplicationState): StatusBarProps => {
    return {
        aiState: state.aiState,
    };
};

interface StatusBarProps {
    aiState?: boolean;
}

export default connect(mapStateToProps)(StatusBar);
