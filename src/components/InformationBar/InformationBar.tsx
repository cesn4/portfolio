import React, { FunctionComponent } from 'react';

import Menu from '../Menu';
import { MenuListContent } from '~/components/Menu/MenuPop';

import './InformationBar.scss';

const InformationBar: FunctionComponent = () => {
    const className = 'information-bar';

    const menuList: Array<MenuListContent> = [
        {
            title: 'Existential',
            command: 'Who are you?',
            command2: 'Why do you exist?',
            command3: 'Who created you?',
        },
        {
            title: 'Portfolio',
            command: 'Tell me about your experiances.',
            command2: 'Show me your works.',
            command3: 'What kind of skills do you posses?',
        },
        { title: 'Games', command: 'How about match of chess?' },
        { title: 'Contact', command: 'I would like to contact your creator.' },
    ];
    console.log(menuList);
    return (
        <div className={className}>
            <Menu
                label="DOCUMENTATION"
                text="AI created to represent experiences, skill, works and mind it's self of Mindaugas Cesna. To launch the AI enter into the terminal: mc49 run build. Possible commands of IA you can find in commands section. To enter into lazy mode press button at the corner of terminal."
            />
            <Menu label="COMMANDS" menuListContent={menuList} />
        </div>
    );
};

export default InformationBar;
