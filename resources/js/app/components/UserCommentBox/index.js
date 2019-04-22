import React from 'react';
import styled from 'styled-components';

const AvatarImage = styled.img`
  height: 50px;
  border-radius: 50%;
  display: flex;
  width: 50px;
`;

const UserCommentBox = () => (
  <div className="media">
    <AvatarImage src="https://picsum.photos/id/237/200/300" />
    <div className="media-body ml-3">
      <h5 className="mt-0">Top-aligned media</h5>
      <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
      <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
    </div>
  </div>
)

export default UserCommentBox;
