const path = require('path');
const isCI = require('is-ci');

module.exports = {
    rootDir: path.join(__dirname, './'),
    cache: !isCI,
    cacheDirectory: '<rootDir>/.jest-cache',
    collectCoverageFrom: [
        'src/**/*.ts?(x)',
        '!src/**/*.d.ts',
        '!src/**/*.stories.tsx',
        '!src/icons/**/*.ts',
        '!src/state/*.tsx',
        '!src/types/*.ts',
    ],
    coverageDirectory: '<rootDir>/coverage',
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '/dist/',
        '/test/',
        '/coverage/',
        '/codegen/',
    ],
    moduleDirectories: [
        'node_modules',
        path.join(__dirname),
        path.join(__dirname, 'src'),
    ],
    moduleNameMapper: {
        '\\.(css)$': 'identity-obj-proxy',
        '\\.(jpg|png|svg)$': require.resolve('./test/mock-file.ts'),
    },
    modulePathIgnorePatterns: ['npm-cache', '.npm'],
    testEnvironment: 'jsdom',
    testMatch: ['<rootDir>/src/**/*.test.ts?(x)'],
    testPathIgnorePatterns: ['/node_modules/'],
    setupFilesAfterEnv: [
        '@testing-library/jest-dom/extend-expect',
        './test/setup.ts',
    ],
    watchPlugins: [
        'jest-watch-typeahead/filename',
        'jest-watch-typeahead/testname',
    ],
};
