import React from 'react';

const TextArea = ({
  config: { label, id },
  input,
  meta: { touched, error }
}) => {
  let inputClass = 'form-control';
  inputClass += touched && error ? ' is-invalid' : '';

  return (
    <div className="form-group row">
      <label className="col-sm-2 col-form-label" htmlFor={id}>
        {label}
      </label>
      <div className="col-sm-10">
        <textarea {...input} className={inputClass} rows="7" id={id} />
        <div className="invalid-feedback">{touched && error}</div>
      </div>
    </div>
  );
};

export default TextArea;
