import React, { Component } from 'react';
import { Link } from 'react-router/es6';

import CSSModules from 'react-css-modules';
import styles from './Header.scss';
import logo from './images/webpack.png';

class Header extends Component {

  render() {
    return (
      <header>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-4">
              <Link to={`/`}>
                <img styleName="logo" src={logo} alt="" />
              </Link>
            </div>
            <div className="col-xs-12 col-md-8">
              <div styleName="login" className="pull-right">
                Login
              </div>
              <div styleName="search" className="pull-right">
                Search
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default CSSModules(Header, styles);