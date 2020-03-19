import React, { FunctionComponent, Fragment } from 'react';

import Navigation from '~/sections/Navigation';
import Machine from '~/sections/Machine';

import './Main.scss';

const Main: FunctionComponent = () => {
    return (
        <Fragment>
            <Navigation />
            <Machine />
        </Fragment>
    );
};

export default Main;
