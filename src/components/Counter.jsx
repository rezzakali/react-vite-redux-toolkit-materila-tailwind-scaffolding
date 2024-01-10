import { Button } from '@material-tailwind/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../features/counter/counterSlice';

const Counter = () => {
  const { count } = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div className="flex items-center m-3">
      <Button onClick={handleIncrement}>Increment</Button>
      <h6>{count}</h6>
      <Button onClick={handleDecrement}>Decrement</Button>
    </div>
  );
};

export default Counter;
