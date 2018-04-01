import React from 'react';

const TextArea = ({ config: { label, id }, input }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <textarea id={id} />
  </div>
);

export default TextArea;
