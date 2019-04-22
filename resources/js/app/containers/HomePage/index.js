import React, { Component, memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectUserItem } from './selectors';

import WelcomeBox from '../../components/WelcomeBox';
import { userAuth } from '../UserPage/actions';

class HomePage extends Component {
  componentDidMount() {
    this.props.checkAuth();
  }

  render() {
    console.log('HomePage', this.props);
    return (
      <div className="container pt-3">
        <div className="row">
          <div className="col-12">
            {this.renderWelcomeBox()}
          </div>
        </div>
      </div>
    )
  }

  renderWelcomeBox() {
    const { currentUser } = this.props;
    const name = currentUser ? currentUser.user.name : 'Guest';

    return (
      <WelcomeBox
        isLoggedIn={currentUser !== null}
        name={name}
      />
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
)(HomePage);
