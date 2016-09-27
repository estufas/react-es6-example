import React, { Component } from 'react';

import Navigation from './components/shared/Navigation.js';
import CommentBox from './components/comments/CommentBox.js';
import AdBox from './components/ads/AdBox.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      commentsUrl: 'http://localhost:4000/comments?sort=-createdAt&page%5Bsize%5D=10',
      adsUrl: 'http://localhost:4000/ads?page%5Bsize%5D=3'
    }
  }

  render() {
    return (
      <div className="app">
        <Navigation />
        <div className="container">
          <CommentBox url={this.state.commentsUrl} pollInterval={2000} className="commentBox" />
          <AdBox url={this.state.adsUrl} pollInterval={2000} className="adBox" />
        </div>
      </div>
    )
  }
}

export default App;
