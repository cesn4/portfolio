import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';

import { ApplicationState } from '~/store/types/applicationState';
import SwitchButton from '~/components/SwitchButton';

import './StatusBar.scss';

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
            <div className={`${className}__id-box`}>
                <span className={`${className}__id`}>
                    ID: mc94 portfolio AI
                </span>
                <SwitchButton />
            </div>
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
