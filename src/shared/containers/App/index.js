import React, { Component } from 'react';
import Helmet from 'react-helmet';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Helmet
            title="React Redux Isomorphic Tutorial"
        />
        { this.props.children }
      </div>
    );
  }
}

module.exports = App;