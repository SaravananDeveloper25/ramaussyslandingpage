import React from 'react'
import './footer.css'
import logo from '../../images/logo.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <>
      <div className='footer'>
        <div>
          <img src={logo} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempora officiis ratione quos, iure, deleniti alias aut fugit iste ut eius excepturi reiciendis pariatur laboriosam maiores obcaecati, saepe quas. Beatae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium voluptas consequatur consectetur, eum minus vero nemo autem repudiandae sequi officia, distinctio nisi eveniet sed quo veniam, enim error amet ad.</p>
          <div>
            <FacebookIcon style={{ background: '#fff', color: 'black', borderRadius: '30px', padding: '2px', margin: '5px' }}></FacebookIcon>
            <InstagramIcon style={{ background: '#fff', color: 'black', borderRadius: '30px', padding: '2px', margin: '5px' }}></InstagramIcon>
            <LinkedInIcon style={{ background: '#fff', color: 'black', borderRadius: '30px', padding: '2px', margin: '5px' }}></LinkedInIcon>
          </div>

        </div>
        <div className='bottom'>
        <p>© 2021 All Rights Reserved by Ramaussys Technologies </p>
        
      </div>
      </div>

    </>

  )
}

export default Footer