import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <div className='header-page'>
            <div className="header-page-boss-h1">
            <button className='header-page-btn'><Link className='header-page-btn-p' to='/'>← Go back</Link></button>
            <h1><Link className='header-page-h1' to='/home'>Home</Link></h1>
            <h1><Link className='header-page-h1' to='/about'>About</Link></h1>
            <h1><Link className='header-page-h1' to='/experience'>Experience</Link></h1>
            <h1><Link className='header-page-h1' to='/skills'>Skills</Link></h1>
            <h1><Link className='header-page-h1' to='/projects'>Projects</Link></h1>
            <h1><Link className='header-page-h1' to='/cash'>Cash</Link></h1>
            </div>
            {/* <nav>
                <li><Link to=''></Link></li>
            </nav> */}
        </div>
    )
}

export default Header