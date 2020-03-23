import React, { FunctionComponent, useState, Fragment } from 'react';

import MenuLauncher from './MenuLauncher';
import MenuPop, { MenuListContent } from './MenuPop';

const Menu: FunctionComponent<MenuProps> = ({
    label,
    text,
    menuListContent,
    commands,
    text2,
}: MenuProps) => {
    const [menuState, setMenuState] = useState(false);

    const menuStateToggle: VoidFunction = () => {
        setMenuState(!menuState);
    };
    console.log(window.innerWidth);
    return (
        <Fragment>
            <MenuLauncher
                onClick={menuStateToggle}
                active={menuState}
                label={label}
            />
            <MenuPop
                label={label}
                visible={menuState}
                text={text}
                menuListContent={menuListContent}
                commands={commands}
                text2={text2}
            />
        </Fragment>
    );
};

interface MenuProps {
    label: string;
    text?: string | boolean;
    menuListContent?: Array<MenuListContent>;
    commands?: string;
    text2?: string;
}

export default Menu;
