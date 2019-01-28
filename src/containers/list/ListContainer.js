import React, { Component } from 'react';
import PostList from 'components/list/PostList';
import Pagination from 'components/list/Pagination';
import { connect } from 'react-redux';
import * as listActions from 'store/modules/list';
import { bindActionCreators } from 'redux';

class ListContainer extends Component {
  
	getPostList = () => {
		const { tag, page, ListActions } = this.props;
		ListActions.getPostList({
			page,
			tag
		})
	}


	componentDidMount(){
		this.getPostList();
	}

	componentDidUpdate(prevProps, prevState){
		if(prevProps.page !== this.props.page || prevProps.tag !== this.props.tag){
			this.getPostList();
			// 스크롤바 
			document.documentElement.scrollTop = 0;
		}
	}

  render() {
    const { loading, posts, page, lastPage, tag } = this.props;
    if (loading) return null; // 로딩 중일 때는 아무것도 안보여줌

    return (
      <div>
        <PostList posts={posts}/>
        <Pagination page={page} lastPage={lastPage} tag={tag} />
      </div>
    );
  }
}

export default connect(
  state => ({
		lastPage: state.list.get('lastPage'),
    posts: state.list.get('posts'),
    loading: state.pender.pending['list/GET_POST']
  }),
  dispatch => ({
    ListActions: bindActionCreators(listActions, dispatch)
  })
)(ListContainer);
