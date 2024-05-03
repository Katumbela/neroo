// App.tsx
import React, { useEffect, useState } from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, NotFound, Contact, PortFolio } from "./presentation/pages";
import { Preloader } from "./presentation/components";
import CookieConsent from "react-cookie-consent";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading2, setIsLoading2] = useState(true);

  const { t } = useTranslation();

  // Configurando cookies úteis para SEO e desempenho

  useEffect(() => {
    // Simulação de carregamento assíncrono
    setTimeout(() => {
      setIsLoading(false); // Após o carregamento, define isLoading como false
    }, 3000);
    setTimeout(() => {
      setIsLoading2(false); // Após o carregamento, define isLoading como false
    }, 1800);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isLoading ? <Preloader /> : <Home />} />
          <Route
            path="/contact"
            element={isLoading2 ? <Preloader /> : <Contact />}
          />
          <Route
            path="/portfolio"
            element={isLoading2 ? <Preloader /> : <PortFolio />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      <CookieConsent
        location="bottom"
        buttonText="OK"
        cookieName="NerooEducacaoAngola"
        style={{ background: "#2B373B" }}
        contentClasses="container"
        buttonStyle={{ background: "#E02200", color: "#fff", fontSize: "13px" }}
        expires={10}
        onAccept={() => {
          Cookies.set("theme", "dark", { expires: 3 }); // Tema escuro
          Cookies.set("userBehavior", "data", { expires: 2 }); // Dados de comportamento do usuário

          // Marcar o aviso de cookie como aceito
          Cookies.set("cookieAccepted", "true", { expires: 2 });
        }}
      >
        {t("cookieText")}
      </CookieConsent>
    </>
  );
};

export default App;
