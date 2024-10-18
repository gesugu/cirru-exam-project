import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm2 = ({create}) => {

  const [expert, setExpert] = useState({title: '', role: '', date: ''})

  function addExpert(event){
    event.preventDefault();
    const new_expert ={
      ...expert,
      id: Date.now()
    }
    create(new_expert);
    setExpert({title: '', role: '', date: ''})
  }

  return (
    <form  className={'posts-container'}>
      <MyInput
        type="text"
        placeholder="title"
        value={expert.title}
        onChange={e=> setExpert({...expert, title: e.target.value})}
      />
      <MyInput
        type="text"
        placeholder="role"
        value={expert.role}
        onChange={e=> setExpert({...expert, role: e.target.value})}
      />
      <MyInput
        type="text"
        placeholder="date"
        value={expert.role}
        onChange={e=> setExpert({...expert, date: e.target.value})}
      />
      <MyButton onClick={addExpert}>add</MyButton>
    </form>
  );
};

export default PostForm2;
