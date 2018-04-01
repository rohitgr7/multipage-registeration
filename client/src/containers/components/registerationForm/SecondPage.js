import React from 'react';
import { reduxForm } from 'redux-form';

import { secondPageFields } from './registerFields';
import FieldInputs from './../FieldInputs';

const SecondPage = props => {
  const { handleSubmit, submitForm, previousPage } = props;

  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        <FieldInputs fields={secondPageFields} />
        <button type="button" onClick={previousPage}>
          Previous
        </button>
        <button type="submit">Proceed</button>
      </form>
    </div>
  );
};

const validate = values => {
  const errors = {};
  const error = 'This field is required';

  errors.state = values.state ? '' : error;
  errors.age = values.age ? '' : error;
  errors.ethnicity = values.ethnicity ? '' : error;
  errors.race = values.race ? '' : error;
  errors.sex = values.sex ? '' : error;
  errors.height = values.height ? '' : error;
  errors.weight = values.weight ? '' : error;

  return errors;
};

export default reduxForm({
  form: 'registeration-form',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(SecondPage);
