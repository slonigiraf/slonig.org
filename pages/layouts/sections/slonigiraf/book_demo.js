// BookDemo.jsx
import { Container, Row, Col } from "reactstrap";

const BookDemo = () => (
  <section className="bookdemo">
    <Container>
      <h2 className="bookdemo__title">Call me back</h2>

      <form
        id="lid-collector-5"
        role="form"
        action="/add-lid"
        method="post"
        acceptCharset="UTF-8"
      >
        <Row className="bookdemo__row g-3 align-items-center">
          <Col md="3" sm="6" xs="12">
            <input
              className="bookdemo__input"
              placeholder="Name"
              name="cf-name"
              required
            />
          </Col>

          <Col md="3" sm="6" xs="12">
            <input
              type="tel"
              className="bookdemo__input"
              placeholder="Mobile (e.g., +1...)"
              name="cf-tel"
              required
            />
          </Col>

          <Col md="3" sm="6" xs="12">
            <input
              type="email"
              className="bookdemo__input"
              placeholder="Email"
              name="cf-email"
              required
            />
          </Col>

          <Col md="3" sm="6" xs="12">
            <input
              type="submit"
              className="bookdemo__button"
              name="submit"
              value="Call me back"
            />
          </Col>

          <Col md="12">
            <div className="bookdemo__hint">
              *By submitting, I agree to the{" "}
              <a href="/app/personalDataAgreeIP/">agreement</a> and{" "}
              <a href="/app/personalDataPoliticsIP/">privacy policy</a>
            </div>
          </Col>

          <Col
            md="12"
            className="bookdemo__error hidden-element error-info"
            id="lid-collector-5-error"
          >
            <span>Please fix the errors!</span>
          </Col>
        </Row>
      </form>
    </Container>
  </section>
);

export default BookDemo;