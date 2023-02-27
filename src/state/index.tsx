import {FC, ReactNode} from 'react';
import {ExampleProvider} from './example';

export type StateProps = {
    children: ReactNode;
};

const State: FC<StateProps> = ({children}) => (
    <ExampleProvider>{children}</ExampleProvider>
);

export default State;
