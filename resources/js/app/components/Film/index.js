import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Cover = styled.div`
  background: url(${p => p.image});
  height: 450px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

let jsonToArray = (jsonString) => JSON.parse(jsonString);

const Film = ({
  country,
  description,
  genre,
  name,
  photo,
  rating,
  realeasedate,
  ticketprice,
}) => (
  <div className="card mb-3">
    {photo && <Cover image={photo} className="card-img-top" />}
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">{description}</p>
      <p className="card-text">Price: {ticketprice}</p>
      <p className="card-text">Genre: {jsonToArray(genre) && jsonToArray(genre).join(',')}</p>
      <p className="card-text">Rating: {rating}</p>
      <p className="card-text">Country: {country}</p>
      <p className="card-text">Release Date: {new Date(realeasedate).toDateString()}</p>
    </div>
  </div>
)

Film.propTypes = {
  country: PropTypes.string,
  description: PropTypes.string,
  genre: PropTypes.string,
  name: PropTypes.string,
  photo: PropTypes.string,
  rating: PropTypes.string,
  realeasedate: PropTypes.string,
  slug: PropTypes.string,
  ticketprice: PropTypes.string,
}

export default Film;
