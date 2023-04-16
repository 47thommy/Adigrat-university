import React from "react";
import "./colleges.css";
import Medicine from "./Medicine";
import Social from "./Scocial";
import Agri from "./Agriculture";
import Agriculture from "./Agriculture";
import { BrowserRouter, Link, Route, Routes, Outlet } from "react-router-dom";
const Colleges = () => {
  return (
    <section id="collges">
      <div>
        <h3>Academic Units</h3>
        <div className="colleges">
          <ul className="unordered_list">
            <li className="listed">
              <a class="active" href="#colleges">
                Colleges
              </a>
            </li>
            <li className="listed">
              <Link to="/engineering">College of Engineering</Link>
            </li>
            <li className="listed">
              <Link to="/medicine">College of Medicine </Link>
            </li>
            <li className="listed">
              {" "}
              <Link to="/social">Collge of Social Science</Link>
            </li>

            <li className="listed">
              <Link to="/natural" className="listed">
                College of Natural Science
              </Link>
            </li>
            <li className="listed">
              <Link to="/agriculture" className="listed">
                College of Agriculture
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>EDUCATION . RESEARCH . COMMUNITY SERVICE</h3>
          <hr />
          <p className="paragraph">
            The University of Adigrat is dedicated to contributing to the
            sustainable socio-economic development of the nation through the
            provision of societal needs tailored education, undertaking problem
            based research and rendering relevant community services. Our
            Academic Units are at the core of our activities home to our staff,
            students, academic program.
          </p>
          <div >
            <ul className="divlist">
              <li>College of Engineering</li>
              <li>College of Medicine </li>
              <li>College of Social Science</li>
              <li>College of Natural Science</li>
              <li>College of Agriculture</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Colleges;
