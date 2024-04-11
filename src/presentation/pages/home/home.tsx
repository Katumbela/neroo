/* eslint-disable react-hooks/rules-of-hooks */
//import { useTranslation } from "react-i18next";

import {
  Companies,
  Expertise,
  FloatingBalls,
  Hero,
  LatestWorks,
  NavBar,
  Testimonials,
  Why,
} from "../../components";
import { Footer } from "../../components/footer/footer";

export function home() {

  return (
    <div className="container relative">
      <FloatingBalls />
      <NavBar />
      <Hero />
      <Companies />
      <Expertise />
      <Why />
      <LatestWorks />
      <Testimonials />
      <Footer />
    </div>
  );
}
