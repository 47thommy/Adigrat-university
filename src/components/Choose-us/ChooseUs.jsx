import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Features from "../Feature-section/Features";

import "./choose-us.css";
import Adigrat from './adu.jpeg'

import ReactPlayer from "react-player";

const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section className="body_color shadow" id="choose">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="choose__content">
              <h2>Why Choose Us</h2>
              <p>
              Adigrat University is one of the Ethiopian public universities established in 2011 with the intention of producing highly qualified graduates who will be able to serve, with the highest possible dedication, for the success of the country’s Growth and 
              Transformation Plan (GTP) I and II, and beyond.
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=QKqvyvoKMyY"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={Adigrat} alt="" className="w-100 video_img" />
              )}

              {!showVideo && (
                <span className="play__icon">
                  <i
                    class="ri-play-circle-line"
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
      <Features/>
    </section>
  );
};

export default ChooseUs;
