import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as postActions from 'shared/modules/post/postActions';

import { Page } from 'shared/components';

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

export default connect(mapStateToProps, postActions)(Page()(EntryPage));