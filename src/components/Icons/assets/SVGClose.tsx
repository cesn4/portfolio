import React, { FunctionComponent } from 'react';

const SVGClose: FunctionComponent<SVGIconsProps> = ({
    color,
    size,
}: SVGIconsProps) => {
    return (
        <svg
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            width={size}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill={color}
                d="M4 8 L8 4 L16 12 L24 4 L28 8 L20 16 L28 24 L24 28 L16 20 L8 28 L4 24 L12 16 z"
            />
        </svg>
    );
};

interface SVGIconsProps {
    size: number;
    color: string;
}

export default SVGClose;
