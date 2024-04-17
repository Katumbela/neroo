/* eslint-disable react-hooks/rules-of-hooks */
//import { useTranslation } from "react-i18next";

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
import CookieConsent from "react-cookie-consent";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";

export function Home() {
  document.title = "Welcome | Neroo ";
  
  const { t } = useTranslation();

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
      <NewsLetter />
      <Footer />
      <CookieConsent
        location="bottom"
        buttonText="OK"
        cookieName="NerooEducacaoAngola"
        style={{ background: "#2B373B" }}
        contentClasses="container"
        buttonStyle={{background: "#E02200", color: "#fff", fontSize: "13px" }}
        expires={10}
        onAccept={() => {
         
          Cookies.set("theme", "dark", { expires: 365 }); // Tema escuro
          Cookies.set("userBehavior", "data", { expires: 365 }); // Dados de comportamento do usuário
      
          // Marcar o aviso de cookie como aceito
          Cookies.set("cookieAccepted", "true", { expires: 365 });
      
        }}
      >
        {t("cookieText")}
       
      </CookieConsent>
    </div>
  );
}
