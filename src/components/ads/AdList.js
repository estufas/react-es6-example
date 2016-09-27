import React, { Component } from 'react';

import Ad from './Ad.js'

class AdList extends Component {
  render() {
    var adNodes = this.props.data.map((ad) => {
      return (
        <Ad title={ad.attributes.title} image={ad.attributes.image} key={ad.id}>
          {ad.attributes.content}
        </Ad>
      )
    });

    return (
      <div className="adList">
        {adNodes}
      </div>
    )
  }
}

export default AdList;
