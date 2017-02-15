import React from 'react';

const FormInput = ({ type, name, onChange, label }) => (
  <div className="formEntry">
    <label htmlFor={name}>{label}</label>
    <input type={type} name={name} onChange={onChange} />
  </div>
);

export default FormInput;
