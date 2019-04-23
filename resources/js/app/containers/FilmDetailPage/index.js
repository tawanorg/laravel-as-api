import React, { Component, memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectUserItem,
  makeSelectIsLoading,
  makeSelectIsFetching,
  makeSelectDetailItems,
} from './selectors';

import Loading from '../../components/Loading';
import Film from '../../components/Film';
import UserCommentBox from '../../components/UserCommentBox';
import CommentBox from '../../components/CommentBox';
import { request } from './actions';

class FilmDetailPage extends Component {
  constructor(props) {
    super(props);

    this.renderListingView = this.renderListingView.bind(this);
  }

  componentDidMount() {
    this.props.request();
  }

  render() {
    console.log('FilmDetailPage', this.props);
    return (
      <div className="container pt-3">
        {this.renderListingView()}
      </div>
    )
  }

  renderListingView() {
    console.log('FilmDetailPage', this.props);
    const { isFetching, isLoading, items, currentUser } = this.props;
    if (isLoading) {
      return (
        <Loading />
      )
    }

    return (
      <React.Fragment>
        {isFetching && (<Loading />)}
        {
          items.length <= 0 ? (
            <div className="alert alert-info" role="alert">
              No film found!.
            </div>
          ) : items.map(({
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
}

const mapStateToProps = () => createStructuredSelector({
  currentUser: makeSelectUserItem(),
  items: makeSelectDetailItems(),
  isLoading: makeSelectIsLoading(),
  isFetching: makeSelectIsFetching(),
});

export function mapDispatchToProps(dispatch) {
  return {
    request: (slug) => dispatch(request(slug))
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(FilmDetailPage);
