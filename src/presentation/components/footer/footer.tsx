import { motion } from "framer-motion";
import { bg, regularIcons } from "../../../utils/imagesExporter";
import { useTranslation } from "react-i18next";
import { BsTelephoneFill } from "react-icons/bs";
import { FaSatellite } from "react-icons/fa";
import { Overlay } from "../overlay/overlay";

export function Footer() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="flex mt-12">
        <motion.div className="grid items-center w-full">
          <div>
            <motion.h1 initial={{y:80, opacity: 0}} transition={{duration: .3}} whileInView={{opacity: 1, y: 0}} className="text-5xl font-bold text-white lg:text-6xl 2xl:text-7xl ">
              Creative Digital Marketing Agency
            </motion.h1>
            <motion.p  initial={{y:80, opacity: 0}} transition={{duration: .2, delay: .2}} whileInView={{opacity: 1, y: 0}}  className="mt-6 text-xl lg:text-2xl text-secondary 2xl:text-3xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda ducimus alias est natus nisi deserunt eligendi
              laudantium explicabo, voluptatum quo neque minus, sunt quia rem
              deleniti illo, sed quibusdam in!
            </motion.p>
            <motion.div className="flex gap-8 ">
              <button className="mt-10 click btn-neroo-lg">{t("contactText")}</button>{" "}
              <button className="mt-10 text-white ">Or</button>{" "}
              <a className="flex gap-3 mt-10 text-white click ">
                <img className="my-auto" src={regularIcons.Telephone} />{" "}
                <span className="my-auto">+351 976 234 342</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
        <motion.div  initial={{ y:90, opacity: 0}} transition={{duration: 1, delay: .4}} whileInView={{opacity: 1, y:0 }}  className="w-[70%] relative">
            <Overlay />
          <img src={bg.bgMarketing} alt="" />
        </motion.div>
      </div>
    </div>
  );
}
