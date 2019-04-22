import React from 'react';

const CommentBox = () => (
  <div className="form-group row my-4">
    <div className="col-sm-10">
      <input type="text" className="form-control" id="comment" placeholder="Write something" />
    </div>
    <div className="col-sm-2">
      <button type="submit" className="btn btn-primary btn-block">Comment</button>
    </div>
  </div>
)

export default CommentBox;
