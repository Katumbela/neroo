/* eslint-disable react-hooks/rules-of-hooks */
//import { useTranslation } from "react-i18next";

import {
  Companies,
  Expertise,
  FloatingBalls,
  Hero,
  NavBar,
  Why,
} from "../../components";

export function home() {
  //const { t } = useTranslation();

  return (
    <div className="container relative">
      <FloatingBalls />
      <NavBar />
      <Hero />
      <Companies />
      <Expertise />
      <Why />
    </div>
  );
}
