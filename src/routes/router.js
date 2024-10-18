import Home from '../components/Home'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import MainPage from '../components/MainPage'
import Cash from '../components/Cash'

export const routes = [
  {path: '/', element: <MainPage/>, exact: false},
  {path: '/home', element: <Home/>, exact: true},
  {path: '/about', element: <About/>, exact: true},
  {path: '/experience', element: <Experience/>, exact: true},
  {path: '/skills', element: <Skills/>, exact: true},
  {path: '/projects', element: <Projects/>, exact: true},
  {path: '/cash', element: <Cash/>, exact: true},
  // {path: '/list', element: <List/>, exact: true},
//   {path: '/posts/:id', element: <PostPage/>, exact: true},
]

// export const publicRoutes = [
//   {path: '/login', element: <LoginPage/>, exact: true},
// ]