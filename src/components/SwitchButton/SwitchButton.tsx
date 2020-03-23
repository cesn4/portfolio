import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { ApplicationState } from '~/store/types/applicationState';
import { SetAiLazy, SetAiState } from '~/store/actions';

import './SwitchButton.scss';

const SwitchButton: FunctionComponent<SwitchButtonProps> = ({
    aiLazy,
}: SwitchButtonProps) => {
    const className = 'switch-button';
    if (aiLazy) {
        SetAiState(true);
    }
    return (
        <button
            className={classNames(`${className}`, { '-active': aiLazy })}
            onClick={(): void => SetAiLazy(!aiLazy)}
        ></button>
    );
};

const mapStateToProps = (state: ApplicationState): SwitchButtonProps => {
    return {
        aiLazy: state.aiLazy,
    };
};

interface SwitchButtonProps {
    aiLazy: boolean;
}
export default connect(mapStateToProps)(SwitchButton);
