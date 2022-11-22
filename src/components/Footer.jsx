import React from "react";
import instragramIcon from "../media/Icons/instagram.png";
import gmaiIcon from "../media/Icons/gmail.png";
import { AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer-container">
      <h4 className="medium-text"> Stop wasting your time, join the program</h4>
      {/*   <ul>
          <li className=''>Home</li>
          <li className=''>Testimonials</li>
          <li className=''>Clothing</li>
          <li className=''>Coaching plans</li>
          <li className=''>About me</li>
        </ul> */}
      <div>
        <div className="social-media-container">
          <a href="https://www.instagram.com/effercoaching/" target="_blank">
            <div className="icon-sm-container">
              <AiOutlineInstagram className="icon-svg" />
            </div>
          </a>
          <div className="icon-sm-container">
            <AiOutlineMail className="icon-svg" />
          </div>
        </div>
      </div>
      <p className="paragraph-text">Effer Coaching - All rights reserved</p>
    </footer>
  );
};

export default Footer;
