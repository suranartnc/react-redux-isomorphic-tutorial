import React, { Component } from 'react'
import { Link } from 'react-router';
import { connect } from 'react-redux'

import * as postActions from 'shared/modules/post/postActions';

import styles from './Home.scss';

class HomePage extends Component {

  componentDidMount() {
    this.props.getPostLatest();
  }

  render() {
    const { posts } = this.props
    return (
      <div className="container">
        <div className="row">
          {posts.map((post, index) => {
            return (
              <article className={`col-md-6 ${styles['article']}`} key={post.id}>
                <h3><Link to={`/post/${post.id}`}>{post.title}</Link></h3>
              </article>
            );
          })}
        </div>
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