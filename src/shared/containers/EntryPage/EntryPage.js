import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import * as postActions from 'shared/modules/post/postActions';

class EntryPage extends Component {

  componentDidMount() {
    this.props.getPostById(this.props.params.id);
  }

  render() {
    const { post } = this.props
    return (
      <div>
        <article>
          <h3>{post.title}</h3>
          <div dangerouslySetInnerHTML={{__html: post.body}} />
        </article>
      </div>
    );
  }
}

function mapStateToProps({ post }) {
  return {
    post: post.active
  }
}

EntryPage.need = [
  (params) => {
    return postActions.getPostById(params.id);
  }
];

EntryPage.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string.isRequired
  }),
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string
  }).isRequired
}

export default connect(mapStateToProps, postActions)(EntryPage);