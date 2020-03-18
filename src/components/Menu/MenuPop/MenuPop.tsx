import React, { FunctionComponent, ReactChild, Fragment } from 'react';
import classNames from 'classnames';

import './MenuPop.scss';

const MenuPop: FunctionComponent<MenuPopProps> = ({
    label,
    text,
    visible = false,
    menuListContent,
}: MenuPopProps) => {
    const className = 'menu-pop';
    if (menuListContent === undefined) {
        return (
            <div
                className={classNames(`${className}`, {
                    '-visible': visible,
                })}
            >
                <div className={`${className}__box`}>
                    <span className={`${className}__label`}>{label}</span>
                    {text && <p className={`${className}__text`}>{text}</p>}
                </div>
            </div>
        );
    }
    const renderMenuList: Array<ReactChild> = menuListContent.map(
        ({ title, command, command2, command3 }: MenuListContent, index) => {
            return (
                <Fragment key={index.toString()}>
                    <span className={`${className}__list-title`}>{title}</span>
                    <button className={`${className}__command`}>
                        {command}
                    </button>
                    {!!command2 && (
                        <button className={`${className}__command`}>
                            {command2}
                        </button>
                    )}
                    {!!command3 && (
                        <button className={`${className}__command`}>
                            {command3}
                        </button>
                    )}
                </Fragment>
            );
        }
    );
    return (
        <div
            className={classNames(`${className}`, {
                '-visible': visible,
            })}
        >
            <div className={`${className}__box`}>
                <span className={`${className}__label`}>{label}</span>
                {text && <p className={`${className}__text`}>{text}</p>}
                <div className={`${className}__list-box`}>{renderMenuList}</div>
            </div>
        </div>
    );
};

interface MenuPopProps {
    visible?: boolean;
    label: string;
    text?: string | boolean;
    menuListContent?: Array<MenuListContent> | undefined;
}

export interface MenuListContent {
    title: string;
    command: string;
    command2?: string;
    command3?: string;
}

export default MenuPop;
