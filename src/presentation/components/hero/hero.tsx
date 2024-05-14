import React from "react";
import { motion } from "framer-motion";
import bgHero from "../../../assets/bg/bg-hero.png";
import { useTranslation } from "react-i18next";
import { Overlay } from "../overlay/overlay";
import { FaArrowRight } from "react-icons/fa";

export function Hero() {
  const { t } = useTranslation();

  return (
    <div className="h-[600px] md:flex mb-[6rem] md:mb-[.5rem] grid items-center 2xl:h-[820px]">
      <div className="flex flex-col items-center w-full md:items-start">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mx-3 text-4xl font-bold text-center text-white md:font-semibold sm:text-3xl md:text-start md:mx-0 md:text-4xl lg:text-6xl 2xl:text-7xl"
        >
          {t("hero.titleHero")}
        </motion.h1>
        <br />
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-xl text-center md:text-start text-secondary md:text-2xl lg:text-3xl 2xl:text-4xl"
        >
          {t("hero.descHero")}
        </motion.p>
        <br />
        <div className="flex gap-4">
          <motion.a
            href="/contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="mt-4 click btn-neroo-lg"
          >
            {t("hero.buttonHeroText")}
          </motion.a>

          <motion.a
            href="/portfolio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="flex gap-2 mt-4 click btn-neroo-lg"
          >
            {t("hero.portfolio")}{" "}
            <FaArrowRight className="my-auto arrow-anim" />
          </motion.a>
        </div>
      </div>
      <div className="relative w-full mt-8 md:mt-0">
        <Overlay />
        <motion.img
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          src={bgHero}
          className="w-full -z-10 md:w-auto rounded-[50px]"
          alt="Hero Background"
        />
      </div>
    </div>
  );
}
