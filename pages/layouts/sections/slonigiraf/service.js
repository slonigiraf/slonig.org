import React from 'react'
import {Container,Row,Col} from 'reactstrap'
const Service = () => (
    <section className="agency format service-bg" id="features">
        <Container>
            <Row>
                <Col md="4"  className="offset-lg-1">
                    <div className="center-text">
                        <div className="format-container">
                            <h6 className="borders-before text-uppercase">
                                <span>What's inside Slonig?</span>
                            </h6>
                            <div className="format-head-text">
                                <h2 className="about-font-header">Research-proven pedagogy</h2>
                            </div>
                            <div className="format-sub-text">
                                <p className="about-para">For decades, peer tutoring has been recognized as one of the most effective ways to teach. Slonig makes it effortless for teachers to implement.</p>
                            </div>
                            <a className=" btn btn-default btn-gradient" href="/assets/pdf/site.Slonig-paper.pdf">Discover</a>
                        </div>
                    </div>
                </Col>
                <Col lg="7" md="8">
                    <Row>
                        <Col sm="4"  className="center-content unset-height">
                            <ul className="icon-collection" data-aos="fade-left" data-aos-duration="500">
                                <li className="about-icon">
                                    <a className="center-content">
                                        <img alt="" src="/assets/images/agency/service/6.png" />
                                        <h5>Internal motivation</h5>
                                    </a>
                                </li>
                            </ul>
                        </Col>
                        <Col sm="4"  className="center-content unset-height">
                            <ul className="icon-collection" data-aos="fade-left" data-aos-duration="2000">
                                <li className="about-icon">
                                    <a className="center-content">
                                        <img alt="" src="/assets/images/agency/service/1.png" />
                                        <h5>Aha! moments</h5>
                                    </a>
                                </li>
                                <li className="about-icon">
                                    <a className="center-content">
                                        <img alt="" src="/assets/images/agency/service/3.png" />
                                        <h5>Collaboration</h5>
                                    </a>
                                </li>
                            </ul>
                        </Col>
                        <Col sm="4"  className="center-content unset-height">
                            <ul className="icon-collection" data-aos="fade-left" data-aos-duration="3000">
                                <li className="about-icon">
                                    <a className="center-content">
                                        <img alt="" src="/assets/images/agency/service/4.png" />
                                        <h5>Parental involvement</h5>
                                    </a>
                                </li>
                                <li className="about-icon">
                                    <a className="center-content">
                                        <img alt="" src="/assets/images/agency/service/5.png" />
                                        <h5>Digital badges</h5>
                                    </a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </section>
)

export default Service;