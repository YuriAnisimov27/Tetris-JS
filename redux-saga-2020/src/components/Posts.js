import React from 'react';
import Post from './Post';

const Posts = ({posts}) => {
  if (!posts.length) {
    return (
      <>
        <h1>Truth Is Out There</h1>
        <button className='btn btn-info'>Add Posts</button>
      </>
    );
  }

  return (
    posts.map(post => <Post post={post} key={post}/>)
  );
};

export default Posts;
