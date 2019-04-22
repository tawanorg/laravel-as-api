import React, { Component, memo } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectItem } from './selectors';
import CenterContent from './CenterContent';
import { userRegisterRequest } from './actions';

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    }

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(field, value) {
    if (typeof field !== 'string') {
      throw new Error('Field key is must be string');
    }

    this.setState(prevState => {
      return Object.assign({}, prevState, {
        [field]: value,
      })
    })
  }

  handleOnSubmit() {
    console.log('handleOnSubmit', this.state);
    this.props.register(this.state);
  }

  render() {
    console.log('this.state', this.state)
    return (
      <CenterContent>
        <div>
          <div className="text-center mb-4">
            <h1 className="h3 mb-3 font-weight-normal">Become a member!</h1>
          </div>
          <div className="form-label-group">
            <input
              type="text"
              id="inputName"
              className="form-control"
              placeholder="Your name"
              onChange={(event) => this.handleOnChange('name', event.target.value)}
              value={this.state.name}
            />
            <label htmlFor="inputName">Your name</label>
          </div>
          <div className="form-label-group">
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Email address"
              onChange={(event) => this.handleOnChange('email', event.target.value)}
              value={this.state.email}
            />
            <label htmlFor="inputEmail">Email address</label>
          </div>
          <div className="form-label-group">
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Password"
              onChange={(event) => this.handleOnChange('password', event.target.value)}
              value={this.state.password}
             />
            <label htmlFor="inputPassword">Password</label>
          </div>
          <div className="form-label-group">
            <input
              type="password"
              id="inputPasswordConfirm"
              className="form-control"
              placeholder="Confirm your password"
              onChange={(event) => this.handleOnChange('confirmPassword', event.target.value)}
              value={this.state.confirmPassword}
            />
            <label htmlFor="inputPasswordConfirm">Confirm Password</label>
          </div>
          <button
            className="btn btn-lg btn-primary btn-block mt-3"
            type="button"
            onClick={this.handleOnSubmit}
          >
            Register
          </button>
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
    register: (user) => dispatch(userRegisterRequest(user)),
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
