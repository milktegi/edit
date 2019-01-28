import React from 'react';
import styles from './PreviewPane.scss';
import classNames from 'classnames/bind';
import MarkdownRender from 'components/common/MarkdownRender';

const cx = classNames.bind(styles);

const PreviewPane = ({markdown, title}) => {
  return (
    <div className={cx('editor-preview')}>
      <h1 className={cx('title')}>제목</h1>
			<div>
				{title}
			</div>
      <div>
        <MarkdownRender markdown={markdown}/>
      </div>
    </div>
  );
};

export default PreviewPane;
