import React from 'react';

const RadioInput = ({ input, id, idx }) => {
  return <input {...input} className="form-check-input" type="radio" id={id} />;
};

export default RadioInput;
