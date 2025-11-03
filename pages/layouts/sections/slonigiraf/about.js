import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {Container,Row,Col} from 'reactstrap'
const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        })
    }, []);
    return (
        <section className="agency agency-content about-bg">
            <Container>
                <Row>
                    <Col xl="9" md="9"  className="offset-xl-3 offset-md-3">
                        <div className="agency-header-center-container">
                            <div className="borders"></div>
                            <div className="agency-head">
                                <h2>Slonig helps students talk five times more about the lesson topic</h2>
                            </div>
                        </div>
    
                        <p className="agency-para">Kids go to school to talk to their friends, so we turned those conversations into a powerful learning tool.</p>
                        <p className="agency-para">We provide students with a simple web app that guides them on how to talk in a way that helps their friends learn—but the talking happens live, face to face, in the classroom.</p>
                        <p className="agency-para">Throughout the whole lesson, students chat, smile, joke, and explain things to each other.</p>
                        <a className=" btn btn-default btn-gradient" href="/assets/pdf/site.Slonig-paper.pdf">know more</a>
                    </Col>
                </Row>
            </Container>
            <div className="side-img  set-abs left-0 top-0" data-aos="fade-right" data-aos-duration="4500"
            >
                <div className="plus-container plus-container9">
                    <div className="plus white">
                    </div>
                </div>
                <div className="plus-container plus-container10">
                    <div className="plus plus-medium white">
                    </div>
                </div>
                <div className="plus-container plus-container11">
                    <div className="plus plus plus-small white">
                    </div>
                </div>
                <img alt="" className="img-fluid about-img" src="/assets/images/agency/about-us/image.png" />
            </div>
            <img alt="" className="img-fluid blue-img" src="/assets/images/agency/agency-abs-img.png" />
        </section>
    )
}

export default About;