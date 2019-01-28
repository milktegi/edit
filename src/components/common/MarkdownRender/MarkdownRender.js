import React, { Component } from 'react';
import styles from './MarkdownRender.scss';
import classNames from 'classnames/bind';
import marked from 'marked';

import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';

import 'prismjs/components/prism-bash.min.js';
import 'prismjs/components/prism-javascript.min.js';
import 'prismjs/components/prism-jsx.min.js';
import 'prismjs/components/prism-css.min.js';

const cx = classNames.bind(styles);

class MarkdownRender extends Component {
  state = {
    html: ''
  };

  renderMarkdown = () => {
    const { markdown } = this.props;
    // 마크다운이 존재하지 않는다면
    // 공백처리
    if (!markdown) {
      this.setState({
        html: ''
      });
      return;
    }
    this.setState({
      html: marked(markdown, {
        breaks: true, //일반 엔터로 새 줄 입력
        sanitize: true // 마크다운 내부 html 무시
      })
    });
  };



  constructor(props) {
    super(props);
    const { markdown } = props;
    // 서버 사이드 렌더링에서도
    // 마크다운 처리가 되도록
    // constructor쪽에서도 구현
    this.state = {
      html: markdown
        ? marked(props.markdown, { breaks: true, sanitize: true })
        : ''
    };
  }
  componentDidMount() {
    Prism.highlightAll();
  }

  componentDidUpdate(prevProps, prevState) {
    // markdown 값이 변경되면
    // renderMarkdown을 호출
    if (prevProps.markdown !== this.props.markdown) {
      this.renderMarkdown();
    }
    if(prevState.html !== this.state.html){
      Prism.highlightAll();
    }
  }

  render() {
    const { html } = this.state;

    //react에서 html을 렌더링하려면
    //객체를 만들어서 내부에
    //__html값을 설정해야 함.
    const markup = {
      __html: html
    };

    return (
      <div className={cx('markdown-loader')} 
      dangerouslySetInnerHTML={markup} />
    );
  }
}

export default MarkdownRender;
