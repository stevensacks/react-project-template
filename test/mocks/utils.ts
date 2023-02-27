import {InMemoryCacheConfig} from '@apollo/client';
import isChromatic from 'chromatic';
import {GraphQLError} from 'graphql/error';
import {Maybe} from 'graphql/jsutils/Maybe';
import {tryCatch} from 'utils/functions';

export const DELAY = isChromatic() || process.env.NODE_ENV === 'test' ? 1 : 400;

export const getAuthenticationError = () => [
    new GraphQLError('Not authenticated'),
];

export const getServerError = () => [new GraphQLError('Server Error')];

export const isAuthenticated = (headers: Headers) =>
    headers.get('access-token') === 'test-access-token';

export const cacheConfig: InMemoryCacheConfig = {
    typePolicies: {},
};

export const getLocalStorageItem = <T>(key: string): Maybe<T> => {
    const {result} = tryCatch(() =>
        JSON.parse(localStorage.getItem(key) || '')
    );

    localStorage.removeItem(key);

    return result as Maybe<T>;
};
