import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import './MenuPop.scss';

const MenuPop: FunctionComponent<MenuPopProps> = ({
    label,
    text,
    visible = false,
}: MenuPopProps) => {
    const className = 'menu-pop';
    return (
        <div
            className={classNames(`${className}`, {
                '-visible': visible,
            })}
        >
            <div className={`${className}__list-box`}>
                <span className={`${className}__label`}>{label}</span>
                {text && <p className={`${className}__text`}>{text}</p>}
            </div>
        </div>
    );
};

interface MenuPopProps {
    visible?: boolean;
    label: string;
    text?: string | boolean;
}

export default MenuPop;
