import React from 'react';
import { connect } from 'react-redux';

const AlertBox = ({ errorMessage }) => {
  return errorMessage ? (
    <div
      className="alert alert-danger alert-dismissible fade show"
      role="alert"
    >
      <strong>{errorMessage}</strong>
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  ) : (
    <div />
  );
};

const mapStateToProps = ({ auth: { errorMessage } }) => ({ errorMessage });

export default connect(mapStateToProps)(AlertBox);
