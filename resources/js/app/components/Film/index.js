import React from 'react';
import styled from 'styled-components';

const Cover = styled.div`
  background: url(${p => p.image});
  height: 450px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const Film = () => (
  <div className="card mb-3">
    <Cover image="https://picsum.photos/200/300?grayscale" className="card-img-top" />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
)

export default Film;
