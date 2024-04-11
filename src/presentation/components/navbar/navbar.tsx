/* eslint-disable react-hooks/rules-of-hooks */
import { useTranslation } from "react-i18next";
import logo from "../../../assets/imgs/logo design 1.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

export function NavBar() {
  const { t } = useTranslation();

  return (
    <>
      <motion.div
        className="z-50 flex justify-between py-5"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link to={'/'} className="my-auto">
          <motion.img src={logo} />
        </Link>
        <div className="flex gap-6 my-auto">
          <motion.a
            variants={containerVariants}
            initial="hidden"
            className="text-white hover-anim"
            animate="visible"
          >
            {t("aboutPageTitle")}
          </motion.a>
          <motion.a
            variants={containerVariants}
            initial="hidden"
            className="text-white hover-anim"
            animate="visible"
          >
            {t("servicesPageTitle")}
          </motion.a>
          <motion.a
            variants={containerVariants}
            initial="hidden"
            className="text-white hover-anim"
            animate="visible"
          >
            {t("latestWorksPageTitle")}
          </motion.a>
          <motion.a
            variants={containerVariants}
            initial="hidden"
            className="text-white hover-anim"
            animate="visible"
          >
            {t("testimonialsPageTitle")}
          </motion.a>
        </div>
        <div className="flex">
          <Link to={'/contact'} className="px-5 py-2 font-semibold bg-primary rounded-[80px] hover:bg-primary/90 click">
            {t("contactPageTitle")}
          </Link>
        </div>
      </motion.div>
    </>
  );
}
