import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
function Enquiry() {
  return (
    <div className='Enquiry' id='contact'>
        <Container>
            <div className="enqiry">
                <div className="form">
                    <form action="" method="">
                    <h3>Enquiry</h3>

                        <label htmlFor="">Name</label>
                        <input type="text" />
                        <label htmlFor="">Email</label>
                        <input type="email" name="" id="" />
                        <label htmlFor="">Design Type</label>
                        <select name="" id="">
                            <option value=""></option>
                        </select>
                        <label htmlFor="">Message</label>
                        <textarea name="" id="" rows="5"></textarea>
                        <div className='form-button'>
                        <button>Submit</button>
                        </div>
                    </form>
                </div>
                <div className="contact">
                    <div>
                        <h3>Contact Us</h3>
                        <div>
                            <div className='a'> <span><LocationOnOutlinedIcon></LocationOnOutlinedIcon></span><p>Daren Squares</p></div>
                            <div className='a'> <span><LocalPhoneOutlinedIcon></LocalPhoneOutlinedIcon></span><p>516-970-8446</p></div>
                            <div className='a'> <span><EmailOutlinedIcon></EmailOutlinedIcon></span><p>Judge_Marks@gmail.com</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Enquiry