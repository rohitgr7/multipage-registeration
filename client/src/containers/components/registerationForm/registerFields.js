const nameConfig = { label: 'Name', id: 'name', placeholder: 'Name' };

const descriptionConfig = {
  label: 'Description',
  id: 'description',
  placeholder: 'Description'
};

const stateConfig = { label: 'State', id: 'state', placeholder: 'State' };

const ageConfig = {
  label: 'Age',
  id: 'age',
  placeholder: 'Age'
};

const heightConfig = {
  label: 'Height',
  id: 'height',
  placeholder: 'Height'
};

const weightConfig = {
  label: 'Weight',
  id: 'weight',
  placeholder: 'Weight'
};

const emailConfig = { label: 'Email', id: 'email', placeholder: 'Email' };

const passwordConfig = {
  label: 'Password',
  id: 'password',
  placeholder: 'Password'
};

const ethnicityInputs = [
  { label: 'Hispanic or Latino', id: 'hispanic or latino' },
  { label: 'Non-Hispanic or Non-Latino', id: 'non-hispanic or non-latino' }
];

const raceInputs = [
  { label: 'American Indian', id: 'american indian' },
  { label: 'Asian', id: 'asian' },
  {
    label: 'Native Hawaiian or Other Pacific Islander',
    id: 'native american or other pacific islander'
  },
  { label: 'Black or African American', id: 'black or african american' },
  { label: 'White', id: 'white' }
];

const sexInputs = [
  { label: 'Male', id: 'male' },
  { label: 'Female', id: 'female' }
];

export const firstPageFields = [
  { inputType: 'text', name: 'name', config: nameConfig },
  { inputType: 'textarea', name: 'description', config: descriptionConfig }
];

export const secondPageFields = [
  { inputType: 'text', name: 'state', config: stateConfig },
  { inputType: 'number', name: 'age', config: ageConfig },
  {
    inputType: 'radio',
    name: 'ethnicity',
    legend: 'Ethnicity',
    config: ethnicityInputs
  },
  { inputType: 'radio', name: 'race', legend: 'Race', config: raceInputs },
  { inputType: 'radio', name: 'sex', legend: 'Sex', config: sexInputs },
  { inputType: 'number', name: 'height', config: heightConfig },
  { inputType: 'number', name: 'weight', config: weightConfig }
];

export const thirdPageFields = [
  { inputType: 'text', name: 'email', config: emailConfig },
  { inputType: 'password', name: 'password', config: passwordConfig }
];
