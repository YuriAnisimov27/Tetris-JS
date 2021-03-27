import React from 'react';
import {connect} from 'react-redux';
import Post from './Post';
import {fetchPosts} from '../redux/actions';

const FetchedPosts = ({asyncPosts, fetchPosts}) => {
  const onAddPostsHandler = () => {
    fetchPosts();
  };

  if (!asyncPosts.length) {
    return (
      <>
        <h1>Truth Is Out There</h1>
        <button onClick={onAddPostsHandler} className='btn btn-info'>Add Posts</button>
      </>
    );
  }

  return (
    asyncPosts.map(post => <Post post={post} key={post.id}/>)
  );
};

const mapStateToProps = (state) => {
  return {
    asyncPosts: state.posts.fetchedPosts
  };
};

const mapDispatchToProps = {
  fetchPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(FetchedPosts);
