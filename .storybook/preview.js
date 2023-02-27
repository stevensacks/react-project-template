import {initialize, mswDecorator} from 'msw-storybook-addon';
import fontAwesome from '../src/icons';
import stateDecorator from './decorators/state';
import viewport from './viewport';
import '../src/styles/tailwind.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'focus-visible/dist/focus-visible.min.js';

fontAwesome();

export const parameters = {
    actions: {argTypesRegex: '^on[A-Z].*'},
    backgrounds: {disable: true, grid: {disable: true}},
    chromatic: {delay: 50, viewports: [1280]},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    layout: 'fullscreen',
    viewport,
};

const safeDecorators = [stateDecorator];

// Do not initialize MSW when using @storybook/testing-react in Jest
if (process.env.NODE_ENV !== 'test') {
    initialize();
    safeDecorators.push(mswDecorator);
}

export const decorators = safeDecorators;
