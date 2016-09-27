import React, { Component } from 'react';
import $ from 'jquery';

class Pagination extends Component {
  constructor() {
    super();
    this.state = { data: [] }
  }

  loadPageLinksFromServer() {
    $.ajax({
      context: this,
      url: this.props.url,
      dataType: 'json',
      success: (data) => {
        this.setState({data: data.links});
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    });
  }

  componentDidMount() {
    this.loadPageLinksFromServer();
    setInterval(this.loadPageLinksFromServer.bind(this), this.props.pollInterval);
  }

  render() {
    // debugger;
    // var paginationLinks = this.state.data.map((paginationLink) => {
    //
    // });

    return (
      <nav aria-label="Page navigation">
        <ul className="pagination">
          <li>
            <a href={this.state.data.prev} aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li><a href={this.state.data.first}>1</a></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#">4</a></li>
          <li><a href={this.state.data.last}>5</a></li>
          <li>
            <a href={this.state.data.next} aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Pagination;
