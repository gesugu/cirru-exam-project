import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects, deleteProject } from '../redux/Slice';
import AddTodo from './AddProject';
import ProjectItem from './Item';

const ProjectList = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects.items);
  const status = useSelector((state) => state.projects.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProjects());
    }
  }, [status, dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteProject(id));
  };

  const filteredProjects = projects.filter(project => 
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>projects list</h2>
      <AddTodo />
      {filteredProjects.length === 0 ? (
        <p>no projects</p>
      ) : (
        filteredProjects.map(project => (
          <ProjectItem key={project.id} project={project} onDelete={handleDelete} />
        ))
      )}
    </div>
  );
};

export default ProjectList;