import React, { Component } from 'react';
import $ from 'jquery';

import Pagination from '../shared/Pagination.js';
import CommentList from './CommentList.js';
import CommentForm from './CommentForm.js';

class CommentBox extends Component {
  constructor() {
    super();
    this.state = { data: [] }
  }

  loadCommentsFromServer() {
    $.ajax({
      context: this,
      url: this.props.url,
      dataType: 'json',
      success: (data) => {
        this.setState({data: data.data});
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    });
  }

  handleCommentSubmit(comment) {
    var comments = this.state.data;
    var newComments = comments.concat([comment]);

    this.setState({data: newComments});

    $.ajax({
      context: this,
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: (data) => {
        this.setState({data: data.data});
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    });
  }

  componentDidMount() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer.bind(this), this.props.pollInterval);
  }

  render() {
    return (
      <div className="commentBox panel panel-default col-md-8">
        <div className="panel-body">
          <div className="page-header">
            <h1>Comments <small>(140)</small></h1>
          </div>
          <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)}/>
          <Pagination url={this.props.url} pollInterval={2000} />
          <CommentList data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default CommentBox;
