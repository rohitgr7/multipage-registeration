import React from 'react';
import { reduxForm } from 'redux-form';

import { thirdPageFields } from './registerFields';
import FieldInputs from './../FieldInputs';

const ThirdPage = props => {
  const { handleSubmit, submitForm, previousPage } = props;

  return (
    <div>
      <form className="needs-validation" onSubmit={handleSubmit(submitForm)}>
        <FieldInputs fields={thirdPageFields} />
        <div className="text-center">
          <button
            className="btn btn-primary"
            type="button"
            onClick={previousPage}
          >
            Previous
          </button>
          <button className="btn btn-danger ml-2" type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

const validate = values => {
  const errors = {};
  const error = 'This field is required';

  errors.email = values.email ? '' : error;
  errors.password = values.password ? '' : error;

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email';
  }

  return errors;
};

export default reduxForm({
  form: 'registeration-form',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(ThirdPage);
