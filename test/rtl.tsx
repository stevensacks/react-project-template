import {FC, ReactElement, ReactNode} from 'react';
import {render as rtlRender, RenderResult} from '@testing-library/react';
import State from 'state';
import fontAwesome from '../src/icons';
import {server} from './server';

// Edit jest timeout - tests became flaky and getting jest timeout error without this edit
jest.setTimeout(10_000);

beforeAll(() => {
    window.open = jest.fn();
    window.scrollTo = jest.fn();

    // Jest has not yet implemented matchMedia. Therefore, we have to mock it.
    // https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
    Object.defineProperty(window, 'matchMedia', {
        value: jest.fn().mockImplementation((query) => ({
            addEventListener: jest.fn(),
            addListener: jest.fn(),
            dispatchEvent: jest.fn(),
            matches: false,
            media: query,
            onchange: null,
            removeEventListener: jest.fn(),
            removeListener: jest.fn(),
        })),
        writable: true,
    });

    fontAwesome();
});

const render = (ui: ReactElement): RenderResult => {
    const Wrapper: FC<{children: ReactNode}> = ({children}) => (
        <State>{children}</State>
    );

    return rtlRender(ui, {wrapper: Wrapper});
};

// re-export testing library
export * from '@testing-library/react';

// helper methods and render override
export {render, rtlRender, server};
