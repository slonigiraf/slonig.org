import React from 'react'
import { Container, Row, Col } from 'reactstrap'
const Footer = () => (
    <React.Fragment>
        <footer className="agency footer2 p-b-0">
            <Container>
                <Row>
                    <Col lg="3" md="3" sm="12" className="set-first">
                        <div className="logo-sec">
                            <div className="footer-title mobile-title">
                                <h3 className="text-white">About Us</h3>
                            </div>
                            <div className="footer-contant">
                                <img alt="" className="img-fluid footer-logo" src="/assets/images/logo/named-logo.svg" />

                                <ul className="d-d-flex footer-social social">
                                    <li className="footer-social-list">
                                        <a href="https://x.com/denslon_eng"><i aria-hidden="true" className="fa fa-twitter"></i></a>
                                    </li>
                                    <li className="footer-social-list">
                                        <a href="https://www.instagram.com/denslon_eng"><i aria-hidden="true" className="fa fa-instagram"></i></a>
                                    </li>
                                    <li className="footer-social-list">
                                        <a href="https://www.youtube.com/@denslon_eng"><i aria-hidden="true" className="fa fa-youtube"></i></a>
                                    </li>
                                    <li className="footer-social-list">
                                        <a href="https://www.linkedin.com/in/reshetovdenis"><i aria-hidden="true" className="fa fa-linkedin"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col id="contact" lg="3" md="3" sm="12">
                        <div className="footer-title mobile-title">
                            <h3 className="text-white">contact us</h3>
                        </div>
                        <div className="footer-contant">
                            <h5 className="footer-headings">contact us</h5>
                            <div>
                                <ul className="footer-lists op-text">
                                    <li>
                                        <a href="mailto:reshetovdenis@gmail.com" style={{ textTransform: "none" }}>reshetovdenis@gmail.com</a>
                                    </li>
                                    <span>+1 302-310-4501</span>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg="3" md="3" sm="12">
                        <div className="footer-title mobile-title">
                            <h3 className="text-white">learn</h3>
                        </div>
                        <div className="footer-contant">
                            <h5 className="footer-headings">learn</h5>
                            <div>
                                <ul className="footer-lists op-text">
                                    <li>
                                        <a href="/assets/pdf/site.Slonig-paper.pdf">Whitepaper</a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/slonigiraf/slonig">Our Github</a>
                                    </li>
                                    <li>
                                        <a href="/privacy-policy">Privacy policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>

                    <Col lg="3" md="3" sm="12">
                        <div className="footer-title mobile-title">
                            <h3 className="text-white">Community</h3>
                        </div>
                        <div className="footer-contant">
                            <h5 className="footer-headings">Community</h5>
                            <div>
                                <ul className="footer-lists op-text">
                                    <li>
                                        <a href="https://bit.ly/denslon_talk">Join</a>
                                    </li>
                                    <li>
                                        <a href="https://www.patreon.com/denslon_eng">Support</a>
                                    </li>


                                </ul>
                            </div>
                        </div>
                    </Col>

                </Row>

            </Container>
        </footer>
        <div className="agency copyright">
            <Container>
                <Row>
                    <Col md="6">
                        <div className="link-horizontal">
                            <ul>
                                <li>
                                    <a className="copyright-text" href="#">Copyright © 2025 Denis Reshetov</a>
                                </li>

                            </ul>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    </React.Fragment>
)

export default Footer;