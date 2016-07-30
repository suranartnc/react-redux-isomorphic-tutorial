import React, { Component } from 'react';
import Header from 'shared/containers/App/Header';

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
				<div>
				  <Header />
          <div className="container">
            <BaseComponent {...this.props} />
          </div>
        </div>
			);
		}
	}
	return Page;
}

export default createPage;