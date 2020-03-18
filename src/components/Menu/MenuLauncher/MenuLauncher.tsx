import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import './MenuLauncher.scss';

const MenuLauncher: FunctionComponent<MenuLauncherProps> = ({
    onClick,
    label,
    active = false,
}: MenuLauncherProps) => {
    const className = 'menu-launcher';
    return (
        <button
            onClick={onClick}
            className={classNames(`${className}`, {
                '-active': active,
            })}
        >
            {label}
        </button>
    );
};

interface MenuLauncherProps {
    onClick: VoidFunction;
    label: string;
    active?: boolean;
}

export default MenuLauncher;
