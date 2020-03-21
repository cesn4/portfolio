import React, { FunctionComponent } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import Navigation from '~/sections/Navigation';
import Machine from '~/sections/Machine';

import './Main.scss';

const Main: FunctionComponent = () => {
    const className = 'main';
    return (
        <div className={`${className}`}>
            <Container>
                <div className={`${className}__box`}>
                    <Row>
                        <Col>
                            <div className={`${className}__navigation`}>
                                <Navigation />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className={`${className}__machine`}>
                                <Machine />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Main;
