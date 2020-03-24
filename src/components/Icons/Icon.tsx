import React, { FunctionComponent, ElementType } from 'react';
import classNames from 'classnames';

import './Icon.scss';
import SVGClose from './assets/SVGClose';

const Icon: FunctionComponent<IconProps> = ({
    className,
    color = '#fff',
    size = 16,
    name,
}: IconProps) => {
    const iconProps = { color, size };
    const renderIcon: ElementType = (name: IconType) => {
        switch (name) {
            case 'close':
                return <SVGClose {...iconProps} />;
            default:
                return null;
        }
    };
    return (
        <div className={classNames('icon', className)}>{renderIcon(name)}</div>
    );
};

interface IconProps {
    className?: string;
    color?: string;
    size?: number;
    name: IconType;
}

export type IconType = 'close';

export default Icon;
