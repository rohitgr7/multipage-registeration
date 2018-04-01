import React, { Component } from 'react';
import { Field } from 'redux-form';

import RadioInput from './RadioInput';
import TextInput from './TextInput';
import TextArea from './TextArea';

class FieldInputs extends Component {
  renderRadioFields = (name, config) => {
    return config.map(({ label, id }, idx) => (
      <div>
        <Field name={name} component={RadioInput} id={id} idx={idx} />
        <label htmlFor={id}>{label}</label>
      </div>
    ));
  };

  renderFields = fields => {
    return fields.map(({ inputType, name, config }) => {
      switch (inputType) {
        case 'radio':
          return <div>{this.renderRadioFields(name, config)}</div>;
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
