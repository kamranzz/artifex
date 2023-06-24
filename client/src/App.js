import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Project from "./pages/Project";
import School from "./pages/School";
import NoPage from "./pages/NoPage";
import './App.css'

import { useState, useEffect } from 'react';


const fontFamilies = [
  "'Inter', sans-serif",
  "'Island Moments', cursive",
  "'Righteous', cursive",
  "'Neonderthaw', cursive",
  "'Itim', cursive",
  "'DotGothic16', sans-serif",
  "'Montserrat', sans-serif",
  "'DM Sans', sans-serif",
  "'Roboto', sans-serif",
  "'Rochester', cursive",
  "'Mr Dafoe', cursive",
];

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fontIndex, setFontIndex] = useState(0);

  useEffect(() => {
    // loading vaxtinin davametme muddeti ms ile
    setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setFontIndex((prevIndex) => (prevIndex + 1) % fontFamilies.length);
    }, 150); // her 150ms-de font deyismek

    return () => {
      clearInterval(interval);
    };
  }, []);

  const fontStyles = {
    fontFamily: fontFamilies[fontIndex]
  };

  if (isLoading) {
    return <div style={fontStyles} className="preloader">Artifex</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="project" element={<Project />} />
          <Route path="school" element={<School />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
