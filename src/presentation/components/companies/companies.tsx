import { brands } from "../../../utils/imagesExporter";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export function Companies() {
  const { t } = useTranslation();

  return (
    <motion.div
      className="py-6 mb-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex gap-6">
        <h1 className="my-auto text-3xl font-semibold text-white lg:text-4xl">
          {t("companiesTitle")}
        </h1>
        <div className="bg-secondary h-[2rem] my-auto w-[1px]"></div>
        <p className="my-auto font-semibold text-secondary">
          {t("companiesSubTitle")}
        </p>
      </div>
      <br />
      <motion.div className="flex flex-wrap gap-3 md:flex-nowrap">
        <motion.div
          className="card-company"
          initial={{ opacity: 0, y: 50 }} // Define a posição inicial fora da viewport
            transition={{ duration: 0.5 }} // Duração da animação
        
          whileInView={{ opacity: 1,   y: 0, transition: { staggerChildren: 0.2 } }} // Animar quando estiver visível, com um atraso entre os elementos
        >
          <img src={brands.allianz} alt="" />
        </motion.div>
        <motion.div
          className="card-company"
          initial={{ opacity: 0, y: 50 }}
          
          transition={{ duration: 0.5, delay: 0.2 }} // Atraso de 0.2s em relação ao primeiro elemento
        
          whileInView={{
            opacity: 1,   y: 0,
            transition: { staggerChildren: 0.2, delayChildren: 0.2 },
          }} // Atraso de 0.2s entre os elementos
        >
          <img src={brands.chase} alt="" />
        </motion.div>
        <motion.div
          className="card-company"
          initial={{ opacity: 0, y: 50 }}
           transition={{ duration: 0.5, delay: 0.4 }} // Atraso de 0.4s em relação ao primeiro elemento
          whileInView={{
            opacity: 1,  y: 0, 
            transition: { staggerChildren: 0.2, delayChildren: 0.4 },
          }} // Atraso de 0.4s entre os elementos
        >
          <img src={brands.linkedin} alt="" />
        </motion.div>
        <motion.div
          className="card-company"
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.6 }} // Atraso de 0.6s em relação ao primeiro elemento
         
         whileInView={{
            opacity: 1,  y: 0 ,
            transition: { staggerChildren: 0.2, delayChildren: 0.6 },
          }} // Atraso de 0.6s entre os elementos
        >
          <img src={brands.nyt} alt="" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
