import React, { Component, memo } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectItem } from './selectors';
import CenterContent from './CenterContent';

class RegisterPage extends Component {
  render() {
    return (
      <CenterContent>
        <div>
          <div className="text-center mb-4">
            <h1 className="h3 mb-3 font-weight-normal">Become a member!</h1>
          </div>
          <div className="form-label-group">
            <input type="text" id="inputName" className="form-control" placeholder="Your name" required autofocus />
            <label for="inputName">Your name</label>
          </div>
          <div className="form-label-group">
            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
            <label for="inputEmail">Email address</label>
          </div>
          <div className="form-label-group">
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
            <label for="inputPassword">Password</label>
          </div>
          <div className="form-label-group">
            <input type="password" id="inputPasswordConfirm" className="form-control" placeholder="Confirm your password" required />
            <label for="inputPasswordConfirm">Confirm Password</label>
          </div>
          <button className="btn btn-lg btn-primary btn-block mt-3" type="submit">Register</button>
        </div>
        <Link
          to="/user/login"
          className="btn btn-lg btn-dark btn-block mt-3"
        >
          Already a member?
        </Link>
      </CenterContent>
    )
  }
}

const mapStateToProps = () => createStructuredSelector({
  item: makeSelectItem(),
});

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(RegisterPage);
