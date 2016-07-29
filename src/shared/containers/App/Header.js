import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {

  render() {
    return (
      <header>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-4">
              <Link to={`/`}>
                Logo
              </Link>
            </div>
            <div className="col-xs-12 col-md-8">
              <div className="pull-right">
                Login
              </div>
              <div className="pull-right">
                Search
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;