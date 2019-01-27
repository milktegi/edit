import React from 'react';
import styles from './EditorPreview.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const EditorPreview = ({markdown, title}) => {
  return (
    <div className={cx('editor-preview')}>
      <h1 className={cx('title')}>제목</h1>
			<div>
				내용
			</div>
    </div>
  );
};

export default EditorPreview;
