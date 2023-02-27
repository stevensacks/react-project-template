/* eslint-disable max-params */
import {Fragment} from 'react';
import {Meta, Story} from '@storybook/react';
import clsx from 'clsx';
import {Size} from 'types';
import Button, {Kind} from '../index';

const meta: Meta = {
    component: Button,
    parameters: {
        controls: {hideNoControlsWarning: true},
    },
    title: 'Components/Button',
};

export default meta;

const sizes: Size[] = ['xs', 'sm', 'base', 'lg', 'xl'];
const kinds: Kind[] = ['primary', 'secondary', 'tertiary', 'destructive'];
const legends = ['text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl'];

const render = (
    disabled?: boolean,
    icon?: boolean,
    iconText?: boolean,
    isLoading?: boolean
) => (
    <div className="p-4">
        <div className="grid max-w-4xl grid-cols-9 items-center justify-items-start gap-4">
            {sizes.map((size) => (
                <Fragment key={size}>
                    <legend
                        className={clsx(
                            legends.find((value) => value.includes(size))
                        )}
                    >
                        {size}
                    </legend>
                    {kinds.map((kind) => (
                        <Button
                            key={kind}
                            className="col-span-2 capitalize"
                            disabled={disabled}
                            icon={icon ? ['fas', 'star'] : undefined}
                            kind={kind}
                            loading={isLoading ? 'Loading' : undefined}
                            size={size}
                        >
                            {!icon || iconText ? kind : undefined}
                        </Button>
                    ))}
                </Fragment>
            ))}
        </div>
    </div>
);

export const Default: Story = () => render();

export const Loading: Story = () => render(false, false, false, true);
Loading.parameters = {
    chromatic: {disableSnapshot: true},
};

export const Disabled: Story = () => render(true);

export const Icon: Story = () => render(false, true);

export const IconDisabled: Story = () => render(true, true);

export const IconText: Story = () => render(false, true, true);

export const IconTextDisabled: Story = () => render(true, true, true);
