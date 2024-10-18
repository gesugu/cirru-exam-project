import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header'
import PostForm from './PostForm'
import PostList from './PostList'
import PostService from '../API/PostService'
import MyLoader from './UI/loader/MyLoader'

const Projects = () => {
  const [posts, setPosts] = useState([])

  const postsProjects = [
    {id: 1, title: 'nasa project', body: 'https://github.com/gesugu/project-nasa3'},
    {id: 2, title: 'other', body: 'https://github.com/gesugu/project-nasa3'},
    {id: 3, title: 'other', body: 'https://github.com/gesugu/project-nasa3'},
    {id: 4, title: 'other', body: 'https://github.com/gesugu/project-nasa3'},
  ]

  const getPosts2 = postsProjects.map((item, index) => {
    return <li className='posts-projects-get' key={item.id}>
      <h3>{item.title}</h3>
      <h3>{item.body}</h3>
    </li>
  })

  const [isLoading, setIsLoading] = useState(false)

  async function getPosts() {
    setIsLoading(true)
    const posts = await PostService.getAll()
    setPosts(posts)
    setIsLoading(false)
}
useEffect(()=>{
  getPosts();
}, [])

  function createPost(new_post) {
    setPosts([...posts, new_post]);
  }

  function removePost(post) {
    setPosts(posts.filter(p =>p.id !== post.id));
  }

  return(
    <div className='projects-page'>
      <Header />
      <h1>Projects</h1>
      <ul>
        <li><PostForm create={createPost}/></li>
      </ul>
      {isLoading ? <div className={'loader-block'}><MyLoader/></div> : <PostList remove={removePost} posts={posts} title='my projects' />}
      <div>
        {getPosts2}
      </div>
    </div>
  )
}

export default Projects