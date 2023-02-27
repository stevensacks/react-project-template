import {sleep, tryCatch} from '../functions';

describe('functions', () => {
    test('tryCatch success', () => {
        expect(tryCatch((value: number) => 10 / value, 5)).toEqual({
            result: 2,
        });
    });

    test('tryCatch error', () => {
        expect(
            tryCatch(() => {
                throw new Error('failed');
            })
        ).toEqual({
            error: new Error('failed'),
        });
    });

    test('sleep', async () => {
        await sleep(1000);
    });
});
