import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RegisterForm = ({
  isInputDisabled,
  isLoading,
  value,
  onChange,
  onSubmit,
}) => {
  return (
    <React.Fragment>
      <div>
        <div className="text-center mb-4">
          <h1 className="h3 mb-3 font-weight-normal">Become a member!</h1>
        </div>
        <div className="form-label-group">
          <input
            disabled={isInputDisabled}
            type="text"
            id="inputName"
            className="form-control"
            placeholder="Your name"
            onChange={(event) => onChange('name', event.target.value)}
            value={value.name}
          />
          <label htmlFor="inputName">Your name</label>
        </div>
        <div className="form-label-group">
          <input
            disabled={isInputDisabled}
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            onChange={(event) => onChange('email', event.target.value)}
            value={value.email}
          />
          <label htmlFor="inputEmail">Email address</label>
        </div>
        <div className="form-label-group">
          <input
            disabled={isInputDisabled}
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            onChange={(event) => onChange('password', event.target.value)}
            value={value.password}
            />
          <label htmlFor="inputPassword">Password</label>
        </div>
        <div className="form-label-group">
          <input
            disabled={isInputDisabled}
            type="password"
            id="inputPasswordConfirm"
            className="form-control"
            placeholder="Confirm your password"
            onChange={(event) => onChange('password_confirmation', event.target.value)}
            value={value.password_confirmation}
          />
          <label htmlFor="inputPasswordConfirm">Confirm Password</label>
        </div>
        <button
          className="btn btn-lg btn-primary btn-block mt-3"
          type="button"
          onClick={onSubmit}
          disabled={isLoading}
        >
          {isLoading ? 'Registering...' : 'Register'}
        </button>
      </div>
      <Link
        to="/user/login"
        className="btn btn-lg btn-dark btn-block mt-3"
      >
        Already a member?
      </Link>
    </React.Fragment>
  )
}

RegisterForm.propTypes = {
  value: PropTypes.objectOf({
    name: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    password_confirmation: PropTypes.string,
  }),
  isLoading: PropTypes.bool,
  isInputDisabled: PropTypes.bool,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
}

RegisterForm.defaultProps = {
  value: {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  },
  isLoading: false,
  isInputDisabled: false,
  onSubmit: null,
  onChange: null,
}

export default RegisterForm;


