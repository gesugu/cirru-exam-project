import React from 'react'
import Header from './Header'
import image from './images/imagefotor.jpg'
import image2 from './images/samoyed.jpeg'

const About = () => {
    const ImageAbout = (image, alt) => {
        return(
            <img src={image.src} alt={alt} className={'about-page-image'}></img>
        )
    }
    const ImageAbout2 = (image2, alt) => {
        return(
            <img src={image2.src} alt={alt} className={'about-page-image-2'}></img>
        )
    }
    // const imageUrl = 'https://i.pinimg.com/736x/3e/a7/43/3ea7433e7ff51dc0e14c7a4b097665cc.jpg'
    return(
        <div className='about-page'>
            <Header />
            <h1 className='about-page-h1'>About page</h1>
            <div className="about-page-card-boss">
            <div className="about-page-card-name">
            <ImageAbout src={image} alt={'cirru'} />
            <p className='about-image-p'>My initial - Cirru</p>
            </div>
            <div className='about-page-card-name'>
            <ImageAbout2 src={image2} alt={'samoyed'} />
            <p className='about-image-p'>my favorite dog - samoyed, golden retriver</p>
            <p className='about-image-p'>my favorite cat - all cats</p>
            </div>
            </div>
        </div>
    )
}

export default About