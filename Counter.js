import React from 'react';

const Counter = ({ value, onIncrement, onDecrement }) =>
  <div>
    <button onClick={onIncrement}>
      Increment
    </button>
    {' '}
    <button onClick={onDecrement}>
      Decrement
    </button>
    <hr />
    <div>
      Clicked: {value} items
    </div>
  </div>

export default Counter;
