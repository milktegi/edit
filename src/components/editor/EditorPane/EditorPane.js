import React from 'react';
import styles from './EditorPane.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const EditorPane = () => {
  return (
    <div className={cx('editor-pane')}>
      <input
        name="title"
        placeholder="제목을 입력하세요"
        className={cx('title')}
        type="text"
      />
      <div className={cx('code-editor')} />
      <div className={cx('tags')}>
        <div className={cx('description')}>태그</div>
        <input name="tags" placeholder="태그를 입력하세요" />
      </div>
    </div>
  );
};

export default EditorPane;
