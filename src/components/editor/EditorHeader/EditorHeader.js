import React from 'react';
import styles from './EditorHeader.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const EditorHeader = ({ onGoBack, onSubmit}) => {
	return (
		<div className={cx('editor-header')}>
			<div className={cx('back')}>
				<Button 
				theme="outline"
				onClick={onGoBack}>뒤로 가기</Button>
			</div>
			<div className={cx('submit')}>
				<Button 
				theme="submit"
				onClick={onGoBack}>작성 시작</Button>
			</div>
		</div>
	  );
}
 
export default EditorHeader;