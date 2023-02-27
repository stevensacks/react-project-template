/* eslint-disable no-bitwise */
// Linear Congruential Generator
// newSeed : Int -> Int
export const gen = (seed: number): number =>
    (1_103_515_245 * seed + 12_345) & 0x7f_ff_ff_ff;

// calcSeed : Int -> Float
export const calc = (seed: number): number => (seed >>> 16) / 0x7f_ff;

// rng : Int -> Float
export const rng = (seed: number = Date.now(), value = 0): number =>
    Math.floor(value * calc(gen(seed)));
