import React from 'react'
import Tilt from 'react-parallax-tilt';
import { Container, Row, Col } from 'reactstrap'
const Banner = () => (
    <section className="agency header" id="header">
        <div className="agency bg">
            <Container>
                <Row className="d-block d-md-none">
                    <Col md="6">
                        <div style={{ marginTop: "80px" }}>
                            <img alt="" style={{ width: "100%" }} src="/assets/images/agency/slider/img.png" />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <div className="center-text mt-0 mt-md-5">
                            <div>
                                <div className="header-text">
                                    <h1><b>Let’s be honest: <br />30 kids is just too much <br />for a single teacher</b></h1>
                                </div>
                                <div className="header-sub-text">
                                    <p>Slonig turns a classroom full of students into a space full of young tutors.
                                        Using game theory, we ensure that every student actively participates in both learning and peer tutoring—while the teacher can finally rest and observe.</p>
                                </div>
                                <div className="link-horizontal">
                                    <ul>
                                        <li>
                                            <a className=" btn btn-default btn-gradient" href='https://bit.ly/denslon_talk'>start using</a>
                                        </li>
                                        <li>
                                            <a className="btn btn-default btn-gradient text-white active" href='https://www.patreon.com/denslon_eng'>donate</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className="set-abs abs-horizon-center girl-boy">
            <img alt="" className="img-fluid" src="/assets/images/agency/slider/img.png" />
            <div className="plus-container plus-container6">
                <div className="plus white">
                </div>
            </div>
            <div className="plus-container plus-container7">
                <div className="plus white">
                </div>
            </div>
            <div className="plus-container plus-container8">
                <div className="plus white">
                </div>
            </div>
        </div>
        <div className="plus-container">
            <div className="plus">
            </div>
        </div>
        <div className="plus-container plus-container3">
            <div className="plus plus-small">
            </div>
        </div>
        <div className="plus-container plus-container5">
            <div className="plus plus-medium">
            </div>
        </div>
    </section>
)

export default Banner;