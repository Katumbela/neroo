import { motion } from "framer-motion";
import { bg } from "../../../utils/imagesExporter";
import { useTranslation } from "react-i18next";
import { Overlay } from "../overlay/overlay";

export function Why() {
  const { t } = useTranslation();

  return (
    <div className="my-[10%] ">
      <motion.div>
        <div className="flex gap-8 h-[620px]">
          <motion.div className="relative grid items-center w-full">
            <Overlay />
            <motion.img
              initial={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              whileInView={{ opacity: 1, scale: 1 }}
              src={bg.bgSection}
              className="w-full my-auto"
              alt=""
            />
          </motion.div>
          <motion.div
            initial={{ y: 70 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileInView={{ y: 0 }}
            className="w-[89%] grid items-center"
          >
            <div className="">
              <motion.h1 className="text-3xl font-semibold text-white lg:text-6xl 2xl:text-7xl ">
                {t("why.title")}
              </motion.h1>
              <motion.p className="mt-6 text-lg text-secondary">
                {t("why.description")}
              </motion.p>
              <motion.button className="mt-6 click btn-neroo-lg">
                {t("contactText")}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
