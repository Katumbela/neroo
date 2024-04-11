import { motion } from "framer-motion";
import bgHero from "../../../assets/bg/bg-hero.png";
import { useTranslation } from "react-i18next";
import { Overlay } from "../overlay/overlay";

export function Hero() {
  const { t } = useTranslation();

  return (
    <div className="h-[655px] grid items-center xl:h-[720px]">
      <div className="flex">
        <motion.div className="grid items-center w-full">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-4xl font-semibold text-white xl:text-6xl 2xl:text-7xl"
            >
              {t("titleHero")}
            </motion.h1>
            <br />
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl text-secondary 2xl:text-4xl"
            >
              {t("descHero")}
            </motion.p>
            <br />
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="mt-4 click btn-neroo-lg"
            >
              {t("buttonHeroText")}
            </motion.button>
          </div>
        </motion.div>
        <motion.div className="relative w-full">
          <Overlay />
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            src={bgHero}
            className="w-[100%] rounded-[50px]"
          />
        </motion.div>
        <motion.div></motion.div>
      </div>
    </div>
  );
}
