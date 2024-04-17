// App.tsx
import React, { useEffect, useState } from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./presentation/pages";
import { Preloader } from "./presentation/components";
import { Contact } from "./presentation/pages/contact/contact";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading2, setIsLoading2] = useState(true);
 

  useEffect(() => {
    // Simulação de carregamento assíncrono
    setTimeout(() => {
      setIsLoading(false); // Após o carregamento, define isLoading como false
    }, 5000);
    setTimeout(() => {
      setIsLoading2(false); // Após o carregamento, define isLoading como false
    }, 2000);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLoading ?<Preloader/> : <Home/>} />
        <Route path="/contact" element={isLoading2 ? <Preloader/> : <Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
