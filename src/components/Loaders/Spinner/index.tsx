import {CSSProperties, FC} from 'react';
import {IconProp, SizeProp} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import {
    destructive,
    primary,
    secondary,
    spinner,
    tertiary,
} from './styles.module.css';

type SpinnerColor = 'destructive' | 'primary' | 'secondary' | 'tertiary';

const COLORS: Record<SpinnerColor, string> = {
    destructive,
    primary,
    secondary,
    tertiary,
};

/* eslint-disable sort-keys */
const SIZES: Record<SizeProp, string> = {
    '10x': 'w-40 h-40',
    '1x': 'w-4 h-4',
    '2x': 'w-8 h-8',
    '2xl': 'w-8 h-8',
    '2xs': 'w-3 h-3',
    '3x': 'w-12 h-12',
    '4x': 'w-16 h-16',
    '5x': 'w-20 h-20',
    '6x': 'w-24 h-24',
    '7x': 'w-28 h-28',
    '8x': 'w-32 h-32',
    '9x': 'w-36 h-36',
    lg: 'w-5 h-5',
    sm: 'w-4 h-4',
    xl: 'w-6 h-6',
    xs: 'w-3 h-3',
};

export type SpinnerProps = {
    className?: string;
    color?: SpinnerColor;
    icon?: IconProp;
    size?: SizeProp;
    style?: CSSProperties;
    title: string;
};

const Spinner: FC<SpinnerProps> = ({
    className,
    color,
    icon,
    size = '2x',
    style,
    title,
}) => (
    <div
        aria-label={title}
        className={clsx('flex items-center justify-center', className)}
        role="progressbar"
        style={style}
        title={title}
    >
        {icon ? (
            <FontAwesomeIcon
                className={clsx(
                    color === 'primary' && 'text-white dark:text-gray-900'
                )}
                icon={icon}
                size={size}
                spin={true}
            />
        ) : (
            <div
                className={clsx(spinner, SIZES[size], color && COLORS[color])}
            />
        )}
    </div>
);

export default Spinner;
