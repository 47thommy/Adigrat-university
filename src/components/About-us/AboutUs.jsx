import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assests/images/about-us.png";
import CountUp from "react-countup";
import "./about.css";

const AboutUs = () => {
  return (
    <section className=" shadow black whitee" id="About">
      <Container>
        <Row>
          <Col lg="6" md="6">
          <br/><br/><br/>
            <div className="about__img">
              <img src="https://web.archive.org/web/20160922120943im_/http://www.adu.edu.et/wp-content/plugins/widgetkit/cache/gallery/707/DSC_1044-bd7aa39ed3.JPG" alt="" className="w-100" />
            </div>
          </Col>
          <br/><br/><br/>
          <Col lg="6" md="6">
            <div className="about__content">
            <br/><br/><br/>
              <h2 className="whitee shadow ">About Us</h2>
              <br/><br/><br/>
              <p className="shadow  white">
              Adigrat University is one of the Ethiopian public universities
              
               established in 2011 with the intention of producing highly 
               qualified graduates who will be able to serve, with the highest 
               possible dedication, for the success of the country’s Growth and
                Transformation Plan (GTP) I and II, and beyond. 
                The trained and thereby skilled hands shall ignite a
                 spark enough to create the fire destined to make the
                  necessary changes for the benefit of the Ethiopian 
                  people and all human kind. 

  
  </p>

              {/* <div className="about__counter ">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter ">
                    <span className="counter">
                      <CountUp start={0} end={25} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Students</p>
                  </div>

                  <div className="single__counter ">
                    <span className="counter">
                      <CountUp start={0} end={1200} duration={2} suffix="" />
                    </span>

                    <p className="counter__title">Lectures </p>
                  </div>
                </div>

                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter ">
                    <span className="counter">
                      <CountUp start={0} end={95} duration={2} suffix="" />
                    </span>

                    <p className="counter__title ">Researches</p>
                  </div>

                  <div className="single__counter ">
                    <span className="counter">
                      <CountUp start={0} end={30} duration={2} suffix="" />
                    </span>

                    <p className="counter__title">Catagories</p>
                  </div>
                </div>
              </div> */}
            </div>
          </Col>
        </Row>
      </Container>
      <div className="padd shadow white ">
        <p className="padd white ">The trained and thereby skilled hands shall ignite a spark enough to create the fire destined to make the necessary changes for the benefit of the Ethiopian people and all human kind. Human capital is one of essential and most important ingredients for the socio-economic development of a nation. This capital can be more effective and efficient if the necessary investment is ensured on education. It is with this strong belief that our government is investing a huge budget for the higher education sector from its meager resources. Ethiopia is currently engaged in a highly ambitious effort to realign its higher education system from the old approach to a new approach so that the sector can contribute its level best for the county’s growth and transformation plan (GTP) which is aimed at making the nation a middle income within a short period of time, and a prosperous one ultimately. Our University is working hard to contribute its share to realize the vision of the nation.    
Adigrat University is established in the beautiful town of Adigrat which is
 located approximately 900Kms from Addis Ababa: the capital.
  The town also owns the Addis Pharmaceutical Factory which gives 
  service for almost the whole African countries.Adigrat is the centre of the corridor between Mekelle and Axum. 
This corridor is expected to be the main growth area of the region.
   The establishment of Adigrat University is taking this prediction towards reality,
    visioning greatly towards the sustainable development of the country.</p>
      
</div>
    </section>
  );
};

export default AboutUs;
