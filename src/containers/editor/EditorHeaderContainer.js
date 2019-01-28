import React, { Component } from 'react';
import EditorHeader from 'components/editor/EditorHeader';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import * as editorActions from 'store/modules/editor';

class EditorHeaderContainer extends Component {

	componentDidMount(){
		const { EditorActions } = this.props;
		// 에디터를 초기화합니다.
		EditorActions.initialize(); 
	}

	handleGoBack = () => {
		const { history } = this.props;
		history.goBack();
	}

	handleSubmit = async () => {
		const {
			title,
			markdown,
			tags,
			EditorActions,
			history
		} = this.props;
		const post = {
			title,
			body: markdown,
	//태그 텍스트를 ,로 분리시키고
	//앞뒤 공백을 지우고
	//중복되는 값을 제거
			tags: tags === "" ? [] : [...new Set(tags.split(',').map(
				tag => tag.trim()
			))]
		};
		try {
			await EditorActions.writePost(post);
			history.push(`/post/${this.props.postId}`);
		} catch(e) {
			console.log(e);
		}
	}

	render() {

  const { handleGoBack, handleSubmit } = this;

		return (
		<EditorHeader
		onGoBack={handleGoBack}
		onSubmit={handleSubmit}		
		/>
		)
	}
}

export default connect(
	(state) => ({
		title: state.editor.get('title'),
		markdown: state.editor.get('markdown'),
		tags: state.editor.get('tags'),
		postId: state.editor.get('postId')
	}),
	(dispatch) => ({
		EditorActions: bindActionCreators(editorActions, dispatch)
	})
)(withRouter(EditorHeaderContainer));
