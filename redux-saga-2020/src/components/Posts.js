import React from 'react';
import {connect} from 'react-redux';
import Post from './Post';

const Posts = ({syncPosts}) => {
  if (!syncPosts.length) {
    return (
      <>
        <h1>Truth Is Out There</h1>
        <button className='btn btn-info'>Add Posts</button>
      </>
    );
  }

  return (
    syncPosts.map(post => <Post post={post} key={post}/>)
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    syncPosts: state.posts.posts
  };
};

const mapDispatchToProps = () => {
};

export default connect(mapStateToProps, null)(Posts);
