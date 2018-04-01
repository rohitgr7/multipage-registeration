const emailConfig = { label: 'Email', id: 'email', placeholder: 'Email' };

const passwordConfig = {
  label: 'Password',
  id: 'password',
  placeholder: 'Password'
};

export const loginFields = [
  { inputType: 'text', name: 'email', config: emailConfig },
  { inputType: 'password', name: 'password', config: passwordConfig }
];
