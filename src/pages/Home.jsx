import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero-Section/HeroSection";
import CompanySection from "../components/Company-section/Company";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "../components/About-us/AboutUs";
import Courses from "../components/Courses-section/Courses";
import ChooseUs from "../components/Choose-us/ChooseUs";
import Features from "../components/Feature-section/Features";
import FreeCourse from "../components/Free-course-section/FreeCourse";

import Testimonials from "../components/Testimonial/Testimonials";

import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";
import All from "../components/Colleges/All";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <br/><br/>
      <HeroSection />
      <br/><br/>
      <All/>
      <CompanySection />
      <AboutUs />
      <br/> <br/> <br/> <br/>
      <Courses />
      <br/> <br/> <br/> <br/>
      <ChooseUs />
      {/* <Features /> */}
      {/* <FreeCourse /> */}
<br/><br/>
      <Testimonials />
      <Newsletter />
      <Footer />
    </Fragment>
  );
};

export default Home;
