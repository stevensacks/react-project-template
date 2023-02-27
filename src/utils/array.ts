export const getRange = (start: number, end: number): number[] =>
    Array(end - start + 1)
        .fill(start)
        .map((value, index) => value + index);

export const numericSort = (array: number[]): number[] =>
    [...array].sort((a, b) => a - b);
