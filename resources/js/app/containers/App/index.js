import React, { Component, memo } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectUserItem,
} from '../UserPage/selectors';
import GlobalStyles from '../../styles/global-styles';
import Header from '../../components/Header';

import { userAuth } from '../UserPage/actions';
import LoginPage from '../UserPage/Login';
import RegisterPage from '../UserPage/Register';
import LogOutPage from '../UserPage/Logout';

import HomePage from '../HomePage';
import FilmDetailPage from '../FilmDetailPage';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.checkAuth();
  }

  render() {
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
}

const mapStateToProps = () => createStructuredSelector({
  currentUser: makeSelectUserItem(),
});

export function mapDispatchToProps(dispatch) {
  return {
    checkAuth: () => dispatch(userAuth()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(App);

