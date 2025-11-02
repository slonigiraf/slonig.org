import React, { useState } from 'react'
import {  Modal, ModalHeader, ModalBody } from 'reactstrap';
import {Container,Row,Col} from 'reactstrap'
const Video = () => {
    const [modal, setModal] = useState();
    const toggle = () => {
        setModal(!modal)
    }
    return(
        <section className="agency video video-bg p-0" id="video" style={{ marginTop: '10px' }}>
            <Container>
                <Row>
                    <Col xs="12"  className="p-0">
                        <div className="text-center">
                            <div className="d-inline-block">
                                <img alt="" className="img-fluid bg-video" src="/assets/images/agency/videos/bg.png" />
                                <div className="abs-center">
                                    <div>
                                        <div className="m-b-20">
                                            <a className="button" href="#javascript" onClick={toggle}>
                                                <img alt="" className="img-fluid video-img"
                                                    src="/assets/images/agency/videos/icon-slon.png" />
                                            </a>
                                            <Modal isOpen={modal} toggle={toggle} centered={true} size="lg">
                                                <ModalHeader toggle={toggle} className="modal-no-header close-up"></ModalHeader>
                                                <ModalBody className="iframe-modal">
                                                    <iframe className="mfp-iframe" frameBorder="0" allowFullScreen="" src="//www.youtube.com/embed/NfIkgpYl83s?autoplay=1"></iframe>
                                                </ModalBody>
                                            </Modal>
                                        </div>
                                        <div>
                                            <div>
                                                <h3 className="video-heading text-white text-center">See how Slonig supports teachers</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Video;