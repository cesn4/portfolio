import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';

import AiTerminal from '~/components/AiTerminal';
import AI, { AIProps } from '~/components/AI/AI';
import { ApplicationState } from '~/store/types/ApplicationState';

import './Machine.scss';

const Machine: FunctionComponent<AIProps> = ({ command }: AIProps) => {
    const className = 'machine';
    return (
        <div className={className}>
            <div className={`${className}__ai`}>
                <AI command={command} />
            </div>
            <div className={`${className}__terminal`}>
                <AiTerminal />
            </div>
        </div>
    );
};

const mapStateToProps = (state: ApplicationState): AIProps => {
    return {
        command: state.aiCommand,
    };
};

export default connect(mapStateToProps)(Machine);
