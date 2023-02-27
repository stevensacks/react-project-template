export const toPrecision = (base: number, value: number, parse?: boolean) => {
    const precision =
        base +
        (value < 1
            ? 1
            : value < 10
            ? 2
            : value < 100
            ? 3
            : value < 1000
            ? 4
            : 5);
    const result = value.toPrecision(precision);

    return parse ? Number.parseFloat(result) : result;
};

export const stripLetters = (value: string) => value.replace(/\D+/g, '');

export const clamp =
    ({max, min}: {max: number; min: number}) =>
    (value: number) =>
        Math.min(Math.max(min, value), max);

export const withinRange =
    ({max, min}: {max: number; min: number}) =>
    (value: number | string): boolean =>
        value === '' ||
        value === '-' ||
        (Number(value) >= min && Number(value) <= max);
