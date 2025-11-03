import React from 'react'
import Slider from "react-slick";
import { Container, Row, Col } from 'reactstrap'
import { TestimonialData } from '../../../../database/layouts/agency/database';

var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                arrows: false
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                arrows: false
            }
        }
    ]
};

const Steps = () => (
    <section className="agency testimonial format testimonial-bg">
        <Container>
            <Row>
                <Col md="5">
                    <div className="format-container m-b-50">
                        <h6 className="borders-before">
                            <span>Easy to Start</span>
                        </h6>
                        <div className="format-head-text">
                            <h2 className="text-white" style={{ textTransform: 'none' }}>
                                Simple <span className="block-span">as 1, 2, 3</span>
                            </h2>
                        </div>
                         <img alt="" className="img-fluid" src="/assets/images/agency/steps.png" />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs="12">
                    
                </Col>
            </Row>
        </Container>
    </section>
)

export default Steps;