// App.tsx
import React, { useEffect, useState } from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./presentation/pages";
import { Preloader } from "./presentation/components";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulação de carregamento assíncrono
    setTimeout(() => {
      setIsLoading(false); // Após o carregamento, define isLoading como false
    }, 5000);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={isLoading ? Preloader : Home} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
