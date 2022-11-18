import {useState,useEffect} from 'react'
import logoImg from "../media/logoB.png";
import { BiMenu } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";

import { useScrollLock } from "../hooks/useScrollLock";
import instragramIcon from "../media/Icons/instagram.svg"
import gmaiIcon from "../media/Icons/gmail.svg"

const Header = () => {
  const { lockScroll, unlockScroll } = useScrollLock();

  const [animateMenu,setAnimateMenu] = useState()

  function menuAnimation(){
    
  }
  
  function handleScrollLock(isOpen) {
    setAnimateMenu(!animateMenu)


    if (isOpen === true) {
      lockScroll();
    } else {
      unlockScroll();
    }
  }


  function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState(null);
  
    useEffect(() => {
      let lastScrollY = window.pageYOffset;
  
      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (direction !== scrollDirection && (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", updateScrollDirection); // add event listener
      return () => {
        window.removeEventListener("scroll", updateScrollDirection); // clean up
      }
    }, [scrollDirection]);
  
    return scrollDirection;
  };
  

  const scrollDirection = useScrollDirection();
  

  return (
    <div className={scrollDirection === "down"  ? 'header-container hide-header' : 'header-container'}>
      <div className='header-wrapper'>

        <div className='logo-container'>
          <img src={logoImg} className='logo-img' alt="" />
        </div>
       
        <div className={animateMenu ? "menu-logo-container hide-menu-button" : "menu-logo-container"} onClick={() => handleScrollLock(true)} ><BiMenu className='icon'/></div>

        <div onClick={() => handleScrollLock(false)} className={animateMenu ? "menu-overlay overlay-active" : "menu-overlay"}>      </div>
        <ul className={animateMenu ? 'menu-container menu-active' : 'menu-container'}>
          <li className='menu-item' onClick={() => handleScrollLock(false)} ><IoCloseOutline onClick={menuAnimation} className='icon'/></li>
          
          <h4 className='medium-text'> Stop wasting your time, join the program</h4>
          <div className='social-media-container'>
            <div className='icon-sm-container'><img src={instragramIcon} alt="" className='icon-svg'/></div>
            <div className='icon-sm-container'><img src={gmaiIcon} alt="" className='icon-svg'/></div>
          </div>
          
        </ul>
  
      

      </div>
    </div>
  )
}

export default Header