import React from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";

import img from "../../assests/images/testimonial01.png";

const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  return (
    <section id="students" className="shadow">
      <Container>
        <Row>
          <Col lg="10" md="12" className="m-auto">
            <div className="testimonial__wrapper d-flex justify-content-between align-items-center ">
              <div className="testimonial__img w-50">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqD_V_u2yIeZmEUCoKUhcO9UH3d7ZSZ73obw&usqp=CAU" alt="" className="w-100 p-50" />
              </div>

              <div className="testimonial__content w-50">
                <div className="margin"></div>
                <h2 className="mb-4">Students</h2>
                <div className="margin_class">The University of Adigrat is committed to ensuring that all our students 
                have the most rewarding learning experience.</div>
                
                <Slider {...settings}>
                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                      PROSPECTIVE STUDENTS
                      </h6>
                      <p>
                      If you are thinking about studying at the University of Adigrat, we welcome you to browse through our website to find out more about the University!  As a student you will have access to the country’s leading academic centers and gain the opportunity to learn from some of the leading 
                      experts in the arts and sciences fields.
                      </p>

                      {/* <div className="student__info mt-4">
                        <h6 className="fw-bold">Jhon Doe</h6>
                        <p>California, United State</p>
                      </div> */}
                    </div>
                  </div>

                  {/* <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent course of materials
                      </h6>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis saepe id voluptas molestiae. Aperiam corrupti
                        voluptas earum at molestiae neque!
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Jhon Doe</h6>
                        <p>California, United State</p>
                      </div>
                    </div>
                  </div> */}

                  <div>
                    <div className="single__testimonial">
                      <div><h6 className="mb-3 fw-bold">
                      CURRENT STUDENTS
                      </h6></div>
                      
                      <p>
                      As a current student at the University of Adigrat we want you to have an excellent and rewarding learning experience! We welcome you to browse through the website to find out key information
                       regarding our range of student services.
                      </p>

                      {/* <div className="student__info mt-4">
                        <h6 className="fw-bold">Jhon Doe</h6>
                        <p>California, United State</p>
                      </div> */}
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
