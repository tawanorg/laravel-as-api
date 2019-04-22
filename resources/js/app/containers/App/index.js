import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from '../HomePage';
import GlobalStyles from '../../styles/global-styles';
import UserPage from '../UserPage';
import LoginPage from '../UserPage/Login';
import RegisterPage from '../UserPage/Register';
import Header from '../../components/Header';

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Header />
      <Switch>
        <Redirect exact from='/' to='/films'/>
        <Route exact path="/films" component={HomePage} />
        <Route exact path="/user" component={UserPage} />
        <Route exact path="/user/login" component={LoginPage} />
        <Route exact path="/user/register" component={RegisterPage} />
        {/* <Route path="" component={NotFoundPage} /> */}
      </Switch>
    </React.Fragment>
  )
}

export default App;
