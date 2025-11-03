import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap'
const Banner = () => {
    const [modal, setModal] = useState();
    const toggle = () => {
        setModal(!modal)
    }
    return (
        <section className="agency header" id="header">
            <div className="agency bg">
                <Container>
                    <Row className="d-block d-md-none">
                        <Col md="6">
                            <div style={{ marginTop: "150px", textAlign: "center" }}>
                                <div>
                                    <div className="m-b-20">
                                        <a className="button" href="#javascript" onClick={toggle}>
                                            <img alt="" className="img-fluid video-img"
                                                src="/assets/images/agency/videos/icon-slon.png" style={{ width: "80%" }} />
                                        </a>
                                        <Modal isOpen={modal} toggle={toggle} centered={true} size="lg">
                                            <ModalHeader toggle={toggle} className="modal-no-header close-up"></ModalHeader>
                                            <ModalBody className="iframe-modal">
                                                <iframe className="mfp-iframe" frameBorder="0" allowFullScreen="" src="//www.youtube.com/embed/NfIkgpYl83s?autoplay=1"></iframe>
                                            </ModalBody>
                                        </Modal>
                                    </div>
                                </div>
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
    );
}


export default Banner;