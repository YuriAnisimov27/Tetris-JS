import {CREATE_POST, FETCH_POSTS} from './types';

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post
  };
}

export function fetchPosts() {
  return async dispatch => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
    const json = await res.json();

    dispatch({
      type: FETCH_POSTS,
      payload: json
    });
  };
}
