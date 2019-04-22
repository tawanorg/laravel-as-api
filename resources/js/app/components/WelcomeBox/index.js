import React from 'react';
import { Link } from 'react-router-dom';

const WelcomeBox = () => (
  <div className="jumbotron">
    <h1 className="display-4">Hello, world!</h1>
    <p className="lead">This is a simple films application</p>
    <hr className="my-4" />
    <Link to="/user/register" className="btn btn-primary btn-lg mr-3" href="#" role="button">Are you new member?</Link>
    <Link to="/user/login" className="btn btn-primary btn-lg" href="#" role="button">Login</Link>
  </div>
)

export default WelcomeBox;
