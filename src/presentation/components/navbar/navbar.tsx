import { useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../../../assets/imgs/logo design 1.jpg";
import logoSM from "../../../assets/imgs/neroo (1).jpeg";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function NavBar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <motion.div
        className="z-50 justify-between hidden py-5 md:flex"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link to={"/"} className="my-auto">
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
          <Link
            to={"/contact"}
            className="px-5 py-2 font-semibold bg-primary rounded-[80px] hover:bg-primary/90 click"
          >
            {t("contactPageTitle")}
          </Link>
        </div>
      </motion.div>

      <div className="relative md:hidden">
        <motion.div
          className="fixed top-0 left-0 z-50 w-full h-full opacity-50 h-"
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          onClick={toggleMenu}
        ></motion.div>
        <motion.div
          className="z-50 flex flex-col justify-between h-full py-5 bg-gray-800 md:bg-transparent md:relative"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -50 }}
          transition={{ duration: 0.5 }}
        >
          <Link to={"/"} className="hidden my-auto md:block">
            <motion.img src={logo} />
          </Link>
          <div
            className={`flex fixed flex-col gap-6 my-auto md:flex-row md:gap-6 ${
              isOpen
                ? "py-[3rem] px-7 visible h-screen fixed -top-1 left-0 -bottom-1 right-0 bg-black z-10"
                : "hidden"
            }`}
          >
            <div className="flex justify-between">
              <img
                src={logoSM}
                className="w-[4em] h-[4em] rounded-full"
                alt=""
              />
              <button
                onClick={toggleMenu}
                className="text-4xl text-white -mt-7 hover-anim"
              >
                <FaTimes />
              </button>
            </div>
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
            <NavLink
              to={"/contact"}
              className="px-5 z-80 py-2 mt-auto text-center font-semibold  md:block bg-primary rounded-[80px] hover:bg-primary/90 click"
            >
              {t("contactPageTitle")}
            </NavLink>
          </div>
        </motion.div>
      </div>
      <div className="flex justify-between mb-[3rem] -mt-4 px-2 md:hidden">
        <Link to={"/"} className="my-auto">
          <motion.img src={logo} />
        </Link>
        <button onClick={toggleMenu} className="text-white hover-anim">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
