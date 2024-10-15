import React from 'react'
import './banner.css'
import ul from '../../images/Vector 1.png'
import { Container,Row,Col } from 'react-bootstrap'
import ua from '../../images/uparrow.png'
import da from '../../images/down-arrow.png'

function offer() {
  return (
    <div className='offer'>
        <div className='offer-head'>
        <h1>What We Offer</h1>
        <img src={ul} alt="" style={{marginLeft:'4rem'}}/>
        </div>
        <section></section>
        <div>
            <Container>
                <div className='offers'>
                    <Container>
                        <Row>
                            <Col md={6} sm={1} lg={6} className='cole'>
                                <div className='offer-box'>
                                    <img src="" alt="" />
                                    <h3>User Research & Analysis</h3>
                                    <p>We dive deep into understanding your users' needs and behaviors to inform strategic design decisions. By conducting user interviews, surveys, and market analysis, we ensure every aspect of your product is tailored to your audience.</p>
                                </div>
                            </Col>
                            <Col md={6} sm={1} lg={6} >
                                <div className='offer-box2'>
                                    <img src="" alt="" />
                                    <h3>Visual Design</h3>
                                    <p>We bring your brand to life with compelling, visually stunning designs that resonate with users. Our team ensures consistency across your platform, making sure your digital product is both beautiful and functional.</p>
                                </div>
                            </Col>
                            <Col md={6} sm={1} lg={6} className='cole'>
                                <div className='offer-box'>
                                    <img src="" alt="" />
                                    <h3>Wireframing</h3>
                                    <p>Our team creates detailed wireframes and interactive prototypes that give you a clear view of your digital product before development begins. This helps to visualize the user flow and gather early feedback, saving time and resources in the long run.</p>
                                </div>
                            </Col>
                            <Col md={6} sm={1} lg={6}>
                                <div className='offer-box4'>
                                    <img src="" alt="" />
                                    <h3>Interaction Design</h3>
                                    <p>Our team designs interactions that feel intuitive and effortless, creating a seamless connection between users and the interface. Every click, swipe, and tap is carefully crafted to enhance the user experience.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default offer