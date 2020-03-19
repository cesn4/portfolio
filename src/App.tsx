import React, { FunctionComponent, Fragment } from 'react';

import Main from './views/Main';
import '~/config/layout';

const App: FunctionComponent = () => {
    return (
        <Fragment>
            <Main />
        </Fragment>
    );
};

export default App;
