import React, { Component } from 'react';
import $ from 'jquery';

import AdList from './AdList.js'

class AdBox extends Component {
  constructor() {
    super();
    this.state = { data: [] }
  }

  loadAdsFromServer() {
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

  componentDidMount() {
    this.loadAdsFromServer();
    setInterval(this.loadAdsFromServer.bind(this), this.props.pollInterval);
  }

  render() {
    return (
      <div className="adBox">
        <AdList data={this.state.data} />
      </div>
    )
  }
}

export default AdBox;
