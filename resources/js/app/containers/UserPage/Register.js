import React, { Component, memo } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectIsRegistering, makeSelectIsRegistered, makeSelectIsRegisterFailed } from './selectors';
import CenterContent from './CenterContent';
import { userRegisterRequest } from './actions';
import RegisterForm from '../../components/RegisterForm';

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'tawan chotikanchinda',
      email: 'ttawanc@gmail.com',
      password: 'root1234',
      password_confirmation: 'root1234',
    }

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(field, value) {
    this.setState((prevState) => {
      return Object.assign({}, prevState, {
        [field]: value,
      })
    })
  }

  handleOnSubmit() {
    this.props.register(this.state);
  }

  render() {
    console.log('Register', this.props);
    const { isRegisterd, isRegistering } = this.props;
    const isInputDisabled = isRegistering;

    if (isRegisterd) {
      return (
        <CenterContent>
          <div>
            <div className="text-center mb-4">
              <h1 className="h3 mb-3 font-weight-normal">Thank you and welcome!</h1>
              <p className="my-3">We are redirecting you to our system. Please wait...</p>
            </div>
          </div>
        </CenterContent>
      )
    }

    return (
      <CenterContent>
        <RegisterForm
          value={this.state}
          onChange={this.handleOnChange}
          onSubmit={this.handleOnSubmit}
          isInputDisabled={isInputDisabled}
          isLoading={isInputDisabled}
        />
      </CenterContent>
    )
  }
}

const mapStateToProps = () => createStructuredSelector({
  isRegistering: makeSelectIsRegistering(),
  isRegisterd: makeSelectIsRegistered(),
  isRegisterFailed: makeSelectIsRegisterFailed(),
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
