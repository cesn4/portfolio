import React, { FunctionComponent } from 'react';

import './InformationBar.scss';
import Menu from '../Menu';

const InformationBar: FunctionComponent = () => {
    const className = 'information-bar';
    return (
        <div className={className}>
            <Menu
                label="DOCUMENTATION"
                text="AI created to represent experiences, skill, works and mind it's self of Mindaugas Cesna. To launch the AI enter into the terminal: mc49 run build. Possible commands of IA you can find in commands section. To enter into lazy mode press button at the corner of terminal."
            />
        </div>
    );
};

export default InformationBar;
