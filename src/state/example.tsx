import {createContext, FC, ReactNode, useContext} from 'react';

type Example = string;

const ExampleContext = createContext<Example>('');

export const useExample = (): Example => {
    const context = useContext(ExampleContext);

    if (context === undefined) {
        throw new Error('useExample must be used within an ExampleProvider');
    }

    return context;
};

export type ExampleProviderProps = {
    children: ReactNode;
    initialValue?: Example;
};

export const ExampleProvider: FC<ExampleProviderProps> = ({
    children,
    initialValue = '',
}) => (
    <ExampleContext.Provider value={initialValue}>
        {children}
    </ExampleContext.Provider>
);

ExampleProvider.displayName = 'ExampleProvider';
