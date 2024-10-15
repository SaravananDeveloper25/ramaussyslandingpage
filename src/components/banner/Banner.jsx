import React from 'react'
import './banner.css'
import { Container,Row,Col } from 'react-bootstrap'
import bi from '../../images/banner-image.png'
import ai from '../../images/ai.png'
import figma from '../../images/figma.png'
import ps from '../../images/ps.png'
import xd from '../../images/xd.png'
import Offer from './offer'
function Banner() {
  return (
    <div className='Banner'>
        <div className='banner'>
            <Container>
                <Row>
                    <Col lg={6}>
                      <div className='banner-content'>
                        <h2>Transforming Ideas Into Intuitive Digital  <br /> Journeys</h2>
                        <p>From wireframes to full-scale prototypes, we ensure every interaction enhances user satisfaction and meets your business goals.</p>
                        <button>Get a Free Consultation</button>
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div>
                        <img src={bi} alt="" width="650px"/>
                      </div>
                    </Col>
                </Row>
            </Container>
        </div>
  
        <div className='banner-last'>
          <Container>
          <Row>
            <Col>
              <img src={ai} alt="" />
              <h4></h4>
            </Col>
            <Col>
              <img src={figma} alt="" />
              <h4></h4>
            </Col>
            <Col>
              <img src={ps} alt="" />
              <h4></h4>
            </Col>
            <Col>
              <img src={xd} alt="" />
              <h4></h4>
            </Col>
          </Row>
          </Container>
          
        </div>
        <section></section>
        <Offer />
    </div>
  )
}

export default Banner