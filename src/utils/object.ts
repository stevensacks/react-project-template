import {camelCase, isObject, snakeCase} from 'lodash';
import SparkMD5 from 'spark-md5';

export const every = (
    obj: Record<string, unknown>,
    predicate: (value: unknown) => boolean
): boolean => Object.values(obj).every(predicate);

export const some = (
    obj: Record<string, unknown>,
    predicate: (value: unknown) => boolean
): boolean => Object.values(obj).some(predicate);

export const md5 = (obj: Record<string, unknown>): string =>
    SparkMD5.hash(JSON.stringify(obj));

export const isNil = (value: unknown): boolean =>
    value === null || value === undefined;

export const mapKeys = (
    obj: Record<string, unknown>,
    fn: (key: string) => string
): Record<string, unknown> =>
    Object.entries(obj).reduce((acc: Record<string, unknown>, [key, value]) => {
        acc[fn(key)] = value;

        return acc;
    }, {});

export const mapValues = (
    obj: Record<string, unknown>,
    fn: (p: unknown) => unknown
): Record<string, unknown> =>
    Object.entries(obj).reduce((acc: Record<string, unknown>, [key, value]) => {
        acc[key] = fn(value);

        return acc;
    }, {});

export const convertCase = (
    fn: (s: string) => string,
    obj: unknown
): unknown => {
    if (obj === undefined) return;

    if (Array.isArray(obj)) {
        return obj.map((value: unknown) => convertCase(fn, value));
    }

    if (isObject(obj)) {
        return Object.entries(obj).reduce(
            (acc: Record<string, unknown>, [key, value]) => {
                if (Array.isArray(value)) {
                    acc[fn(key)] = value.map((item) =>
                        isObject(item) ? convertCase(fn, item) : item
                    );
                } else if (isObject(value)) {
                    acc[fn(key)] = convertCase(fn, value);
                } else {
                    acc[fn(key)] = value;
                }

                return acc;
            },
            {}
        );
    }

    return obj;
};

export const toSnakeCase = (obj: unknown) => convertCase(snakeCase, obj);

export const toCamelCase = (obj: unknown) => convertCase(camelCase, obj);

export const withValues = (
    obj: Record<string, unknown>,
    keepFalsy?: boolean,
    keepEmptyArray?: boolean
): Record<string, unknown> =>
    Object.entries(obj).reduce((acc: Record<string, unknown>, [key, value]) => {
        if (
            ((keepFalsy && !isNil(value)) || value) &&
            (!Array.isArray(value) || keepEmptyArray || value.length > 0)
        ) {
            acc[key] = value;
        }

        return acc;
    }, {});
