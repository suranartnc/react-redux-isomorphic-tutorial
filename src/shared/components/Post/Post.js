import React, { PropTypes } from 'react';
import { Link } from 'react-router/es6';
import CSSModules from 'react-css-modules';
import styles from './Post.scss';

const Post = ({post}) => (
	<article styleName="article">
    <h3><Link to={`/post/${post.id}`}>{post.title}</Link></h3>
  </article>
);

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
}

export default CSSModules(Post, styles);