import React from 'react';
import {connect} from 'react-redux';
import Post from './Post';

const Posts = ({syncPosts}) => {
  const onAddPostsHandler = () => {
    console.log('clicked');
  };

  if (!syncPosts.length) {
    return (
      <>
        <h1>Truth Is Out There</h1>
        <button onClick={onAddPostsHandler} className='btn btn-info'>Add Posts</button>
      </>
    );
  }

  return (
    syncPosts.map(post => <Post post={post} key={post.id}/>)
  );
};

const mapStateToProps = (state) => {
  return {
    syncPosts: state.posts.posts
  };
};

export default connect(mapStateToProps, null)(Posts);
