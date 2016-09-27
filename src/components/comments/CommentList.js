import React, { Component } from 'react';

import Comment from './Comment.js'

class CommentList extends Component {
  render() {
    var commentNodes = this.props.data.map((comment) => {
      return (
        <Comment author={comment.attributes.author} key={comment.id}>
          {comment.attributes.content}
        </Comment>
      )
    });

    return (
      <div className="commentList">
        {commentNodes}
      </div>
    )
  }
}

export default CommentList;
