import React from 'react';
import { Link } from 'react-router';
import styles from './Post.scss';

export default (props) => {
	const { post } = props;
	return (
		<article className={styles['article']}>
      <h3><Link to={`/post/${post.id}`}>{post.title}</Link></h3>
    </article>
	);
}