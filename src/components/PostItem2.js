import React from 'react';
import MyButton from "./UI/button/MyButton";

const PostItem2 = ({expert, number, remove}) => {
  return (
    <li className={'post-item'}>
      <div style={{display: 'flex'}}>
        <div className={'post-item-id'}>
          <p>{number}</p>
        </div>
        <div className={'post-item-content'}>
          <h1>{expert.title}</h1>
          <p>{expert.role}</p>
          <p>{expert.date}</p>
        </div>
      </div>
      <div>
        <MyButton onClick={()=> remove(expert)}>remove</MyButton>
      </div>
    </li>
  );
};

export default PostItem2;