import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class CommentForm extends Component {
  handleSubmit(e) {
    e.preventDefault();

    var author = ReactDOM.findDOMNode(this.refs.author).value.trim();
    var content = ReactDOM.findDOMNode(this.refs.content).value.trim();

    if (!content || !author) {
      return;
    }

    this.props.onCommentSubmit({author: author, content: content});

    ReactDOM.findDOMNode(this.refs.author).value = '';
    ReactDOM.findDOMNode(this.refs.content).value = '';

    return;
  }

  render() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
        <p>Leave a comment below</p>
        <div className="input-group">
          <span className="input-group-addon" id="basic-addon1">
            <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
          </span>
          <input type="text" className="form-control" placeholder="Your Name" ref="author" />
        </div>
        <br />
        <div className="input-group">
          <span className="input-group-addon" id="basic-addon1">
            <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
          </span>
          <input type="text" className="form-control" placeholder="Your Comment" ref="content" />
        </div>
        <br />
        <input type="submit" value="Post" className="btn btn-primary pull-right" />
      </form>
    )
  }
}

export default CommentForm;
