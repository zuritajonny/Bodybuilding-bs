import React from 'react'
import johnImg from '../media/john-doe.png'

const PresentationScreen = () => {
  return (
    <section className='presentation-screen'>
      <img src={johnImg} alt="" className='presentationImg'/>
        <div className="hero-text">
      
          <h1 className='big-text'>Hi, I'm John</h1>
          <p className='paragraph-text'>Personal training for me truly is a labor of love. The same joy I get out of transforming my own body I get out of seeing my clients succeed. I would often get many people contacting me requesting I train them, especially after my strong showings in numerous competitions.</p>
          <a href="" className='link'>Read my story</a>
        </div>
       
    </section>
  )
}

export default PresentationScreen