import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
  renderContent = () => {
    const { auth } = this.props.user;
    return auth ? (
      <li key="3" className="nav-item active">
        <a className="nav-link" href="#">
          Logout
        </a>
      </li>
    ) : (
      [
        <li key="1" className="nav-item">
          <Link className="nav-link" to="/register">
            Register
          </Link>
        </li>,
        <li key="2" className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      ]
    );
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to={this.props.auth ? '/surveys' : '/'} className="navbar-brand">
          Dummy App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(Header);
