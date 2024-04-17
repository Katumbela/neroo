//import { useTranslation } from "react-i18next";

import { abbreviateText } from "../../../utils/abreviate";
import { cardImages } from "../../../utils/imagesExporter";
import { BgCover, FloatingBalls, LinePrimary, NavBar } from "../../components";
import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";
import { Footer } from "../../components/footer/footer";

export function PortFolio() {
  const { t } = useTranslation();
  document.title = "Contact us | Neroo ";

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
    {
      id: 4,
      img: cardImages.cardImg1,
      title: t("dummyCard.third.title"),
      description: t("dummyCard.third.description"),
    },
    {
      id: 5,
      img: cardImages.cardImg2,
      title: t("dummyCard.third.title"),
      description: t("dummyCard.third.description"),
    },
    {
      id: 6,
      img: cardImages.cardImg3,
      title: t("dummyCard.third.title"),
      description: t("dummyCard.third.description"),
    },
  ];

  return (
    <div className="container">
      <FloatingBalls />
      <NavBar />
      <BgCover />
      <br />
      <div className="container">
        <h1 className="text-4xl font-semibold text-center text-white md:mt-10 2xl:text-6xl 2xl:font-bold">
          {t("portfolio.title")}
        </h1>
        <p className="text-xl text-center text-white 2xl:text-3xl md:text-2xl">
          {" "}
          {t("portfolio.desc")}
        </p>
        <LinePrimary />
        <br />
        <br />
        <div className="grid grid-cols-1 gap-4 2xl:gap-8 md:grid-cols-2 lg:grid-cols-2">
          {dummyCards.map((card) => (
            <motion.div
              key={card.id}
              className="relative mt-[2rem] overflow-hidden"
              whileHover={{ scale: 1.02 }}
              initial={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="h-[250px] md:h-[320px 2xl:h-[500px] bg-cover"
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
      </div>
      <br />
      <br />
      <LinePrimary />
      <br />

      <Footer />
    </div>
  );
}
