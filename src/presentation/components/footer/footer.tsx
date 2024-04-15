import { motion } from "framer-motion";
import { bg, regularIcons } from "../../../utils/imagesExporter";
import { useTranslation } from "react-i18next";
import { Overlay } from "../overlay/overlay";

export function Footer() {
  const { t } = useTranslation();

  return (
    <div className="mt-12 md:mt-24 lg:mt-32">
      <div className="flex flex-col md:flex-row items-center">
        <motion.div className="grid items-center w-full md:w-auto mb-8 md:mb-0">
          <div className="text-center md:text-start">
            <motion.h1 initial={{ y: 80, opacity: 0 }} transition={{ duration: .3 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl font-bold text-white md:text-5xl lg:text-6xl 2xl:text-7xl ">
              Creative Digital Marketing Agency
            </motion.h1>
            <motion.p initial={{ y: 80, opacity: 0 }} transition={{ duration: .2, delay: .2 }} whileInView={{ opacity: 1, y: 0 }} className="mt-4 md:mt-6 text-base md:text-xl lg:text-2xl text-secondary 2xl:text-3xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda ducimus alias est natus nisi deserunt eligendi
              laudantium explicabo, voluptatum quo neque minus, sunt quia rem
              deleniti illo, sed quibusdam in!
            </motion.p>
            <motion.div className="flex md:mb-[2rem] justify-center md:justify-start flex-col md:flex-row gap-4 mt-6 md:mt-10">
              <button className="click btn-neroo-lg">{t("contactText")}</button>{" "}
              <span className="text-white hidden my-auto md:inline-block">Or</span>{" "}
              <a href="tel:+351976234342" className="flex items-center md:justify-start justify-center gap-3 mt-2 md:mt-0 text-white click">
                <img className="w-6 h-6" src={regularIcons.Telephone} alt="Telephone Icon" />{" "}
                <span>+351 976 234 342</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
        <motion.div initial={{ y: 90, opacity: 0 }} transition={{ duration: 1, delay: .4 }} whileInView={{ opacity: 1, y: 0 }} className="w-full md:w-[70%] relative">
          <Overlay />
          <img src={bg.bgMarketing} alt="Marketing Background" className="w-full h-auto" />
        </motion.div>
      </div>
    </div>
  );
}
