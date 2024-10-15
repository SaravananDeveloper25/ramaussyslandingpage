import React from 'react'
import logo from '../../images/logo.png'
import './header.css'
function Header() {
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