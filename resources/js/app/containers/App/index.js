import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from '../HomePage';
import GlobalStyles from '../../styles/global-styles';
import LoginPage from '../UserPage/Login';
import RegisterPage from '../UserPage/Register';
import FilmDetailPage from '../FilmDetailPage';
import LogOutPage from '../UserPage/Logout';
import Header from '../../components/Header';

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Header />
      <Switch>
        <Redirect exact from='/' to='/films'/>
        <Route exact path="/films" component={HomePage} />
        <Route exact path="/film/:slug" component={FilmDetailPage} />
        <Route exact path="/user/login" component={LoginPage} />
        <Route exact path="/user/logout" component={LogOutPage} />
        <Route exact path="/user/register" component={RegisterPage} />
        {/* <Route path="" component={NotFoundPage} /> */}
      </Switch>
    </React.Fragment>
  )
}

export default App;
