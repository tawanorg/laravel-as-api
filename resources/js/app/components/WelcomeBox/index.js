import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const WelcomeBox = ({
  isLoggedIn,
  name,
}) => (
  <div className="jumbotron">
    <h1 className="display-4">Hello, {name}!</h1>
    <p className="lead">This is a simple films application</p>
    <hr className="my-4" />
    {!isLoggedIn ? (
      <div>
        <Link to="/user/register" className="btn btn-primary btn-lg mr-3" href="#" role="button">Are you new member?</Link>,
        <Link to="/user/login" className="btn btn-primary btn-lg" href="#" role="button">Login</Link>
      </div>
    ) : (
      <Link to="/user/logout" className="btn btn-primary btn-lg" href="#" role="button">Log out</Link>
    )}
  </div>
)

WelcomeBox.propTypes = {
  isLoggedIn: PropTypes.bool,
  name: PropTypes.string,
}

WelcomeBox.defaultProps = {
  isLoggedIn: false,
  name: 'Guest',
}

export default WelcomeBox;
