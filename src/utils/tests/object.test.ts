import {
    convertCase,
    every,
    isNil,
    mapKeys,
    mapValues,
    md5,
    some,
    toCamelCase,
    toSnakeCase,
    withValues,
} from '../object';

const predicate = (value: any) => !!value;

describe('object', () => {
    test('every', () => {
        expect(every({}, predicate)).toBe(true);
        expect(every({hello: 'world'}, predicate)).toBe(true);
        expect(every({foo: 0, hello: 'world'}, predicate)).toBe(false);
    });

    test('some', () => {
        expect(some({}, predicate)).toBe(false);
        expect(some({foo: 0, hello: 'world'}, predicate)).toBe(true);
        expect(some({hello: 0}, predicate)).toBe(false);
    });

    test('md5', () => {
        expect(md5({a: 'b'})).toBe('92eff9dda44cb8003ee13990782580ff');
    });

    test('isNil', () => {
        expect(isNil(undefined)).toBe(true);
        expect(isNil(null)).toBe(true);
        expect(isNil(1)).toBe(false);
        expect(isNil('foo')).toBe(false);
        expect(isNil({})).toBe(false);
    });

    test('mapKeys', () => {
        expect(mapKeys({bar: 'baz', foo: 'bar'}, (key) => `${key}1`)).toEqual({
            bar1: 'baz',
            foo1: 'bar',
        });
    });

    test('mapValues', () => {
        expect(
            mapValues({bar: 'baz', foo: 'bar'}, (value) => `${value}1`)
        ).toEqual({
            bar: 'baz1',
            foo: 'bar1',
        });
    });

    test('convertCase', () => {
        expect(convertCase((f) => f, {})).toEqual({});
        const obj = {
            a: [
                {
                    a: 1,
                    b: [1],
                    c: undefined,
                    d: null,
                    e: true,
                    f: [],
                },
            ],
            b: 'John Doe',
            c: [[1, 2, 3, [4, 5, 6], undefined]],
            d: {
                a: {a: 1},
                b: {a: 2},
                c: undefined,
            },
        };
        expect(convertCase((f) => `${f}${f}`, obj)).toEqual({
            aa: [
                {
                    aa: 1,
                    bb: [1],
                    cc: undefined,
                    dd: null,
                    ee: true,
                    ff: [],
                },
            ],
            bb: 'John Doe',
            cc: [[1, 2, 3, [4, 5, 6], undefined]],
            dd: {
                aa: {aa: 1},
                bb: {aa: 2},
                cc: undefined,
            },
        });
    });

    test('toSnakeCase', () => {
        expect(
            toSnakeCase({
                nestedObject: {
                    biz: 'baz',
                    fizzBuzz: 5,
                },
                someValue: 'foo',
            })
        ).toEqual({
            nested_object: {
                biz: 'baz',
                fizz_buzz: 5,
            },
            some_value: 'foo',
        });
    });

    test('toCamelCase', () => {
        expect(
            toCamelCase({
                'nested-object': {
                    biz: 'baz',
                    'fizz-buzz': 5,
                },
                'some-value': 'foo',
            })
        ).toEqual({
            nestedObject: {
                biz: 'baz',
                fizzBuzz: 5,
            },
            someValue: 'foo',
        });
    });

    test('withValues', () => {
        const obj = {a: 'b', c: '', d: false, e: null};
        expect(withValues(obj)).toEqual({a: 'b'});
        expect(withValues(obj, true)).toEqual({a: 'b', c: '', d: false});
    });
});
