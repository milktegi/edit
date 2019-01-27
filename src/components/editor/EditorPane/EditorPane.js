import React, { Component } from 'react';
// import {UnControlled as CodeMirror} from 'react-codemirror2'
import styles from './EditorPane.scss';
import classNames from 'classnames/bind';
import CodeMirror from 'codemirror';
require('codemirror/mode/markdown/markdown');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/jsx/jsx');
require('codemirror/mode/css/css');
require('codemirror/mode/shell/shell');

require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');

const cx = classNames.bind(styles);

class EditorPane extends Component {

editor = null;
codeMirror = null;

initializeEditor = () => {
  this.codeMirror = CodeMirror(this.editor, {
    mode: 'markdown',
    theme: 'material',
    lineNumbers: true,
    lineWrapping: true
  })
}

componentDidMount() {
  this.initializeEditor();
}

  render() {
  return (
    <div className={cx('editor-pane')}>
      <input
        name="title"
        placeholder="제목을 입력하세요"
        className={cx('title')}
        
      />
      <div className={cx('code-editor')} 
      ref={ref=> this.editor=ref}
      />
      <div className={cx('tags')}>
        <div className={cx('description')}>태그</div>
        <input name="tags" placeholder="태그를 입력하세요" />
      </div>
    </div>
  );
};
}

export default EditorPane;
