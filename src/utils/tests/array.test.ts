import {getRange, numericSort} from '../array';

describe('array', () => {
    test('getRange should work', () => {
        expect(getRange(0, 5)).toEqual([0, 1, 2, 3, 4, 5]);
        expect(getRange(3, 5)).toEqual([3, 4, 5]);
        expect(getRange(-3, 5)).toEqual([-3, -2, -1, 0, 1, 2, 3, 4, 5]);
    });

    test('numericSort should work', () => {
        expect(numericSort([1, 5, 2, 4, 3, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    });
});
