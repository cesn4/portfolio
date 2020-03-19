import React, { FunctionComponent } from 'react';
import { Col, Row, Container } from 'react-grid-system';

import StatusBar from '~/components/StatusBar';
import InformationBar from '~/components/InformationBar';

const Navigation: FunctionComponent = () => {
    const className = 'navigation';
    return (
        <div className={className}>
            <Container>
                <Row>
                    <Col sm={12}>
                        <StatusBar />
                    </Col>
                    <Col sm={12}>
                        <InformationBar />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Navigation;
