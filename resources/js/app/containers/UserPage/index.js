import React, { Component, memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectItem } from './selectors';

class UserPage extends Component {
  render() {
    return (
      <div>
        This is UserPage!
      </div>
    )
  }
}

const mapStateToProps = () => createStructuredSelector({
  item: makeSelectItem(),
});

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(UserPage);
