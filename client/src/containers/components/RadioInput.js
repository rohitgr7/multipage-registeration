import React from 'react';

const RadioInput = ({ input, id, idx }) => (
  <input {...input} type="radio" id={id} value={id} />
);

export default RadioInput;
