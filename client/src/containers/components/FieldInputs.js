import React, { Component } from 'react';
import { Field } from 'redux-form';

import RadioInput from './RadioInput';
import TextInput from './TextInput';
import TextArea from './TextArea';

class FieldInputs extends Component {
  renderRadioFields = (name, config) => {
    return config.map(({ label, id }, idx) => (
      <div className="form-check">
        <Field
          name={name}
          type="radio"
          component={RadioInput}
          id={id}
          idx={idx}
          value={id}
        />
        <label className="form-check-label" htmlFor={id}>
          {label}
        </label>
      </div>
    ));
  };

  renderFields = fields => {
    return fields.map(({ inputType, name, legend, config }) => {
      switch (inputType) {
        case 'radio':
          return (
            <fieldset className="form-group">
              <div className="row">
                <legend className="col-form-label col-sm-2 pt-0">
                  {legend}
                </legend>
                <div class="col-sm-10">
                  {this.renderRadioFields(name, config)}
                </div>
              </div>
            </fieldset>
          );
        case 'textarea':
          return <Field name={name} component={TextArea} config={config} />;
        default:
          return (
            <div>
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
    return <div>{this.renderFields(this.props.fields)}</div>;
  }
}

export default FieldInputs;
