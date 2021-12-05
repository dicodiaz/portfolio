import { Button, Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/ducks/counter';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counterReducer.count);
  return (
    <Stack gap={2}>
      <div className="lead text-center">Count: {counter}</div>
      <Stack direction="horizontal" gap={2} className="justify-content-center">
        <Button variant="primary" onClick={() => dispatch(increment())}>
          Increment
        </Button>
        <Button variant="secondary" onClick={() => dispatch(decrement())}>
          Decrement
        </Button>
      </Stack>
    </Stack>
  );
};

export default Counter;
