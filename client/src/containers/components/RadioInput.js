import React from 'react';

const RadioInput = ({ input, id, label }) => (
  <div className="form-check">
    <input {...input} className="form-check-input" type="radio" id={id} />
    <label className="form-check-label" htmlFor={id}>
      {label}
    </label>
  </div>
);

export default RadioInput;
