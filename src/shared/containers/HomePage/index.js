import React, { Component } from 'react'
import { connect } from 'react-redux'

class HomePage extends Component {

  render() {
    const { posts } = this.props
    return (
      <div>
        {posts.map((post, index) => {
          return (
            <article id={post.id}>
              <h3>{post.title}</h3>
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

export default connect(mapStateToProps)(HomePage);