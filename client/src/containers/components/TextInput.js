import React from 'react';

const TextInput = ({
  config: { label, id, placeholder },
  input,
  inputType
}) => (
  <div className="form-group row">
    <label className="col-sm-2 col-form-label" htmlFor={id}>
      {label}
    </label>
    <div className="col-sm-10">
      <input
        {...input}
        className="form-control"
        type={inputType}
        id={id}
        placeholder={placeholder}
      />
    </div>
  </div>
);

export default TextInput;
