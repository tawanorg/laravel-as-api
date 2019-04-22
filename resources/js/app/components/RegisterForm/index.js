import React from 'react';
import PropTypes from 'prop-types';

const RegisterForm = ({
  errorsFields,
  isInputDisabled,
  isLoading,
  value,
  onChange,
  onSubmit,
}) => (
  <React.Fragment>
    <div>
      <div className="form-label-group">
        {errorsFields && errorsFields.hasOwnProperty('name') ? <div className="invalid-feedback">{Object.values(errorsFields)[0]}</div> : null}
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
        {errorsFields && errorsFields.hasOwnProperty('email') ? <div className="invalid-feedback">{Object.values(errorsFields)[0]}</div> : null}
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
        {errorsFields && errorsFields.hasOwnProperty('password') ? <div className="invalid-feedback">{Object.values(errorsFields)[0]}</div> : null}
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
        {errorsFields && errorsFields.hasOwnProperty('password_confirmation') ? <div className="invalid-feedback">{Object.values(errorsFields)[0]}</div> : null}
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
  </React.Fragment>
);

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
  errorsFields: PropTypes.object,
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
  errorsFields: null,
}

export default RegisterForm;


