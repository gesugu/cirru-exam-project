import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {

  const [post, setPost] = useState({title: '', body: ''})

  function addPost(event){
    event.preventDefault();
    const new_post ={
      ...post,
      id: Date.now()
    }
    create(new_post);
    setPost({title: '', body: ''})
  }

  return (
    <form  className={'posts-container'}>
      <MyInput
        type="text"
        placeholder="name"
        value={post.title}
        onChange={e=> setPost({...post, title: e.target.value})}
      />
      <MyInput
        type="text"
        placeholder="description"
        value={post.body}
        onChange={e=> setPost({...post, body: e.target.value})}
      />
      <MyButton onClick={addPost}>add</MyButton>
    </form>
  );
};

export default PostForm;
