import React, {useState} from 'react'
import Header from './Header'
import MyLoader from '../components/UI/loader/MyLoader'
import MyInput from '../components/UI/input/MyInput'
import MyButton from './UI/button/MyButton'

const Skills = () => {
    const [isVisible, setIsVisible] = useState(false)
    const toggleVisible = () => {
        setIsVisible(!isVisible)
    }

    return(
        <div className='skills-page'>
            <Header />
            <div className="skills-page-boss-h1-btn">
            <h1 className='skills-page-h1'>Skills page</h1>
            <button className='skills-page-btn' onClick={()=> {setIsVisible(!isVisible)}}>{isVisible? 'close edit' : 'open edit'}</button>
            </div>
            <div className="skills-page-boss-div">
            <div className='skills-page-div'>JavaScript</div>
            <div className='skills-page-div-2'>TypeScript</div>
            <div onClick={()=> toggleVisible} className={isVisible? 'not-visible-modal' : 'visible-modal'}>
                <MyInput />
                <MyButton />
            </div>
            </div>
        </div>
    )
}

export default Skills