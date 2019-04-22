import React, { Component, memo } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectUserItem,
  makeSelectIsRegistering,
  makeSelectIsRegistered,
  makeSelectIsRegisterFailed
} from './selectors';
import CenterContent from './CenterContent';
import { userRegisterRequest } from './actions';
import RegisterForm from '../../components/RegisterForm';
import { getErrorMessageFromApi } from '../../utils';

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        name: 'tawan chotikanchinda',
        email: 'ttawanc@gmail.com',
        password: 'root1234',
        password_confirmation: 'root1234',
      },
      errors: {},
      isRegisted: false,
    }
    this.timer = null;
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.renderErrorMessages = this.renderErrorMessages.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.isRegisterd || nextProps.currentUser) {
      return {
        isRegisted: true,
      }
    }

    return {
      isRegisted: false,
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.isRegisted) {
      this.timer = setTimeout(() => {
        this.props.history.push('/');
      }, 3000);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  handleOnChange(field, value) {
    this.setState((prevState) => {
      return {
        fields: Object.assign({}, prevState.fields, {
          [field]: value,
        })
      }
    }, () => this.validator())
  }

  handleOnSubmit(e) {
    e.preventDefault();

    if (this.validator()) {
      this.props.register(this.state.fields);
    }
  }

  validator() {
    let fields = this.state.fields;
    let errors = {};

    if (!fields['name']) {
      errors['name'] = 'Please enter your name.';
    }

    if (typeof fields['name'] !== "undefined") {
      if (!fields['name'].match(/^[a-zA-Z ]*$/)) {
        errors['name'] = 'Please enter your name correctly.';
      }
    }

    if (!fields['email']) {
      errors['email'] = 'Please enter your email.';
    }

    if (typeof fields['email'] !== "undefined") {
      var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!pattern.test(fields['email'])) {
        errors['email'] = 'Please enter valid email address';
      }
    }

    if (!fields['password']) {
      errors['password'] = 'Please enter your password.';
    }

    if (!fields['password_confirmation']) {
      errors['password_confirmation'] = 'Please re-enter your password.';
    }

    if (fields['password'] !== fields['password_confirmation']) {
      errors['password_confirmation'] = 'Your password does not match.';
    }

    this.setState({
      errors
    });

    if (Object.keys(errors).length > 0) {
      return false;
    }

    return true;
  }

  getErrorFields() {
    if (Object.keys(this.state.errors).length > 0) {
      return this.state.errors;
    }

    return null;
  }

  renderErrorMessages() {
    const { isLoginFailed } = this.props;
    try {
      const errorMessagesObject = getErrorMessageFromApi(isLoginFailed);
      if (!errorMessagesObject) {
        return null;
      }

      let errorItems = errorMessagesObject.error;

      return Object.keys(errorItems).map((key) => {
        return (
          <div className="alert alert-danger" role="alert">
            {errorItems[key]}
          </div>
        )
      })
    } catch (error) {
      return (
        <div className="alert alert-danger" role="alert">
          Something went wrong?!
        </div>
      )
    }
  }

  render() {
    const { isRegisterd, isRegistering, isRegisterFailed } = this.props;
    const isInputDisabled = isRegistering;

    if (isRegisterd) {
      return (
        <CenterContent>
          <div className="alert alert-info" role="alert">
            <h4 className="alert-heading">Thank you and welcome!</h4>
            <p className="mb-0">We are redirecting you to our system. Please wait...</p>
          </div>
        </CenterContent>
      )
    }

    return (
      <CenterContent>
        <div className="text-center mb-4">
          <h1 className="h3 mb-3 font-weight-normal">Become a member!</h1>
        </div>
        {this.renderErrorMessages()}
        <RegisterForm
          errorsFields={this.getErrorFields()}
          value={this.state.fields}
          onChange={this.handleOnChange}
          onSubmit={this.handleOnSubmit}
          isInputDisabled={isInputDisabled}
          isLoading={isInputDisabled}
        />
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
  isRegistering: makeSelectIsRegistering(),
  isRegisterd: makeSelectIsRegistered(),
  isRegisterFailed: makeSelectIsRegisterFailed(),
  currentUser: makeSelectUserItem(),
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
  withRouter,
  withConnect,
  memo,
)(RegisterPage);
