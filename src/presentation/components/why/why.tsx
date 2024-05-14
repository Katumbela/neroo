import React from "react";
import { motion } from "framer-motion";
import { bg } from "../../../utils/imagesExporter";
import { useTranslation } from "react-i18next";
import { Overlay } from "../overlay/overlay";
import { Section } from "../section/section";

export function Why() {
  const { t } = useTranslation();

  return (
    <div id="about" className="my-[10%] ">
      <motion.div>
        <div className="flex flex-col md:flex-row  my-[7rem] gap-8 h-[620px]">
          <motion.div className="relative flex justify-center w-full md:items-center md:grid">
            <Overlay />
            <motion.img
              src={bg.bgSection}
              className="w-full mx-auto my-auto"
              alt=""
            />
          </motion.div>
          <motion.div className="w-[89%] mx-auto md:mx-0 grid items-center">
            <Section>
              <div className="text-center md:text-start ">
                <motion.h1 className="text-3xl font-bold text-white md:font-semibold lg:text-6xl 2xl:text-7xl">
                  {t("why.title")}
                </motion.h1>
                <motion.p className="mt-6 text-lg text-secondary">
                  {t("why.description")}
                </motion.p>
                <br />
                <br />
                <motion.a
                  href="/contact"
                  className="mt-[3rem] click btn-neroo-lg"
                >
                  {t("contactText")}
                </motion.a>
              </div>
            </Section>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
