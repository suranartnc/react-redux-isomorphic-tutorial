import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import * as postActions from 'shared/modules/post/postActions';

import { Page, Post } from 'shared/components';
import styles from './Home.scss';

class HomePage extends Component {

  componentDidMount() {
    this.props.getPostLatest();
  }

  render() {
    const { posts } = this.props
    return (
      <div className="row">
        {posts.map((post, index) => {
          return (
            <div className="col-md-6" key={post.id}>
              <Post post={post} />
            </div>
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

HomePage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    tags: PropTypes.array
  })).isRequired,
  getPostLatest: PropTypes.func.isRequired
}

export default connect(mapStateToProps, postActions)(Page({
  // mode: 'full'
})(HomePage));