import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProject } from '../redux/StoreSlice';

const addProject2 = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    const newProject = { id: Date.now(), title };
    dispatch(addProject(newProject));
    setTitle('');
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="type a name of a project" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <button onClick={handleAdd}>add</button>
    </div>
  );
};

export default addProject;