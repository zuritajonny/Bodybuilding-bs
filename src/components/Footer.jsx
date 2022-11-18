import React from 'react'
import instragramIcon from "../media/Icons/instagram.svg"
import gmaiIcon from "../media/Icons/gmail.svg"

const Footer = () => {
  return (
    <footer className='footer-container'>
        <h4 className='medium-text'> Stop wasting your time, join the program</h4>
      {/*   <ul>
          <li className=''>Home</li>
          <li className=''>Testimonials</li>
          <li className=''>Clothing</li>
          <li className=''>Coaching plans</li>
          <li className=''>About me</li>
        </ul> */}
        <div>
          
         
          <div className='social-media-container'>
            <div className='icon-sm-container'><img src={instragramIcon} alt="" className='icon-svg'/></div>
            <div className='icon-sm-container'><img src={gmaiIcon} alt="" className='icon-svg'/></div>
          </div>
        </div>
        <p className='paragraph-text'>Copyright - 2022</p>
    </footer>
  )
}

export default Footer