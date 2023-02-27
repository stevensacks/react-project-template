import {calc, gen, rng} from '../rng';

describe('random number generator', () => {
    test('gen should be consistent', () => {
        let seed = 123;
        expect(gen(seed)).toBe(440_917_656);
        seed = gen(seed);
        expect(gen(seed)).toBe(1_476_151_040);
        seed = gen(seed);
        expect(gen(seed)).toBe(1_041_001_216);
        seed = gen(seed);
        expect(gen(seed)).toBe(1_977_859_840);
        seed = gen(seed);
        expect(gen(seed)).toBe(1_344_963_328);
        seed = gen(seed);
        expect(gen(seed)).toBe(1_745_090_304);
        seed = gen(seed);
        expect(gen(seed)).toBe(150_100_736);
        seed = gen(seed);
        expect(gen(seed)).toBe(149_614_400);
    });

    test('calc should be consistent', () => {
        let seed = gen(123);
        expect(calc(seed)).toBe(0.205_298_013_245_033_1);
        seed = gen(seed);
        expect(calc(seed)).toBe(0.687_398_907_437_360_8);
        seed = gen(seed);
        expect(calc(seed)).toBe(0.484_756_004_516_739_4);
        seed = gen(seed);
        expect(calc(seed)).toBe(0.921_018_097_476_119_3);
        seed = gen(seed);
        expect(calc(seed)).toBe(0.626_300_851_466_414_3);
        seed = gen(seed);
        expect(calc(seed)).toBe(0.812_616_351_817_377_2);
        seed = gen(seed);
        expect(calc(seed)).toBe(0.069_887_386_700_033_57);
        seed = gen(seed);
        expect(calc(seed)).toBe(0.069_643_238_624_225_6);
    });

    test('rng should be consistent', () => {
        expect(rng()).toBe(0);
        let seed = 123;
        expect(rng(seed, 7)).toBe(1);
        seed = gen(seed);
        expect(rng(seed, 7)).toBe(4);
        seed = gen(seed);
        expect(rng(seed, 7)).toBe(3);
        seed = gen(seed);
        expect(rng(seed, 7)).toBe(6);
        seed = gen(seed);
        expect(rng(seed, 7)).toBe(4);
        seed = gen(seed);
        expect(rng(seed, 7)).toBe(5);
        seed = gen(seed);
        expect(rng(seed, 7)).toBe(0);
        seed = gen(seed);
        expect(rng(seed, 7)).toBe(0);
    });
});
