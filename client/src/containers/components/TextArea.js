import React from 'react';

const TextArea = ({ config: { label, id }, input }) => (
  <div className="form-group row">
    <label className="col-sm-2 col-form-label" htmlFor={id}>
      {label}
    </label>
    <div className="col-sm-10">
      <textarea {...input} className="form-control" rows="7" id={id} />
    </div>
  </div>
);

export default TextArea;
