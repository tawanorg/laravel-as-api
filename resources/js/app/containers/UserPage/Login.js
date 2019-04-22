import React, { Component, memo } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectUserItem } from './selectors';
import CenterContent from './CenterContent';

class LoginPage extends Component {
  render() {
    return (
      <CenterContent>
        <div>
          <div className="text-center mb-4">
            <h1 className="h3 mb-3 font-weight-normal">Welcome back!</h1>
          </div>
          <div className="form-label-group">
            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
            <label for="inputEmail">Email address</label>
          </div>
          <div className="form-label-group">
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
            <label for="inputPassword">Password</label>
          </div>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
        </div>
        <Link
          to="/user/register"
          className="btn btn-lg btn-dark btn-block mt-3"
        >
          New member?
        </Link>
      </CenterContent>
    )
  }
}

const mapStateToProps = () => createStructuredSelector({
  user: makeSelectUserItem(),
});

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  // mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(LoginPage);
