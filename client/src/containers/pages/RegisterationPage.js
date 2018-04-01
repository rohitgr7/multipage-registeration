import React, { Component } from 'react';
import { connect } from 'react-redux';

import RegisterationForm from './../components/registerationForm';

class RegisterationPage extends Component {
  render() {
    return (
      <div>
        <RegisterationForm submitForm={values => console.log(values)} />
      </div>
    );
  }
}

export default connect()(RegisterationPage);
