import React, { Component } from 'react';

import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';

class RegisterationForm extends Component {
  state = {
    page: 1
  };

  nextPage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1
    }));
  };

  previousPage = () => {
    this.setState(prevState => ({
      page: prevState.page - 1
    }));
  };

  render() {
    const { submitForm } = this.props;
    const { page } = this.state;
    return (
      <div>
        <br />
        <br />
        {page === 1 && <FirstPage submitForm={this.nextPage} />}
        {page === 2 && (
          <SecondPage
            previousPage={this.previousPage}
            submitForm={this.nextPage}
          />
        )}
        {page === 3 && (
          <ThirdPage previousPage={this.previousPage} submitForm={submitForm} />
        )}
      </div>
    );
  }
}

export default RegisterationForm;
