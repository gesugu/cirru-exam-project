import React from 'react'
import {Link} from 'react-router-dom'
import './MainPage.module.css'

const MainPage = () => {
    return(
        <div className='main-page'>
            <div className="main-page-flex">
            <h1 className='main-page-h'>Kazhimurat Aishaiym</h1>
            <div className="main-page-boss-p">
            <p className='main-page-p'>Programmer. Creative. Innovator</p>
            <p className='main-page-p'>The future</p>
            </div>
            <button className='main-page-btn'><Link className='main-page-btn-p' to='/home'>Know more</Link></button>
            </div>
            {/* <nav>
                <li><Link to=''></Link></li>
            </nav> */}
        </div>
    )
}

export default MainPage