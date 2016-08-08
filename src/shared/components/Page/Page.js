import React, { Component } from 'react';
import { Header } from 'shared/containers';

import CSSModules from 'react-css-modules';
import styles from './Page.scss';

const createPage = (initialState = {}) => (BaseComponent) => {
	class Page extends Component {
		constructor(props) {
	    super(props);
	    this.state = initialState;
		}
		render() {
			if (this.state.mode === 'full') {
				return (
					<BaseComponent {...this.props} />
				);
			}
			return (
				<div styleName="wrapper">
				  <Header />
          <div className="container">
            <BaseComponent {...this.props} />
          </div>
        </div>
			);
		}
	}
	return CSSModules(Page, styles);
}

export default createPage;