import React from 'react';
import styles from './PostList.scss'
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const PostItem = () => {
	return(
		<div className={cx('post-item')}>
			<h2><a>타이틀</a></h2>
			<div className={cx('date')}>2019-01-27</div>
			<p>내용</p>
			<div className={cx('tags')}>
				<a>#태그1</a>
				<a>#태그2</a>
				<a>#태그3</a>
			</div>
		</div>
	)
}

const PostList = ({ children }) => {
	return (  
		<div className={cx('list-wrapper')}>
			<PostItem/>
			<PostItem/>
			<PostItem/>
			<PostItem/>
		</div>
	);
}
 
export default PostList;