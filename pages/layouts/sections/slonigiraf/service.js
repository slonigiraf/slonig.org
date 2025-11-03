import React from 'react'
import { Container, Row, Col } from 'reactstrap'
const Service = () => (
    <section className="agency format service-bg" id="features">
        <Container>
            <Row>
                <Col md="4" className="offset-lg-1">
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
                            <a className=" btn btn-default btn-gradient" href="/assets/pdf/site.Slonig-paper.pdf">Discover Scientific Evidence</a>
                        </div>
                    </div>
                </Col>
                <Col lg="7" md="8">
                    <Row>
                        <Col sm="4" className="center-content unset-height">
                            <ul className="icon-collection" data-aos="fade-left" data-aos-duration="500">
                                <li className="about-icon">
                                    <a className="center-content">
                                        <img alt="" src="/assets/images/agency/service/6.png" />
                                        <h5>Internal motivation</h5>
                                    </a>
                                </li>
                            </ul>
                        </Col>
                        <Col sm="4" className="center-content unset-height">
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
                        <Col sm="4" className="center-content unset-height">
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

                <Col md="11" className="offset-lg-1">
                    <div className="center-text">
                        <div className="format-container">
                            <h6 className="borders-before text-uppercase">
                                <span>Any scientific evidence?</span>
                            </h6>
                            <div className="format-head-text">
                                <h2 className="about-font-header">Research about our teaching approach</h2>
                            </div>
                            <div className="format-sub-text">
                                <p className="about-para">Reshetov, D., (2025). Whole-class, high-quality peer tutoring is achievable with minimal effort or expense for teachers. Research Gate, DOI:10.31219/osf.io/me9ku_v1</p>
                                <p className="about-para">Bloom, B. S. (1984). The 2 Sigma Problem: The Search for Methods of Group Instruction as Effective as One-to-One Tutoring. Educational Researcher, 13(6), 4–16. DOI:10.3102/0013189X013006004</p>
                                <p className="about-para">Alegre-Ansuategui, F. J., Moliner, L., Lorenzo, G., & Maroto, A. (2017). Peer Tutoring and Academic Achievement in Mathematics: A Meta-Analysis. EURASIA Journal of Mathematics, Science and Technology Education, 14(1). DOI:10.12973/ejmste/79805</p>
                                <p className="about-para">
                                    Ebersbach, M., Feierabend, M., & Nazari, K. B. B. (2020). Comparing the effects of generating questions, testing, and restudying on students’ long‐term recall in university learning. Applied Cognitive Psychology, 34(3), 724–736. DOI:doi.org/10.1002/acp.3639</p>
                                <p className="about-para">
                                    Fiorella, L., & Mayer, R. E. (2013). The relative benefits of learning by teaching and teaching expectancy. Contemporary Educational Psychology, 38(4), 281–288. DOI:10.1016/j.cedpsych.2013.06.001</p>
                                <p className="about-para">
                                    Hidayat, R., & Saad, M. R. M. (2025). A Meta-analysis of the effect of peer tutoring in Science, Technology, Engineering and Mathematics (STEM) subjects. International Journal of Educational Research Open, 8, 100446. DOI:10.1016/j.ijedro.2025.100446</p>

                            </div>
                            <a className=" btn btn-default btn-gradient" href="/assets/pdf/site.Slonig-paper.pdf">Read Our Research Paper</a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)

export default Service;