import React, { Component } from 'react';
// import {UnControlled as CodeMirror} from 'react-codemirror2'
import styles from './EditorPane.scss';
import classNames from 'classnames/bind';
import CodeMirror from 'codemirror';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/css/css';
import 'codemirror/mode/shell/shell';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

const cx = classNames.bind(styles);

class EditorPane extends Component {

editor = null; // editor ref
codeMirror = null; // CodeMirror 인스턴스
cursor = null; // 에디터의 텍스트 cursor 위치

initializeEditor = () => {
  this.codeMirror = CodeMirror(this.editor, {
    mode: 'javascript',
    theme: 'material',
    lineNumbers: true,
    lineWrapping: true
  })
  this.codeMirror.on('change', this.handleChangeMarkdown);
}



componentDidMount() {
    this.initializeEditor();
}

handleChange =  e => {
  const { onChangeInput } = this.props;
  const { value , name } = e.target;
  onChangeInput({ name, value });
}

handleChangeMarkdown = doc => {
  const { onChangeInput } = this.props;
  this.cursor = doc.getCursor(); //텍스트 cursur 위치 저장
  onChangeInput({
    name: 'markdown',
    value: doc.getValue()
  })
}

componentDidUpdate(prevProps, prevState){
  // markdown이 변경되면 에디터 값도 변함
  // 이 과정에서 텍스트 커서의 위치는 초기화 됨
  // 저장한 커서의 위치가 있음
  // 해당 위치로 설정
  if(prevProps.markdown !== this.props.markdown){
    const { codeMirror, cursor } = this;
    // 인스턴스 아직 안만들
    if(!codeMirror) return;
    codeMirror.setValue(this.props.markdown);
    // 커서가 없 
    if(!cursor) return;
    codeMirror.setCursor(cursor);
  }
}

  render() {

  const { handleChange } = this;
  const { tags, title } = this.props;

  return (
    <div className={cx('editor-pane')}>
      <input
        name="title"
        placeholder="제목을 입력하세요"
        className={cx('title')}
        value={title}
        onChange={handleChange}
      />
      <div 
      className={cx('code-editor')} 
      ref={(ref)=> this.editor=ref}
      />
      <div className={cx('tags')}>
        <div className={cx('description')}>태그</div>
        <input 
        name="tags" 
        placeholder="태그를 입력하세요" 
        value={tags}
        onChange={handleChange}
        />
      </div>
    </div>
  );
};
}

export default EditorPane;
