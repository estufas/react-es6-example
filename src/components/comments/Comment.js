import React, { Component } from 'react';

class Comment extends Component {
  render() {
    return (
      <div className="media">
        <hr />
        <div className="media-left">
          <a href="#">
            <img className="media-object img-rounded" src="http://placehold.it/64x64" alt="..." />
          </a>
        </div>
        <div className="media-body">
          <h4 className="media-heading">{this.props.author}</h4>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Comment;
