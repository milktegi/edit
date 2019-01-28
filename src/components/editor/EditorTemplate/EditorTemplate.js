import React, { Component } from 'react';
import styles from './EditorTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class EditorTemplate extends Component {
  //리사이즈 기능구현
  state = {
    leftPercentage: 0.5
  };

  handleMouseMove = e => {
    this.setState({
      leftPercentage: e.clientX / window.innerWidth
    });
  };

  //마우스를 뗐을 떼
  //등록한 이벤트를 제거
  handleMouseUp = e => {
    document.body.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);
  };

  //seperator클릭할 때
  handleSeperatorMouseDown = e => {
    document.body.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp);
  };

  render() {
    const { header, editor, preview } = this.props;
    const { leftPercentage } = this.state;
    const { handleSeperatorMouseDown } = this;

    //각 영역에 flex값 적용
    const leftStyle = {
      flex: leftPercentage
    };
    const rightStyle = {
      flex: 1 - leftPercentage
    };
    const seperateStyle = {
      left: `${leftPercentage * 100}%`
    };

    return (
      <div className={cx('editor-template')}>
        {header}
        <div className={cx('panes')}>
          <div style={leftStyle} className={cx('panes', 'editor')}>
            {editor}
          </div>
          <div style={rightStyle} className={cx('panes', 'preview')}>
            {preview}
          </div>

          <div
            className={cx('seperator')}
            style={seperateStyle}
            onMouseDown={handleSeperatorMouseDown}
          />
        </div>
      </div>
    );
  }
}
export default EditorTemplate;
