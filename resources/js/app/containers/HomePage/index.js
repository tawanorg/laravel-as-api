import React, { Component, memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectUserItem,
  makeSelectAllState,
} from './selectors';

import WelcomeBox from '../../components/WelcomeBox';
import Film from '../../components/Film';
import UserCommentBox from '../../components/UserCommentBox';
import CommentBox from '../../components/CommentBox';
import Pagination from '../../components/Pagination';
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
        <div className="row">
          <div className="col-12">
            <Pagination />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Film />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <UserCommentBox />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <CommentBox />
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
  state: makeSelectAllState(),
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
