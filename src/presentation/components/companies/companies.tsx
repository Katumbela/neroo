import { marcas } from "../../../utils/imagesExporter";
import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";

export function Companies() {
  const { t } = useTranslation();

  return (
    <motion.div
      className="py-6 pt-24 mb-8 sm:pt-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex flex-col gap-6 sm:flex-row">
        <h1 className="my-auto text-3xl font-semibold text-white lg:text-4xl">
          {t("companiesTitle")}
        </h1>
        <div className="bg-secondary hidden sm:flex h-[2rem] my-auto w-[1px]"></div>
        <p className="my-auto font-semibold text-secondary">
          {t("companiesSubTitle")}
        </p>
      </div>
      <br />
      <motion.div className="grid grid-cols-2 gap-3 sm:flex-wrap sm:flex md:flex-nowrap">
        <motion.div
          className="card-company"
          initial={{ opacity: 0, y: 50 }} // Define a posição inicial fora da viewport
          transition={{ duration: 0.5 }} // Duração da animação
          animate={{ opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }} // Animar quando estiver visível, com um atraso entre os elementos
        >
          <img src={marcas.marca1} alt="" />
        </motion.div>
        <motion.div
          className="card-company"
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.2 }} // Atraso de 0.2s em relação ao primeiro elemento
          animate={{
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2, delayChildren: 0.2 },
          }} // Atraso de 0.2s entre os elementos
        >
          <img src={marcas.marca2} alt="" />
        </motion.div>
        <motion.div
          className="card-company"
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.4 }} // Atraso de 0.4s em relação ao primeiro elemento
          animate={{
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2, delayChildren: 0.4 },
          }} // Atraso de 0.4s entre os elementos
        >
          <img src={marcas.marca3} alt="" />
        </motion.div>

        {/*
          
          <motion.div
          className="card-company"
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.6 }} // Atraso de 0.6s em relação ao primeiro elemento
         
         animate={{
            opacity: 1,  y: 0 ,
            transition: { staggerChildren: 0.2, delayChildren: 0.6 },
          }} // Atraso de 0.6s entre os elementos
        >
          <img src={marcas.nyt} alt="" />
        </motion.div>
          */}
      </motion.div>
    </motion.div>
  );
}
