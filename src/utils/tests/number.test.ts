import {clamp, withinRange} from '../number';

describe('clamp', () => {
    const range = clamp({max: 10, min: 5});

    test('inside', () => {
        expect(range(7)).toBe(7);
    });

    test('min', () => {
        expect(range(1)).toBe(5);
    });

    test('max', () => {
        expect(range(15)).toBe(10);
    });
});

describe('withinRange', () => {
    const range = withinRange({max: 10, min: 5});

    test('inside', () => {
        expect(range(7)).toBe(true);
    });

    test('min', () => {
        expect(range(1)).toBe(false);
    });

    test('max', () => {
        expect(range(15)).toBe(false);
    });
});
