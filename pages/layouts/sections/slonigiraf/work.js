import React from 'react'
import {Container,Row,Col} from 'reactstrap'
const Work = () => (
    <section className="agency counter counter-bg">
        <Container>
            <Row>
                <Col md="3" xs="6" className="counter-container">
                    <div className="counters hover-counter active">
                        <img alt="" className="img-fluid counter-img" src="/assets/images/agency/counter/1.png" />
                        <div className="counter-text">
                            <div className="count-number">
                                <h2 className="counts text-center">15</h2>
                            </div>
                            <div className="count-desc">
                                <h5 className="text-center">years in education</h5>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md="3" xs="6" className="counter-container">
                    <div className="counters hover-counter active">
                        <img alt="" className="img-fluid counter-img" src="/assets/images/agency/counter/4.png" />
                        <div className="counter-text">
                            <div className="count-number">
                                <h2 className="counts text-center">6754</h2>
                            </div>
                            <div className="count-desc">
                                <h5 className="text-center">Happy students</h5>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md="3" xs="6" className="counter-container">
                    <div className="counters hover-counter active">
                        <img alt="" className="img-fluid counter-img" src="/assets/images/agency/counter/2.png" />
                        <div className="counter-text">
                            <div className="count-number">
                                <h2 className="counts text-center">19</h2>
                            </div>
                            <div className="count-desc">
                                <h5 className="text-center">Schools in touch</h5>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md="3" xs="6" className="counter-container">
                    <div className="counters hover-counter active">
                        <img alt="" className="img-fluid counter-img" src="/assets/images/agency/service/1.png" />
                        <div className="counter-text">
                            <div className="count-number">
                                <h2 className="counts text-center">48439</h2>
                            </div>
                            <div className="count-desc">
                                <h5 className="text-center">Digital badges issued</h5>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)

export default Work;