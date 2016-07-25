import React, { Component } from 'react'
import { Link } from 'react-router';
import { connect } from 'react-redux'

import * as postActions from 'shared/modules/post/postActions';

class HomePage extends Component {

  componentDidMount() {
    this.props.getPostLatest();
  }

  render() {
    const { posts } = this.props
    return (
      <div>
        {posts.map((post, index) => {
          return (
            <article key={post.id}>
              <h3><Link to={`/post/${post.id}`}>{post.title}</Link></h3>
            </article>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps({ post }) {
  return {
    posts: post.latest
  }
}

export default connect(mapStateToProps, postActions)(HomePage);