import React, {useState, useEffect} from 'react'
import Header from '../Header'
import PostForm2 from '../PostForm2'
import PostList2 from '../PostList2'
import MyLoader from '../UI/loader/MyLoader'

import PostService from '../../API/PostService'

const Experience = () => {
    const [isDayMode, setIsDayMode] = useState(false)
    const toggleMode = () => {
      setIsDayMode(!isDayMode)
    }
    const [experts, setExpert] = useState([
        {id: 1, title: 'Expert 1', role: 'html-css builder', date: '09-08-2000'},
        {id: 2, title: 'Expert 2', role: 'front-end developer', date: '09-08-2002'},
        {id: 3, title: 'Expert 3', role: 'web developer', date: '09-08-2004'},
        {id: 4, title: 'Expert 4', role: 'boss', date: '09-08-2012'},
      ])

      const [isLoading, setIsLoading] = useState(false)

//   async function getExperts() {
//     setIsLoading(true)
//     const posts = await PostService.getAll()
//     setExpert(experts)
//     setIsLoading(false)
// }
// useEffect(()=>{
//   getExperts();
// }, [])

  function createExpert(new_expert) {
    setExpert([...experts, new_expert]);
  }

  function removeExpert(expert) {
    setExpert(experts.filter(p =>p.id !== expert.id));
  }


    return(
      <>      <div className='experience-page'>
       
        <div className={isDayMode ? 'dark-mode' : 'day-mode'}>
            <Header />
            <h1 className='experience-page-h1'>experience page</h1>
            <div className="experience-modes-ul-li">
            <ul className='experience-page-modes-ul'>
        <li><PostForm2 create={createExpert}/></li>
      </ul>
      <button className={isDayMode ? 'day-mode-btn' : 'dark-mode-btn'} onClick={toggleMode}>{isDayMode ? '☀️ day mode' : '🌙 dark mode'}</button>
      </div>
      {isLoading ? <div className={'loader-block'}><MyLoader/></div> : <PostList2 remove={removeExpert} experts={experts} title='my experiences' />}
        </div>
      </div>
      </>

    )
}

export default Experience