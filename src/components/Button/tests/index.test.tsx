import userEvent from '@testing-library/user-event';
import {render, screen} from 'test/rtl';
import Button from '../index';

describe('Button', () => {
    test('Active', async () => {
        const onClick = jest.fn();
        render(<Button onClick={onClick}>Test</Button>);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(screen.getByText('Test')).toBeInTheDocument();
        await userEvent.click(button);
        expect(onClick).toHaveBeenCalled();
    });

    test('Disabled', async () => {
        const onClick = jest.fn();
        render(
            <Button disabled={true} onClick={onClick}>
                Test
            </Button>
        );
        const button = screen.getByRole('button');
        await userEvent.click(button);
        expect(onClick).not.toHaveBeenCalled();
    });

    test('Loading', () => {
        const onClick = jest.fn();
        render(
            <Button loading="Loading" onClick={onClick}>
                Test
            </Button>
        );
        const loader = screen.getByRole('progressbar');
        expect(loader).toBeInTheDocument();
    });
});
