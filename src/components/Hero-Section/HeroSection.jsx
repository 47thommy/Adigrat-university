import React from "react";
import { Container, Row, Col } from "reactstrap";
import girls from "./girls.jpeg";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section className="shadow black">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              {/* <h2 className="mb-4 hero__title">
                Anytime Anywhere <br /> Learn on your <br /> Suitable Schedule
              </h2> */}
              <p className="mb-5 whitee">
              ዓዲግራት ዩኒቨርሲቲ በቅድመ ምረቃና በድህረ ምረቃ መርሃ ግብሮች ለ2015 ዓ/ም<br/> 
              በሚከተሉት የትምህርት ዘርፎች ተማሪዎችን ተቀብሎ ማስተማር ይፈልጋል።
              </p>
            </div>
            <div className="search">
              <input type="text" placeholder="Search" />
              <button className="btn">Search</button>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={girls} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
