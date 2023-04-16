import React from "react";
import "./colleges.css";
import Medicine from './Medicine'
import Social from './Scocial'
import Engineering  from "./Engineering"
import Agriculture from "./Agriculture";
import Colleges from "./Colleges";
import Natural from './Natural'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';



const All = () => {
  return (
    <BrowserRouter>
      <Routes>
       
          <Route index element={<Colleges />} />
          <Route path="/medicine" element={<Medicine />} />
          <Route path="/social" element={<Social />} />
          <Route path="/agriculture" element={<Agriculture />} />
          <Route path="/natural" element={<Natural />} />
          <Route path="/engineering" element={<Engineering />} />
       
      </Routes>
    </BrowserRouter>
  )
}

export default All