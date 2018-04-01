import React from 'react';

const TextArea = ({ config: { label, id }, input }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <textarea {...input} id={id} />
  </div>
);

export default TextArea;
