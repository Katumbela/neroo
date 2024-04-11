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
      className="my-[0%]"
      initial={{ y: 70 }}
      transition={{ duration: 0.6 }}
      whileInView={{ y: 0 }}
    >
      <h1 className="text-3xl font-semibold text-white lg:text-5xl">
        {t("latestWorks.title")}
      </h1>
      <br />
      <div className="grid grid-cols-3 gap-4">
        {dummyCards.map((card) => (
          <motion.div
            key={card.id}
            className="relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            initial={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="h-[250px] 2xl:h-[320px] bg-cover"
              style={{
                background: `url('${card.img}')`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            ></div>
            <motion.div className="absolute inset-0 flex justify-center transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
              <button className="px-7 click py-2 h-[3rem] mt-[6.5rem] 2xl:mt-[8rem] text-xl font-semibold text-white border border-white rounded-[80px] bg-primary">
                {t("latestWorks.viewProject")}
              </button>
            </motion.div>
            <div className="py-4">
              <h2 className="text-3xl font-semibold text-white ">
                {card.title}
              </h2>
              <p className="text-md text-secondary">
                {abbreviateText(card.description, 90)}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
