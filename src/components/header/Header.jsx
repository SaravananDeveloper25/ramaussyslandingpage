import React, { useState } from 'react'
import logo from '../../images/logo.png'
import './header.css'
import { useEffect } from 'react'
function Header() {
    const [header,setHeader] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 300) {
            setHeader(true);
          } else {
            setHeader(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  return (
    <div className={header?'whitehead':'header'}>
        <div className='head'>
            <div className='logo'>
                <img src={logo} alt="" />
            </div>
            <div className='nav'>
                <ul>
                    <li><a href="#home">home</a></li>
                    <li><a href="#pf">protfolio</a></li>
                    <li><a href="#process">Process</a></li>
                    <li><a href="#review">Reviews</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div className='hbtn'>
                <button>contact us</button>
            </div>
        </div>
    </div>
  )
}

export default Header