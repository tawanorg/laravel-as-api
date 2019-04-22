import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Pagination = () => (
  <Nav>
    <ul className="pagination pagination-lg">
      <li className="page-item active" aria-current="page">
        <span className="page-link">
          1
          <span className="sr-only">(current)</span>
        </span>
      </li>
      <li className="page-item"><a className="page-link" href="#">2</a></li>
      <li className="page-item"><a className="page-link" href="#">3</a></li>
    </ul>
  </Nav>
)

export default Pagination;
