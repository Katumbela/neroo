/* eslint-disable react-hooks/rules-of-hooks */
//import { useTranslation } from "react-i18next";

import React from "react";
import {
  Companies,
  Expertise,
  FloatingBalls,
  Hero,
  LatestWorks,
  NavBar,
  NewsLetter,
  Testimonials,
  Why,
} from "../../components";
import { Footer } from "../../components/footer/footer"; 


export function Home() {
  document.title = "Welcome | Neroo ";
  

  return (
    <div className="container relative">
      <FloatingBalls />
      <NavBar />
      <Hero />
      <Expertise />
      <Why />
      <Companies />
      <LatestWorks />
      <Testimonials />
      <NewsLetter />
      <Footer />

      {
        /*
        
        
        */
      }
    </div>
  );
}
