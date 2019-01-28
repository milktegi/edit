import React, { Component } from 'react';
import PostInfo from 'components/post/PostInfo';
import PostBody from 'components/post/PostBody';
import { connect } from 'react-redux';
import * as postActions from 'store/modules/post';
import { bindActionCreators } from 'redux';

class Post extends Component {
  
	initialize = async () => {
		const { PostActions, id } = this.props;
		try {
			await PostActions.getPost(id);
		} catch(e){
			console.log(e);
		}
	}


	componentDidMount(){
		this.initialize();
	}

  render() {
    const { loading, post } = this.props;
    if (loading) return null; // 로딩 중일 때는 아무것도 안보여줌

    const { title, body, publishDate, tags } = post.toJS();
    return (
      <div>
        <PostInfo title={title} publishDate={publishDate} tags={tags} />
        <PostBody body={body} />
      </div>
    );
  }
}

export default connect(
  state => ({
    post: state.post.get('post'),
    loading: state.pender.pending['post/GET_POST']
  }),
  dispatch => ({
    PostActions: bindActionCreators(postActions, dispatch)
  })
)(Post);
