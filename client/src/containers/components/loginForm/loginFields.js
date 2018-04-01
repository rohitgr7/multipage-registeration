const emailConfig = { label: 'Email', id: 'email', placeholder: 'Email' };

const passwordConfig = {
  label: 'Password',
  id: 'password',
  placeholder: 'Password'
};

const radioInputs = [
  { label: 'Male', id: 'male' },
  { label: 'Female', id: 'female' }
];

export const loginFields = [
  { inputType: 'email', name: 'email', config: emailConfig },
  { inputType: 'password', name: 'password', config: passwordConfig },
  { inputType: 'radio', name: 'sex', label: 'Sex', config: radioInputs }
];
