import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { mamadu, sergest } from "../../../utils/imagesExporter";
import { abbreviateText } from "../../../utils/abreviate";
import { Section } from "../section/section";

export function LatestWorks() {
  const { t } = useTranslation();

  const dummyCards = [
    {
      id: 1,
      img: mamadu.m1,
      title: t("portfolio.mamadu.t"),
      description: t("portfolio.sergest.desc"),
    },
    {
      id: 2,
      img: sergest.s1,
      title: t("portfolio.sergest.t"),
      description: t("portfolio.sergest.desc"),
    },
  ];

  return (
    <motion.div
      id="works"
      className="px-2 my-8 m0d:px- md:my-16 lg:my-24"
      initial={{ y: 70 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-2xl font-semibold text-white md:text-3xl lg:text-5xl">
        {t("latestWorks.title")}
      </h1>
      <br />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {dummyCards.map((card) => (
          <Section key={card.id}>
            <motion.div
              className="relative mt-[2rem] overflow-hidden"
              whileHover={{ scale: 1.02 }}
              initial={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="h-[250px] md:h-[320px] "
                style={{
                  background: `url('${card.img}')`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <motion.div className="absolute inset-0 flex justify-center transition-opacity duration-300 opacity-0 bg-opacity-20 bg-primary rounded-xl hover:opacity-100">
                {/*
              <button className="btn-view">
                <span className=""> {t("latestWorks.viewProject")}</span>
              </button>
              */}
              </motion.div>
              <div className="py-4">
                <h2 className="text-xl font-semibold text-white md:text-2xl">
                  {card.title}
                </h2>
                <p className="text-sm md:text-md text-secondary">
                  {abbreviateText(card.description, 90)}
                </p>
              </div>
            </motion.div>
          </Section>
        ))}
      </div>
    </motion.div>
  );
}
