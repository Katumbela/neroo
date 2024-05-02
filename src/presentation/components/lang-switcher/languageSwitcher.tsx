import React from "react";
import { useEffect, useState } from "react";
import { BsGlobe2 } from "react-icons/bs";

export function LanguageSwitcher() {
  const [lang, setLang] = useState<string | null>(null); // Adicionando o tipo de união string | null
  const changeLanguage = (lng: string) => {
    localStorage.setItem("lang", lng);
    window.location.reload();
  };

  useEffect(() => {
    const lng = localStorage.getItem("lang");
    setLang(lng);
  }, []);

  return (
    <div className="w-[9rem] py-2 flex justify-center mx-auto mt-6 md:mx-0 rounded-full px-3 text-xl font-bold md:bg-transparent md:text-white bg-white">
      <button>
        <BsGlobe2 className="my-auto me-2" />
      </button>
      <button
        className={` ${
          lang == "en" ? " bg-primary   rounded-full text-white" : ""
        } px-3`}
        onClick={() => changeLanguage("en")}
      >
        EN
      </button>
      <button
        className={` ${
          lang == "pt" ? "bg-primary   rounded-full text-white" : " "
        } px-3`}
        onClick={() => changeLanguage("pt")}
      >
        PT
      </button>
    </div>
  );
}
