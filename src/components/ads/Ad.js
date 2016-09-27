import React, { Component } from 'react';

class Ad extends Component {
  render() {
    return (
      <div className="col-sm-4 panel panel-default ad">
        <img src={this.props.image} alt="..." className="img-responsive" />
        <div className="caption">
          <h3>{this.props.title}</h3>
          <p>{this.props.children}</p>
        </div>
      </div>
    )
  }
}

export default Ad;
