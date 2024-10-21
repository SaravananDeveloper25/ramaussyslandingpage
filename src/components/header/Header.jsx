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
    <div className='header'>
        <div className='head'>
            <div className='logo'>
                <img src={logo} alt="" />
            </div>
            <div className='nav'>
                <ul>
                    <li>Home</li>
                    <li>Protfolio</li>
                    <li>Process</li>
                    <li>Reviews</li>
                    <li>Contact</li>
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