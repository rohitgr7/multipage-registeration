import React from 'react';

import RegisterationForm from './../components/registerationForm';

export const RegisterationPage = () => (
  <div>
    <RegisterationForm submitForm={values => console.log(values)} />
  </div>
);
