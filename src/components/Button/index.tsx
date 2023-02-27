import {ButtonHTMLAttributes, forwardRef} from 'react';
import {IconProp, SizeProp} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import Spinner from 'components/Loaders/Spinner';
import {Size} from 'types';

export type Kind =
    | 'custom'
    | 'destructive'
    | 'primary'
    | 'secondary'
    | 'tertiary';

export type ButtonProps<T = HTMLButtonElement> = {
    icon?: IconProp;
    kind?: Kind;
    loading?: string;
    size?: Size;
} & ButtonHTMLAttributes<T>;

export const SIZES: Record<Size, string> = {
    base: 'text-base py-2 px-3',
    lg: 'text-lg py-2 px-4',
    sm: 'text-sm py-1.5 px-2',
    xl: 'text-xl py-2.5 px-4',
    xs: 'text-xs py-1 px-1.5',
};

export const ICON_SIZES: Record<Size, string> = {
    base: 'text-base py-2 px-2.5',
    lg: 'text-lg py-2 px-2.5',
    sm: 'text-sm py-1.5 px-2',
    xl: 'text-xl py-2.5 px-2.5',
    xs: 'text-xs py-1 px-1.5',
};

export const ICON_TEXT_SIZES: Record<Size, string> = {
    base: 'text-base py-2 pl-2 pr-2.5',
    lg: 'text-lg py-2 pl-2 pr-2.5',
    sm: 'text-sm py-1.5 px-2',
    xl: 'text-xl py-2.5 pl-2 pr-2.5',
    xs: 'text-xs py-1 px-1.5',
};

export const ICON_MARGIN: Record<Size, string> = {
    base: 'mr-2',
    lg: 'mr-2',
    sm: 'mr-2',
    xl: 'mr-2',
    xs: 'mr-1.5',
};

const LOADER_SIZE: Record<Size, SizeProp> = {
    base: '1x',
    lg: '1x',
    sm: 'sm',
    xl: 'lg',
    xs: 'xs',
};

export const KINDS: Record<Kind, string> = {
    custom: '',
    destructive: 'border border-red-500 bg-red-500 font-semibold text-white',
    primary:
        'border border-blue-500 bg-blue-700 font-semibold text-white dark:text-gray-900',
    secondary: 'border border-blue-700 text-blue-700 dark:text-white',
    tertiary:
        'border border-gray-300 text-gray-700 dark:border-gray-700 dark:text-gray-300',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            children,
            className,
            disabled,
            icon,
            kind = 'primary',
            loading,
            onClick,
            size = 'base',
            type = 'button',
            ...rest
        },
        ref
    ) => {
        const iconComponent = icon ? (
            <FontAwesomeIcon
                className={clsx(children && `flex-none ${ICON_MARGIN[size]}`)}
                fixedWidth={true}
                icon={icon}
                size="1x"
            />
        ) : null;

        return (
            <button
                ref={ref}
                className={clsx(
                    'select-none whitespace-nowrap rounded-md',
                    KINDS[kind],
                    icon
                        ? children
                            ? `flex items-center ${ICON_TEXT_SIZES[size]}`
                            : ICON_SIZES[size]
                        : SIZES[size],
                    loading
                        ? 'disabled:cursor-wait'
                        : 'disabled:cursor-not-allowed disabled:opacity-50',
                    className
                )}
                disabled={!!loading || disabled}
                onClick={onClick}
                type={type}
                {...rest}
            >
                {loading ? (
                    <div className="relative">
                        <div className={clsx(loading && 'invisible')}>
                            {iconComponent}
                            {children}
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Spinner
                                color={kind === 'custom' ? undefined : kind}
                                size={LOADER_SIZE[size]}
                                title={loading}
                            />
                        </div>
                    </div>
                ) : (
                    <>
                        {iconComponent}
                        {children}
                    </>
                )}
            </button>
        );
    }
);

Button.displayName = 'Button';

export default Button;
