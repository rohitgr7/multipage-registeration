import React from 'react';

import LoginForm from './../components/loginForm';

export const LoginPage = () => (
  <div>
    <LoginForm submitForm={values => console.log(values)} />
  </div>
);
