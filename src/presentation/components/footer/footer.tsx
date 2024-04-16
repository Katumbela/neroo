import { motion } from "framer-motion";
import { bg, regularIcons } from "../../../utils/imagesExporter";
import { useTranslation } from "react-i18next";
import { Overlay } from "../overlay/overlay";
import { FaWhatsapp } from "react-icons/fa";

export function Footer() {
  const { t } = useTranslation();

  return (
    <div className="mt-12 md:mt-24 lg:mt-32">
      <motion.a target="__blank"
        initial={{ opacity: 0, y: 60 }}
        transition={{ duration: 0.3, delay: 0.6 }}
        animate={{ opacity: 1, y: 0 }}
        href="https://wa.me/+244928134249"
        className="fixed z-50 p-3 text-4xl border-2 rounded-full border-white/50 hover:text-white hover:border-white hover:bg-green-600 text-white/50 bg-green-600/50 bottom-10 click right-3"
      >
        {" "}
        <FaWhatsapp />{" "}
      </motion.a>

      <div className="flex flex-col items-center md:flex-row">
        <motion.div className="grid items-center w-full mb-8 md:w-auto md:mb-0">
          <div className="text-center md:text-start">
            <motion.h1
              initial={{ y: 80, opacity: 0 }}
              transition={{ duration: 0.3 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-white md:text-5xl lg:text-6xl 2xl:text-7xl "
            >
              {t("footer.title")}
            </motion.h1>
            <motion.p
              initial={{ y: 80, opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mt-4 text-base md:mt-6 md:text-xl lg:text-2xl text-secondary 2xl:text-3xl"
            >
              {t("footer.description")}
            </motion.p>
            <motion.div className="flex md:mb-[2rem] justify-center md:justify-start flex-col md:flex-row gap-4 mt-6 md:mt-10">
              <button className="click btn-neroo-lg">{t("contactText")}</button>{" "}
              <span className="hidden my-auto text-white md:inline-block">
                Or
              </span>{" "}
              <a
                href="tel:+351976234342"
                className="flex items-center justify-center gap-3 mt-2 text-white md:justify-start md:mt-0 click"
              >
                <img
                  className="w-6 h-6"
                  src={regularIcons.Telephone}
                  alt="Telephone Icon"
                />{" "}
                <span>+351 976 234 342</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 90, opacity: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="w-full md:-mb-9 md:w-[70%] relative"
        >
          <Overlay />
          <img
            src={bg.bgMarketing}
            alt="Marketing Background"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
}
