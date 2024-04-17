import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { cardImages } from "../../../utils/imagesExporter";
import { abbreviateText } from "../../../utils/abreviate";

export function LatestWorks() {
  const { t } = useTranslation();

  const dummyCards = [
    {
      id: 1,
      img: cardImages.cardImg1,
      title: t("dummyCard.first.title"),
      description: t("dummyCard.first.description"),
    },
    {
      id: 2,
      img: cardImages.cardImg2,
      title: t("dummyCard.second.title"),
      description: t("dummyCard.second.description"),
    },
    {
      id: 3,
      img: cardImages.cardImg3,
      title: t("dummyCard.third.title"),
      description: t("dummyCard.third.description"),
    },
  ];

  return (
    <motion.div
      className="px-2 my-8 m0d:px- md:my-16 lg:my-24"
      initial={{ y: 70 }}
      transition={{ duration: 0.6 }}
      whileInView={{ y: 0 }}
    >
      <h1 className="text-2xl font-semibold text-white md:text-3xl lg:text-5xl">
        {t("latestWorks.title")}
      </h1>
      <br />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {dummyCards.map((card) => (
          <motion.div
            key={card.id}
            className="relative mt-[2rem] overflow-hidden"
            whileHover={{ scale: 1.02 }}
            initial={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="h-[250px] md:h-[320px] bg-cover"
              style={{
                background: `url('${card.img}')`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            ></div>
            <motion.div className="absolute inset-0 flex justify-center transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
              <button className="btn-view">
               <span className="-mt-2"> {t("latestWorks.viewProject")}</span>
              </button>
            </motion.div>
            <div className="py-4">
              <h2 className="text-xl font-semibold text-white md:text-2xl">
                {card.title}
              </h2>
              <p className="text-sm md:text-md text-secondary">
                {abbreviateText(card.description, 90)}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
