import React, { FunctionComponent, ReactChild, Fragment } from 'react';
import classNames from 'classnames';
import Draggable from 'react-draggable';
import { connect } from 'react-redux';

import { SetAiCommand } from '~/store/actions';
import { AiCommandTypes } from '~/store/types/commandTypes';
import { ApplicationState } from '~/store/types/applicationState';

import './MenuPop.scss';

const MenuPop: FunctionComponent<MenuPopProps> = ({
    label,
    text,
    visible = false,
    menuListContent,
    aiLazyState,
}: MenuPopProps) => {
    const className = 'menu-pop';
    console.log(aiLazyState);

    let defaultPositionText = { x: 0, y: 0 };
    if (window.innerWidth >= 1200) {
        defaultPositionText = { x: 550, y: -50 };
    }
    let defaultPositionList = { x: 0, y: 0 };
    if (window.innerWidth >= 1200) {
        defaultPositionList = { x: 900, y: 50 };
    }

    if (menuListContent === undefined) {
        return (
            <Draggable defaultPosition={defaultPositionText}>
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
            </Draggable>
        );
    }
    const renderMenuList: Array<ReactChild> = menuListContent.map(
        ({ title, command, command2, command3 }: MenuListContent, index) => {
            const lazyModeCheck = (com: AiCommandTypes) => {
                if (aiLazyState === false) {
                    return SetAiCommand('Lazy error');
                } else {
                    return SetAiCommand(com);
                }
            };
            return (
                <Fragment key={index.toString()}>
                    <span className={`${className}__list-title`}>{title}</span>
                    <button
                        className={`${className}__command`}
                        onClick={(): void => lazyModeCheck(command)}
                    >
                        {command}
                    </button>
                    {!!command2 && (
                        <button
                            className={`${className}__command`}
                            onClick={(): void => lazyModeCheck(command2)}
                        >
                            {command2}
                        </button>
                    )}
                    {!!command3 && (
                        <button
                            className={`${className}__command`}
                            onClick={(): void => lazyModeCheck(command3)}
                        >
                            {command3}
                        </button>
                    )}
                </Fragment>
            );
        }
    );
    return (
        <Draggable defaultPosition={defaultPositionList}>
            <div
                className={classNames(`${className}`, {
                    '-visible': visible,
                })}
            >
                <div className={`${className}__box`}>
                    <span className={`${className}__label`}>{label}</span>
                    {text && <p className={`${className}__text`}>{text}</p>}
                    <div className={`${className}__list-box`}>
                        {renderMenuList}
                    </div>
                </div>
            </div>
        </Draggable>
    );
};

interface MenuPopProps {
    visible?: boolean;
    label: string;
    text?: string | boolean;
    menuListContent?: Array<MenuListContent> | undefined;
    aiLazyState: boolean;
}

export interface MenuListContent {
    title: string;
    command: AiCommandTypes;
    command2?: AiCommandTypes;
    command3?: AiCommandTypes;
}

const mapStateToProps = (state: ApplicationState): AiLazyState => {
    return {
        aiLazyState: state.aiLazy,
    };
};

interface AiLazyState {
    aiLazyState: true | false;
}

export default connect(mapStateToProps)(MenuPop);
