import React from 'react';

const RadioInput = ({ input, id, idx }) => {
  return <input {...input} type="radio" id={id} />;
};

export default RadioInput;
