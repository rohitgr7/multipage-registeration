import React from 'react';

const TextInput = ({
  config: { label, id, placeholder },
  input,
  inputType
}) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input {...input} type={inputType} id={id} placeholder={placeholder} />
  </div>
);

export default TextInput;
