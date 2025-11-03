import { Container, Row, Col } from 'reactstrap'

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
    <section className="agency format speaker expert-bg">
        <Container>
            <Row>
                <Col md="12">
                    <div className="format-container m-b-50">
                        <div className="format-container" style={{
                            display: "flex",
                            justifyContent: "center",
                            width: "100%",
                            marginTop: "20px",
                        }}>

                            <div className="format-head-text">
                                <h2 className="about-font-header" style={{ textTransform: 'none' }}>Simple as 1, 2, 3</h2>
                            </div>
                        </div>

                        <div className="steps-image">
                            <img alt="" className="img-fluid" src="/assets/images/agency/steps.png" />
                        </div>

                        <div
                            className="link-horizontal"
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                width: "100%",
                                marginTop: "20px",
                            }}
                        >
                            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", justifyContent: "center" }}>
                                 <li>
                                                <a className=" btn btn-default btn-gradient" href='https://app.slonig.org/#/knowledge?id=0xc93cafd0d50625e1e203d20c596e87b9f01c93798ea8c358370d286903c260b3&lesson'>start using</a>
                                            </li>
                            </ul>
                        </div>

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