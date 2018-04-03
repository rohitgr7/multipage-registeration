import React, { Component } from 'react';
import { Field } from 'redux-form';

import RadioInput from './RadioInput';
import TextInput from './TextInput';
import TextArea from './TextArea';

const RenderError = ({ meta: { touched, error } }) => (
  <div className="text-danger">{touched && error}</div>
);

class FieldInputs extends Component {
  renderRadioFields = (name, config) => {
    return config.map(({ label, id }) => (
      <div key={id}>
        <Field
          name={name}
          type="radio"
          component={RadioInput}
          value={id}
          id={id}
          label={label}
        />
      </div>
    ));
  };

  renderFields = (fields, hr) => {
    return fields.map(({ inputType, name, legend, config }, idx) => {
      switch (inputType) {
        case 'radio':
          return (
            <div key={name}>
              {hr && idx !== 0 && <hr />}
              <fieldset className="form-group">
                <div className="row">
                  <legend className="col-form-label col-sm-2 pt-0">
                    {legend}
                  </legend>
                  <div className="col-sm-10">
                    {this.renderRadioFields(name, config)}
                    <Field name={name} component={RenderError} />
                  </div>
                </div>
              </fieldset>
            </div>
          );
        case 'textarea':
          return (
            <div key={name}>
              {hr && idx !== 0 && <hr />}
              <Field name={name} component={TextArea} config={config} />
            </div>
          );
        default:
          return (
            <div key={name}>
              {hr && idx !== 0 && <hr />}
              <Field
                name={name}
                component={TextInput}
                inputType={inputType}
                config={config}
              />
            </div>
          );
      }
    });
  };

  render() {
    const { fields, hr } = this.props;
    return <div>{this.renderFields(fields, hr)}</div>;
  }
}

export default FieldInputs;
