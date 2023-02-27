import failOnConsole from 'jest-fail-on-console';

// @ts-ignore
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

failOnConsole({
    shouldFailOnLog: false,
});
