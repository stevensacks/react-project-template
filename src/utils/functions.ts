/* eslint-disable @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any */
type TryCatchResult = {
    error?: Error;
    result?: unknown;
};

// @ts-ignore
export const tryCatch = (fn: Function, ...args: any[]): TryCatchResult => {
    let error;
    let result;

    try {
        result = fn(...args);
    } catch (error_) {
        error = error_ as Error;
    }

    return {error, result};
};

export const noop = () => {};

export const sleep = (ms: number) =>
    new Promise((resolve) => {
        setTimeout(resolve, ms);
    });

export const compose = (...fns: Function[]): Function =>
    fns.reduce(
        (f, g) =>
            (...args: unknown[]) =>
                f(g(...args))
    );
