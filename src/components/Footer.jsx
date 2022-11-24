import React from "react";
import instragramIcon from "../media/Icons/instagram.png";
import gmaiIcon from "../media/Icons/gmail.png";
import { AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
import { TbBrandTiktok } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="footer-container">
      {/*   <ul>
          <li className=''>Home</li>
          <li className=''>Testimonials</li>
          <li className=''>Clothing</li>
          <li className=''>Coaching plans</li>
          <li className=''>About me</li>
        </ul> */}
      <div>
        <div className="social-media-container">
          <a href="https://www.instagram.com/johneffer/" target="_blank">
            <div className="icon-sm-container">
              <AiOutlineInstagram className="icon-svg" />
            </div>
          </a>
          <a
            href="https://www.tiktok.com/@johneffer?_t=8XbYgUfs5cT&_r=1"
            target="_blank"
          >
            <div className="icon-sm-container">
              <TbBrandTiktok className="icon-svg" />
            </div>
          </a>
        </div>
        <h4 className="medium-text">
          {" "}
          Stop wasting your time, join the program
        </h4>
      </div>
      <p className="paragraph-text">Effer Coaching - All rights reserved</p>
    </footer>
  );
};

export default Footer;
