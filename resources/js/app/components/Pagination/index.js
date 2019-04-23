import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: props.total,
      itemsPerPage: props.itemsPerPage,
      currentPage: props.currentPage,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.total !== prevState.total ||
      nextProps.itemsPerPage !== prevState.itemsPerPage ||
      nextProps.currentPage !== prevState.currentPage
      ) {
      return {
        total: nextProps.total,
        itemsPerPage: nextProps.itemsPerPage,
        currentPage: nextProps.currentPage,
      }
    }

    return null;
  }


  handleClick(page) {
    this.setState({
      currentPage: Number(page)
    }, () => {
      this.props.onChangePage(page)
    });
  }

  render() {
    const { total, currentPage, itemsPerPage } = this.state;
    const pages = [];
    for (let i = 1; i <= Math.ceil(total / itemsPerPage); i++) {
      pages.push(i);
    }

    const pager = pages.map(page => {
      return (
        <li
          key={page}
          className={`page-item page-page-${page} ${currentPage === page ? 'active': ''}`}
          onClick={() => this.handleClick(page)}
        >
          <span className="page-link">{page}</span>
        </li>
      );
    });

    return (
      <Nav>
        <ul className="pagination pagination-lg">
          {pager}
        </ul>
      </Nav>
    );
  }
}

PropTypes.propTypes = {
  total: PropTypes.number,
  itemsPerPage: PropTypes.number,
  currentPage: PropTypes.number,
  onChangePage: PropTypes.func,
}

PropTypes.defaultProps = {
  total: 0,
  itemsPerPage: 1,
  currentPage: 1,
  onChangePage: null,
}

export default Pagination;
