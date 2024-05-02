//import { useTranslation } from "react-i18next";
//import { useTranslation } from "react-i18next";

import { mamadu, sergest } from "../../../utils/imagesExporter";
import {
  FloatingBalls,
  LinePrimary,
  NavBar,
  NewsLetter,
  Overlay,
} from "../../components";
import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";
import { Footer } from "../../components/footer/footer";
import React from "react";

export function PortFolio() {
  const { t } = useTranslation();
  document.title = t("portfolio.title") + " | Neroo ";
 
  return (
    <div className="container">
      <FloatingBalls />
      <NavBar />
      <div className="py-8 bgCover">
        <div className="mx-auto text-center md:w-6/12">
          <h1 className="text-6xl text-white poppins-extrabold">
            {t("portfolio.title")}
          </h1>
          <p className="text-xl text-center text-white 2xl:text-3xl md:text-xl">
            {" "}
            {t("portfolio.desc")}
          </p>
          <br />
          <motion.a
            href="/contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="mt-4 click btn-neroo-lg"
          >
            {t("hero.buttonHeroText")}
          </motion.a>
        </div>
      </div>
      <br />
      <div className="container">
        <LinePrimary />
        <br />
        <br />

        <div className="">
          <div className="text-center md:text-start">
            <h1 className="text-2xl text-white poppins-bold">
              {t("portfolio.mamadu.t")}
            </h1>
            <p className="text-white md:w-6/12">{t("portfolio.mamadu.desc")}</p>
          </div>
          <br />
          <div className="relative flex flex-col gap-5 sm:gap-3 sm:flex-row">
            <Overlay />
            <div>
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                src={mamadu.m1}
                className="w-[95%]"
                alt=""
              />
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-1">
              <motion.img
                src={mamadu.m2}
                initial={{ opacity: 0, y: -60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.3 }}
                className="sm:w-[95%]"
                alt=""
              />
              <motion.img
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.3 }}
                src={mamadu.m3}
                className="sm:w-[95%]"
                alt=""
              />
              <motion.img
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.3 }}
                src={mamadu.m4}
                className="sm:w-[95%]"
                alt=""
              />
              <motion.img
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                src={mamadu.m5}
                className="sm:w-[95%]"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="">
        <div className="text-center md:text-start">
          <h1 className="text-2xl text-white poppins-bold">
            {t("portfolio.sergest.t")}
          </h1>
          <p className="text-white md:w-6/12">{t("portfolio.sergest.desc")}</p>
        </div>
        <br />
        <div className="relative flex">
          <Overlay />
          <div>
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              src={sergest.s1}
              alt=""
              className="w-[95%]"
            />
          </div>
          <div className="grid gap-5 my-auto">
            <motion.img
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 0.3 }}
              src={sergest.s2}
              className="w-[95%]"
              alt=""
            />{" "}
            <motion.img
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 0.6 }}
              src={sergest.s3}
              className="w-[95%]"
              alt=""
            />
          </div>
        </div>
      </div>
      <br />
      <br />
      <NewsLetter />
      <br />
      <Footer />
    </div>
  );
}
