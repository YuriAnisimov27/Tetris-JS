import React from 'react';

const FetchedPosts = ({posts}) => {
  if (!posts.length) {
    return (
      <>
        <h1>Truth Is Out There</h1>
        <button className='btn btn-info'>Add Posts</button>
      </>
    );
  }

  return (
    <h1>FetchedPosts</h1>
  );
};

export default FetchedPosts;
