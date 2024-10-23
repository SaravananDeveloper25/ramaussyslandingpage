import React, { useState } from 'react';
import ul from '../images/Vector 1.png';
import './style.css';
import { Container, Row, Col } from 'react-bootstrap';
import pf1 from '../images/pf1.png';
import pf2 from '../images/portfolio-2.png';
import pf3 from '../images/pf3.png';
import dp from '../images/dp.png';

function Pf() {
  const [toggle, setToggle] = useState('UI/UX');
  const [fade, setFade] = useState(false); // Control fade-in/fade-out

  const handleclick = (title) => {
    // Start fade-out animation
    setFade(true);
    
    setTimeout(() => {
      // After fade-out, change the toggle state
      setToggle(toggle === title ? 'UI/UX' : title);
      // Fade-in animation
      setFade(false);
    }, 300); // Duration should match the fade-out transition time in CSS
  };

  return (
    <div className="pf" id="pf">
      <h2>Our Portfolio</h2>
      <img src={ul} alt="" style={{ marginLeft: '4rem' }} />
      <div className="pf-titles">
        <div className="pf-title">
          <h3
            onClick={() => handleclick('UI/UX')}
            className={toggle === 'UI/UX' ? 'active-title' : ''}
          >
            UI/UX
          </h3>
          <h3
            onClick={() => handleclick('Web Design')}
            className={toggle === 'Web Design' ? 'active-title' : ''}
          >
            Web Design
          </h3>
          <h3
            onClick={() => handleclick('App Design')}
            className={toggle === 'App Design' ? 'active-title' : ''}
          >
            App Design
          </h3>
        </div>
      </div>
      <div></div>
      <div className={`pf-pro ${fade ? 'fade-out' : 'fade-in'}`}>
        {toggle === 'UI/UX' && (
          <Container>
            <Row>
              <Col>
                <img src={pf1} alt="" className='pf-img'/>
                <h3 style={{ margin: '2rem 0' }}>Bank</h3>
              </Col>
              <Col>
                <img src={pf2} alt="" className='pf-img'/>
                <h3 style={{ margin: '2rem 0' }}>Furniture</h3>
              </Col>
              <Col>
                <img src={pf3} alt="" className='pf-img'/>
                <h3 style={{ margin: '2rem 0' }}>Travel</h3>
              </Col>
            </Row>
          </Container>
        )}
        {toggle === 'Web Design' && (
          <Container>
            <Row>
              <Col>
                <img src={pf1} alt="" className='pf-img'/>
                <h3 style={{ margin: '2rem 0' }}>Bank</h3>
              </Col>
              <Col>
                <img src={pf3} alt="" className='pf-img'/>
                <h3 style={{ margin: '2rem 0' }}>Travel</h3>
              </Col>
              <Col>
                <img src={pf2} alt="" className='pf-img' />
                <h3 style={{ margin: '2rem 0' }}>Furniture</h3>
              </Col>
            </Row>
          </Container>
        )}
        {toggle === 'App Design' && (
          <Container>
            <Row>
              <Col>
                <img src={pf2} alt="" className='pf-img'/>
                <h3 style={{ margin: '2rem 0' }}>Furniture</h3>
              </Col>
              <Col>
                <img src={pf1} alt="" className='pf-img'/>
                <h3 style={{ margin: '2rem 0' }}>Bank</h3>
              </Col>
              <Col>
                <img src={pf3} alt="" className='pf-img'/>
                <h3 style={{ margin: '2rem 0' }}>Travel</h3>
              </Col>
            </Row>
          </Container>
        )}
      </div>

      <div style={{ marginTop: '2rem' }} id='process'>
        <h2>Design Process</h2>
        <img src={ul} alt="" style={{ marginLeft: '4rem' }} />
        <div className="db">
          <Container>
            <img src={dp} alt="" />
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Pf;
