import React from "react";
import { motion } from "framer-motion";
import { regularIcons } from "../../../utils/imagesExporter";
import { useTranslation } from "react-i18next";

export function Expertise() {
  const { t } = useTranslation();

  return (
    <motion.div
      id="services"
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      whileInView={{ opacity: 1, transition: { staggerDirection: 0.3 } }}
    >
      <div className="flex flex-col-reverse gap-6 md:flex-row">
        <div className="grid w-full grid-cols-2 gap-4">
          <motion.div
            transition={{ duration: 0.1 }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="card-expertise"
          >
            <img
              src={regularIcons.search}
              className="h-[3em] md:h-[4em]"
              alt=""
            />
            <h2 className="text-card-expertise">{t("expertise.seo")}</h2>
          </motion.div>
          <motion.div
            transition={{ duration: 0.2, delay: 0.1 }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="card-expertise"
          >
            <img src={regularIcons.web} className="h-[3em] md:h-[4em]" alt="" />
            <h2 className="text-card-expertise ">
              {t("expertise.websiteDesign")}
            </h2>
          </motion.div>
          <motion.div
            transition={{ duration: 0.3, delay: 0.2 }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="card-expertise"
          >
            <img
              src={regularIcons.email}
              className="h-[3em] md:h-[4em]"
              alt=""
            />
            <h2 className="text-card-expertise">
              {t("expertise.videoEditing")}
            </h2>
          </motion.div>
          <motion.div
            transition={{ duration: 0.4, delay: 0.3 }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="card-expertise"
          >
            <img
              src={regularIcons.content}
              className="h-[3em] md:h-[4em]"
              alt=""
            />
            <h2 className="text-card-expertise">
              {t("expertise.contentWriting")}
            </h2>
          </motion.div>
        </div>
        <div className="w-full md:grid md:grid-rows-2">
          <motion.div
            transition={{ duration: 0.4, delay: 0.3 }}
            initial={{ opacity: 0.1, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="w-full px-2 mx-auto text-center md:text-start"
          >
            <h1 className="text-3xl font-bold text-white md:font-bold lg:text-6xl">
              {t("expertise.pageTitle")}
            </h1>
            <p className="mt-6 mb-14 md:mb-1 text-md 2xl:text-xl text-secondary">
              {t("expertise.description")}
            </p>
          </motion.div>
          <div className="flex gap-4">
            <motion.div
              transition={{ duration: 0.4, delay: 0.2 }}
              initial={{ opacity: 0.1, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="card-expertise"
            >
              <img src={regularIcons.social} className="h-[4em]" alt="" />
              <h2 className="text-card-expertise">
                {t("expertise.socialMediaMarketing")}
              </h2>
            </motion.div>
            <motion.div
              transition={{ duration: 0.4, delay: 0.3 }}
              initial={{ opacity: 0.1, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="card-expertise"
            >
              <img src={regularIcons.pay} className="h-[4em]" alt="" />
              <h2 className="text-card-expertise">
                {t("expertise.payPerClick")}
              </h2>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
