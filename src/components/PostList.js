import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title, remove}) => {
  return (
    <div className={'posts-container'}>
      <h2 className={'posts-title'}>{title}</h2>
      <ul className={'posts-list'}>
        {posts.map((post, index)=>
          <PostItem remove={remove} number={index + 1} post={post} key={post.id}/>
        )}
      </ul>
    </div>
  );
};

export default PostList;
