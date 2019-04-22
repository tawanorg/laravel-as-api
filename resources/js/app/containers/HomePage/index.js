import React, { Component, memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectItem } from './selectors';

import WelcomeBox from '../../components/WelcomeBox';

class HomePage extends Component {
  render() {
    return (
      <div className="container pt-3">
        <div className="row">
          <div className="col-12">
            <WelcomeBox />
          </div>
        </div>
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
)(HomePage);
