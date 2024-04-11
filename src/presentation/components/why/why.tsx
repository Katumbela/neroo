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
          <motion.div className="relative w-full">
            <Overlay />
            <motion.img
              initial={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              whileInView={{ opacity: 1, scale: 1 }}
              src={bg.bgSection}
              className="w-full"
              alt=""
            />
          </motion.div>
          <motion.div className="w-[89%]">
            <motion.h1 className="text-3xl font-semibold text-white lg:text-6xl 2xl:text-7xl ">
            {t("why.title")}
            </motion.h1>
            <motion.p className="mt-6 text-lg text-secondary">
            {t("why.description")}
            </motion.p>
            <motion.button className="mt-6 btn-neroo-lg">
              {t("contactText")}
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
