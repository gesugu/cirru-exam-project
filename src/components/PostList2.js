import React from 'react';
import PostItem2 from "./PostItem2";

const PostList2 = ({experts, title, remove}) => {
  return (
    <div className={'posts-item-container'}>
      <h2 className={'posts-title'}>{title}</h2>
      <ul className={'posts-list'}>
        {experts.map((expert, index)=>
          <PostItem2 remove={remove} number={index + 1} expert={expert} key={expert.id}/>
        )}
      </ul>
    </div>
  );
};

export default PostList2;
