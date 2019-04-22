import React from 'react';
import PropTypes from 'prop-types';

const LoginForm = ({
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
      <button
        className="btn btn-lg btn-primary btn-block mt-3"
        type="button"
        onClick={onSubmit}
        disabled={isLoading}
      >
        {isLoading ? 'Logging in...' : 'Login'}
      </button>
    </div>
  </React.Fragment>
);

LoginForm.propTypes = {
  value: PropTypes.objectOf({
    email: PropTypes.string,
    password: PropTypes.string,
  }),
  isLoading: PropTypes.bool,
  isInputDisabled: PropTypes.bool,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  errorsFields: PropTypes.object,
}

LoginForm.defaultProps = {
  value: {
    email: '',
    password: '',
  },
  isLoading: false,
  isInputDisabled: false,
  onSubmit: null,
  onChange: null,
  errorsFields: null,
}

export default LoginForm;


