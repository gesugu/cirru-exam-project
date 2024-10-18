import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const SkillsForm = ({create}) => {

  const [skill, setSkill] = useState({title: '', level: ''})

  function addSkill(event){
    event.preventDefault();
    const new_level ={
      ...skill,
      id: Date.now()
    }
    create(new_level);
    setPost({title: '', level: ''})
  }

  return (
    <form>
      <MyInput
        type="text"
        placeholder="title"
        value={skill.title}
        onChange={e=> setSkill({...skill, title: e.target.value})}
      />
      <MyInput
        type="text"
        placeholder="level"
        value={skill.level}
        onChange={e=> setSkill({...skill, level: e.target.value})}
      />
      <MyButton onClick={addSkill}>add</MyButton>
    </form>
  );
};

export default SkillsForm
