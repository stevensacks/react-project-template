import State from '../../src/state';

const WrapState = (story) => <State>{story()}</State>;

export default WrapState;
