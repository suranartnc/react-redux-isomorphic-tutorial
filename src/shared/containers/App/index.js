import React, { Component } from 'react';
import Helmet from 'react-helmet';

import 'shared/styles/modules/_fonts.scss';
import 'shared/styles/app.scss';

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

export default App;