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
    <div className="flex flex-col md:flex-row">
      <div className="w-[9rem] py-2 pb-2 mt-2 flex justify-center md:pb-4 mx-auto  md:mx-0 rounded-full px-3 text-xl font-bold md:bg-transparent md:text-white bg-white">
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
      <span className="mt-3 text-xs text-white md:mt-5 md:text-sm">
        made by{" "}
        <a
          href="https://www.linkedin.com/in/joao-afonso-katumbela/"
          target="__blank"
          className="underline"
        >
          Katumbela
        </a>
      </span>
    </div>
  );
}
