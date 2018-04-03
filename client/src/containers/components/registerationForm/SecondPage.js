import React from 'react';
import { reduxForm } from 'redux-form';

import { secondPageFields } from './registerFields';
import FieldInputs from './../FieldInputs';

const SecondPage = ({ handleSubmit, submitForm, previousPage }) => (
  <div>
    <form className="needs-validation" onSubmit={handleSubmit(submitForm)}>
      <FieldInputs fields={secondPageFields} hr={true} />
      <div className="text-center">
        <button
          className="btn btn-success"
          type="button"
          onClick={previousPage}
        >
          Previous
        </button>
        <button className="btn btn-primary ml-2" type="submit">
          Proceed
        </button>
      </div>
    </form>
  </div>
);

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
