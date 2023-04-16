import React from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";

const Newsletter = () => {
  return (
    <section>
      <Container className="newsletter">
        <Row>
          <Col lg="12" className="text-center">
            <div className="align__padd">
              <h6>Contact Info.</h6>
              <p>President:Solomon Assefa, MSc.</p>{" "}
              <span>
                <p></p>
              </span>
              <div className="">
                <p>Block 01 | Room 207 Adigrat University Main Campus</p>

                <p>P.O. Box 50 Adigrat, Tigray ETHIOPIA</p>

                <p>Direct: +251914035511 </p>

                <p>Email: Solomon@gmail.com</p>
              </div>
            </div>
            <h2 className="mb-4">Subscribe Our Newsletter</h2>
            <div className="subscribe">
              <input type="text" placeholder="Email" />
              <button className="btn">Subscribe</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
