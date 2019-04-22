import React, { Component, memo } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectUserItem,
  makeSelectIsLogingIn,
  makeSelectIsLoggedIn,
  makeSelectIsLogInFailed,
} from './selectors';
import CenterContent from './CenterContent';
import { userLoginRequest } from './actions';
import LoginForm from '../../components/LoginForm';
import { getErrorMessageFromApi } from '../../utils';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        email: 'ttawanc@gmail.com',
        password: 'root1234',
      },
      errors: {},
      isLoggedIn: false,
    }
    this.timer = null;
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.renderErrorMessages = this.renderErrorMessages.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.isLoggedIn || nextProps.currentUser) {
      return {
        isLoggedIn: true,
      }
    }

    return {
      isLoggedIn: false,
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.isLoggedIn) {
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
      this.props.login(this.state.fields);
    }
  }

  validator() {
    let fields = this.state.fields;
    let errors = {};

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
    const { isLoggedIn, isLoggingIn } = this.props;
    const isInputDisabled = isLoggingIn;

    if (isLoggedIn) {
      return (
        <CenterContent>
          <div className="alert alert-info" role="alert">
            <h4 className="alert-heading">Welcome back!</h4>
            <p className="mb-0">We are redirecting you to our system. Please wait...</p>
          </div>
        </CenterContent>
      )
    }

    return (
      <CenterContent>
        <div className="text-center mb-4">
          <h1 className="h3 mb-3 font-weight-normal">Welcome back!</h1>
        </div>
        {this.renderErrorMessages()}
        <LoginForm
          errorsFields={this.getErrorFields()}
          value={this.state.fields}
          onChange={this.handleOnChange}
          onSubmit={this.handleOnSubmit}
          isInputDisabled={isInputDisabled}
          isLoading={isInputDisabled}
        />
        <Link
          to="/user/register"
          className="btn btn-lg btn-dark btn-block mt-3"
        >
          Are you a new member?
        </Link>
      </CenterContent>
    )
  }
}

const mapStateToProps = () => createStructuredSelector({
  currentUser: makeSelectUserItem(),
  isLoggingIn: makeSelectIsLogingIn(),
  isLoggedIn: makeSelectIsLoggedIn(),
  isLoginFailed: makeSelectIsLogInFailed(),
});

export function mapDispatchToProps(dispatch) {
  return {
    login: (user) => dispatch(userLoginRequest(user)),
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
)(LoginPage);
