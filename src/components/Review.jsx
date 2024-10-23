import React,{useRef} from 'react'
import ul from '../images/Vector 1.png'
import { Container,Row,Col } from 'react-bootstrap'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import la from '../images/left-arrow.png'
import ra from '../images/right-arrow.png'
import qu from '../images/Qu.png'
import vishal from '../images/vishal.png'


function Review() {
  const sliderRef = useRef(null); 
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000, 
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const nextslide = () =>{
    sliderRef.current.slickNext(); // Go to next slide
  }
  const prevslide = () => {
    sliderRef.current.slickPrev(); // Go to previous slide
  };
  const review = [
    {
      review:`In est ea et sed aspernatur nihil aut nobis. Temporibus consequatur enim cum laborum vel. Alias repellat et commodi ducimus non molestiae. In omnis molestias sequi dignissimos.`,
      img:vishal,
      name:'Nikko',
      role:'Lead'
    },
    {
      review:`In est ea et sed aspernatur nihil aut nobis. Temporibus consequatur enim cum laborum vel. Alias repellat et commodi ducimus non molestiae. In omnis molestias sequi dignissimos.`,
      img:vishal,
      name:'Nikko',
      role:'Lead'
    },
    {
      review:`In est ea et sed aspernatur nihil aut nobis. Temporibus consequatur enim cum laborum vel. Alias repellat et commodi ducimus non molestiae. In omnis molestias sequi dignissimos.`,
      img:vishal,
      name:'Nikko',
      role:'Lead'
    },
    {
      review:`In est ea et sed aspernatur nihil aut nobis. Temporibus consequatur enim cum laborum vel. Alias repellat et commodi ducimus non molestiae. In omnis molestias sequi dignissimos.`,
      img:vishal,
      name:'Nikko',
      role:'Lead'
    },
    {
      review:`In est ea et sed aspernatur nihil aut nobis. Temporibus consequatur enim cum laborum vel. Alias repellat et commodi ducimus non molestiae. In omnis molestias sequi dignissimos.`,
      img:vishal,
      name:'Nikko',
      role:'Lead'
    },
    {
      review:`In est ea et sed aspernatur nihil aut nobis. Temporibus consequatur enim cum laborum vel. Alias repellat et commodi ducimus non molestiae. In omnis molestias sequi dignissimos.`,
      img:vishal,
      name:'Nikko',
      role:'Lead'
    },
    {
      review:`In est ea et sed aspernatur nihil aut nobis. Temporibus consequatur enim cum laborum vel. Alias repellat et commodi ducimus non molestiae. In omnis molestias sequi dignissimos.`,
      img:vishal,
      name:'Nikko',
      role:'Lead'
    },

  ]
  return (
    <div className='reviews' id='review'>
        <h2>Client Testimonial</h2>
        <img src={ul} alt="" style={{ marginLeft: '4rem' }} />
        <div className="reviews">
          <Container>
          <Slider ref={sliderRef} {...settings}>
          {review.map((review)=>{
            return (
              <div key={review.name}>
                <Row>
                  <Col>
                  <div className='review-box'>
                    <div>
                      <img src={qu} alt="" />
                      <p>⭐⭐⭐⭐⭐</p>
                    </div>
                    <div>
                      <p>{review.review}</p>
                      <div className='review-p'>
                        <img src={review.img} alt={review.img} />
                        <div>
                          <p>{review.name}</p>
                          <p>{review.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  </Col>
                </Row>
              </div>
            )
          })}
     
          </Slider>
          <div className="abottons">
            <div>
              <img src={la} alt="" className='right-arrow' onClick={nextslide}/>
              <img src={ra} alt="" className='left-arrow' onClick={prevslide}/>
            </div>
          </div>
          </Container>
        </div>
    </div>
  )
}

export default Review