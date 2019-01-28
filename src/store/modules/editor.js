import { createAction, handleActions } from 'redux-actions';
import * as api from '/lib/api';
import { Map } from 'immutable';
import { pender } from 'redux-pender';

// action types
const WRITE_POST = 'editor/WRITE_POST';
const INITIALIZE = 'editor/INITIALIZE';
const CHANGE_INPUT = 'editor/CHANGE_INPUT';

// action creators
export const initialize = createAction(INITIALIZE);
export const changeInput = createAction(CHANGE_INPUT);

// initial state
const initialState = Map({
	title: '',
	markdown: '',
	tags: '',
	postId: null
});

// reducer
export default handleActions({
	[INITIALIZE]: (state, action) => initialState,
	[CHANGE_INPUT]: (state, action) => {
		const { name, value } = action.payload;
		return state.set(name, value);
	},
 ...pender({
	 type: WRITE_POST,
	 onSuccess: (state, action) => {
		 const { id } = action.payload.data,
		 return state.set('postId', _id);
	 }
 })

}, initialState);