import React, { Component, memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectUserItem,
  makeSelectAllState,
  makeSelectPagination,
  makeSelectListingItems,
  makeSelectIsListingLoading,
  makeSelectIsListingFetching,
} from './selectors';

import WelcomeBox from '../../components/WelcomeBox';
import Loading from '../../components/Loading';
import Film from '../../components/Film';
import UserCommentBox from '../../components/UserCommentBox';
import CommentBox from '../../components/CommentBox';
import Pagination from '../../components/Pagination';
import * as listingActions from './actions/listing';

class HomePage extends Component {
  constructor(props) {
    super(props);


    this.handleOnChangePage = this.handleOnChangePage.bind(this);
    this.renderListingView = this.renderListingView.bind(this);
    this.renderPagination = this.renderPagination.bind(this);
    this.renderWelcomeBox = this.renderWelcomeBox.bind(this);
  }

  componentDidMount() {
    this.props.listing();
  }

  handleOnChangePage(page) {
    this.props.listing(page);
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
        {this.renderListingView()}
      </div>
    )
  }

  renderListingView() {
    const { isListinFetching, isListingLoading, listingItems, currentUser } = this.props;
    if (isListingLoading) {
      return (
        <Loading />
      )
    }

    return (
      <React.Fragment>
        {this.renderPagination()}
        {isListinFetching && (<Loading />)}
        {
          listingItems.length <= 0 ? (
            <div className="alert alert-info" role="alert">
              No film found!.
            </div>
          ) : listingItems.map(({
            country,
            description,
            genre,
            comments,
            name,
            photo,
            slug,
            realeasedate,
            ticketprice,
            rating,
          }, key) => (
            <div key={key}>
              <div className="row">
                <div className="col-12">
                  <Link to={`/film/${slug}`}>
                    <Film
                      country={country}
                      description={description}
                      genre={genre}
                      name={name}
                      photo={photo}
                      rating={rating}
                      realeasedate={realeasedate}
                      ticketprice={ticketprice}
                    />
                  </Link>
                </div>
              </div>
              {
                comments.length > 0 ?
                comments.map(({ name, comment }, key) => (
                  <div className="row">
                    <div className="col-12">
                      <UserCommentBox
                        name={name}
                        message={comment}
                      />
                    </div>
                  </div>
                )) : (
                  <div className="alert alert-info" role="alert">
                    Make some comment to this film!
                  </div>
                )
              }
              {
                currentUser ? (
                  <div className="row">
                    <div className="col-12">
                      <CommentBox />
                    </div>
                  </div>
                ) : (
                  <div className="alert alert-info" role="alert">
                    Become a member to write a comment, click <Link to="/user/login" className="alert-link">here</Link> to sign in.
                  </div>
                )
              }
            </div>
          ))
        }
      </React.Fragment>
    )
  }

  renderPagination() {
    const { pagination } = this.props;
    let { meta } = pagination;
    let { total, current_page, per_page } = meta;

    return (
      <div className="row">
        <div className="col-12">
          <Pagination
            total={total}
            itemsPerPage={per_page}
            currentPage={current_page}
            onChangePage={this.handleOnChangePage}
          />
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
  pagination: makeSelectPagination(),
  listingItems: makeSelectListingItems(),
  isListingLoading: makeSelectIsListingLoading(),
  isListinFetching: makeSelectIsListingFetching(),
});

export function mapDispatchToProps(dispatch) {
  return {
    listing: (page) => dispatch(listingActions.request(page)),
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
