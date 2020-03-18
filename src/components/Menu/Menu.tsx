import React, { FunctionComponent, useState, Fragment } from 'react';
import MenuLauncher from './MenuLauncher';
import MenuPop from './MenuPop';

const Menu: FunctionComponent<MenuProps> = ({ label, text }: MenuProps) => {
    const [menuState, setMenuState] = useState(false);

    const menuStateToggle: VoidFunction = () => {
        setMenuState(!menuState);
    };
    return (
        <Fragment>
            <MenuLauncher
                onClick={menuStateToggle}
                active={menuState}
                label={label}
            />
            <MenuPop label={label} visible={menuState} text={text} />
        </Fragment>
    );
};

interface MenuProps {
    label: string;
    text?: string | boolean;
}

export default Menu;
