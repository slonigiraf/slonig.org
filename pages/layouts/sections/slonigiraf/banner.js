import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap'
const Banner = () => {
    const [desktopModal, setDesktopModal] = useState();
    const toggleDesktopVideo = () => {
        setDesktopModal(!desktopModal)
    }
    const [mobileModal, setMobileModal] = useState();
    const toggleMobileVideo = () => {
        setMobileModal(!mobileModal)
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
                                        <a className="button" href="#javascript" onClick={toggleMobileVideo}>
                                            <img alt="" className="img-fluid video-img"
                                                src="/assets/images/agency/videos/video_preview.jpg" style={{ width: "80%" }} />
                                        </a>
                                        <Modal isOpen={mobileModal} toggle={toggleMobileVideo} centered={true} size="lg">
                                            <ModalHeader toggle={toggleMobileVideo} className="modal-no-header close-up"></ModalHeader>
                                            <ModalBody className="iframe-modal">
                                                <iframe className="mfp-iframe" frameBorder="0" allowFullScreen="" src="//www.youtube.com/embed/0P6M5LswCt8?autoplay=1"></iframe>
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
                                        <p>Slonig gets every student talking in pairs to learn by teaching each other.
                                            Game theory ensures everyone takes turns as tutor and tutee—while the teacher can simply observe.</p>
                                    </div>
                                    <div className="link-horizontal">
                                        <ul>
                                            <li>
                                                <a className=" btn btn-default btn-gradient" href='/#book_a_demo_popup'>start using</a>
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
                <div style={{ textAlign: "center" }}>
                    <div>
                        <div className="m-b-20">
                            <a className="button" href="#javascript" onClick={toggleDesktopVideo}>
                                <img alt="" className="img-fluid video-img"
                                    src="/assets/images/agency/videos/video_preview.jpg" />
                            </a>
                            <Modal isOpen={desktopModal} toggle={toggleDesktopVideo} centered={true} size="lg">
                                <ModalHeader toggle={toggleDesktopVideo} className="modal-no-header close-up"></ModalHeader>
                                <ModalBody className="iframe-modal">
                                    <iframe className="mfp-iframe" frameBorder="0" allowFullScreen="" src="//www.youtube.com/embed/0P6M5LswCt8?autoplay=0"></iframe>
                                </ModalBody>
                            </Modal>
                        </div>
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