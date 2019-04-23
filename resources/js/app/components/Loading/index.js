import React from 'react';
import styled from 'styled-components';

const LoadingStyled = styled.div``;

const Loading = () => {
  return (
    <LoadingStyled className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </LoadingStyled>
  )
}

export default Loading;
