import React, { Component } from 'react';
import PreviewPane from 'components/editor/PreviewPane';

import { connect } from 'react-redux';

class PreviewPainContainer extends Component {
  
  render() {
    const { markdown, title } = this.props;

  return (
    <PreviewPane 
    title={title} 
    markdown={markdown} 
    />
    )
  }
}

export default connect(state => ({
  title: state.editor.get('title'),
  markdown: state.editor.get('markdown')
}))(PreviewPainContainer);
