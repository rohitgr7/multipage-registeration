import React from 'react';

const TextInput = ({
  config: { label, id, placeholder },
  input,
  inputType,
  meta: { touched, error },
  errorMessage
}) => {
  let inputClass = 'form-control';
  inputClass += touched && error ? ' is-invalid' : '';

  return (
    <div className="form-group row">
      <label className="col-sm-2 col-form-label" htmlFor={id}>
        {label}
      </label>
      <div className="col-sm-10">
        <input
          {...input}
          className={inputClass}
          type={inputType}
          id={id}
          placeholder={placeholder}
        />
        <div className="invalid-feedback">{touched && error}</div>
      </div>
    </div>
  );
};

export default TextInput;
