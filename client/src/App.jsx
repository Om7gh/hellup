import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  AppIntro,
  Doctors,
  Footer,
  News,
  Questions,
  Services,
  WhyUs,
} from "./pages";
import WebFont from "webfontloader";
import { Navigation, Search } from "./components";

const App = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Asap"],
      },
    });
  }, []);
  return (
    <Router>
      <Home />
      <Services />
      <WhyUs />
      <AppIntro />
      <Doctors />
      <Questions />
      <News />
      <Footer />
    </Router>
  );
};

export default App;
