import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-grid-system';

import AiTerminal from '~/components/AiTerminal';
import AI, { AIProps } from '~/components/AI/AI';
import { ApplicationState } from '~/store/types/ApplicationState';

import './Machine.scss';

const Machine: FunctionComponent<AIProps> = ({ command }: AIProps) => {
    const className = 'machine';
    return (
        <div className={className}>
            <Container>
                <Row>
                    <Col sm={12}>
                        <AI command={command} />
                    </Col>
                    <Col sm={12}>
                        <AiTerminal />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

const mapStateToProps = (state: ApplicationState): AIProps => {
    return {
        command: state.aiCommand,
    };
};

export default connect(mapStateToProps)(Machine);
