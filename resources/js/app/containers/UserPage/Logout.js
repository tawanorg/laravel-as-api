import React, { Component, memo } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectUserItem } from './selectors';
import { userDestroy } from './actions';
import CenterContent from './CenterContent';

class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedOut: false,
    }

    this.timer = null;
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.currentUser === null) {
      return {
        isLoggedOut: true,
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.isLoggedOut) {
      this.timer = setTimeout(() => {
        this.props.history.push('/');
      }, 3000);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  componentDidMount() {
    if (this.props.currentUser === null) {
      this.props.history.push('/');
    }

    this.props.userDestroy();
  }

  render() {
    return (
      <CenterContent>
        <div className="alert alert-info" role="alert">
          <h4 className="alert-heading">See you later!</h4>
          <p className="mb-0">You are logging out from our system...</p>
        </div>
      </CenterContent>
    )
  }
}

const mapStateToProps = () => createStructuredSelector({
  currentUser: makeSelectUserItem(),
});

export function mapDispatchToProps(dispatch) {
  return {
    userDestroy: () => dispatch(userDestroy())
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
)(Logout);
