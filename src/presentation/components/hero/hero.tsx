import { motion } from "framer-motion";
import bgHero from "../../../assets/bg/bg-hero.png";
import { useTranslation } from "react-i18next";
import { Overlay } from "../overlay/overlay";
import { Link } from "react-router-dom";

export function Hero() {
  const { t } = useTranslation();

  return (
    <div className="h-[600px] md:flex mb-[6rem] md:mb-[.5rem] grid items-center 2xl:h-[820px]">
      <div className="flex w-full flex-col md:items-start items-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-3xl text-center md:text-start mx-3 md:mx-0 font-semibold text-white md:text-4xl lg:text-6xl 2xl:text-7xl"
        >
          {t("titleHero")}
        </motion.h1>
        <br />
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-xl md:text-start text-secondary md:text-2xl lg:text-3xl 2xl:text-4xl text-center"
        >
          {t("descHero")}
        </motion.p>
        <br />
        <Link to='/contact'>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="mt-4 click btn-neroo-lg"
          >
            {t("buttonHeroText")}
          </motion.button>
        </Link>
      </div>
      <div className="relative w-full mt-8 md:mt-0">
        <Overlay />
        <motion.img
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          src={bgHero}
          className="w-full md:w-auto rounded-[50px]"
          alt="Hero Background"
        />
      </div>
    </div>
  );
}
