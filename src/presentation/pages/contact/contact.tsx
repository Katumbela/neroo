/* eslint-disable react-hooks/rules-of-hooks */
//import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";
import { FloatingBalls, Input, NavBar, TextArea } from "../../components";
import { FaBuilding, FaEnvelope, FaRegEdit, FaUser } from "react-icons/fa";

import { BsSend } from "react-icons/bs";
import { useTranslation } from "react-i18next";

export function Contact() {
  document.title = "Contact us | Neroo ";
  const { t } = useTranslation();

  return (
    <div className="container relative">
      <FloatingBalls />
      <NavBar />
      <div className="flex items-center justify-center py-12 border-b-2 border-primary ">
        <h1 className="text-4xl font-bold text-white lg:text-5xl ">
          {t("contact.title")}
        </h1>
      </div>
      <br />
      <br />
      <div className="container flex flex-col gap-10 md:flex-row">
        <motion.div className="w-full">
          <motion.h1 className="text-4xl font-bold text-white lg:text-6xl 2xl:text-[5.5rem]">
            Have You Got A Project You’d Like to Discuss With Us?
          </motion.h1>
          <motion.p className="mt-6 text-2xl text-secondary 2xl:text-4xl lg:text-3xl ">
            We’re excited to hear more, just give us your email and phone number
            and we will be in touch with a short questionnaire to help us
            discuss your project in more detail.
          </motion.p>
        </motion.div>
        <motion.div className="grid items-center px-12 w-[50%]">
          <div className="my-auto">
            {" "}
            <h1 className="text-xl font-semibold text-white">
              {t("contact.fill")}
            </h1>
            <br />
            <div className="flex flex-col gap-4 md:flex-row">
              <Input placeholder={t("contact.form.name")} icon={FaUser} />
              <Input
                placeholder={t("contact.form.company")}
                icon={FaBuilding}
              />
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <Input placeholder={t("contact.form.email")} icon={FaEnvelope} />
              <Input placeholder={t("contact.form.subject")} icon={FaRegEdit} />
              <TextArea placeholder={t("contact.form.description")} />
            </div>
            <div className="mt-8 btns">
              <button className="flex mx-auto click md:mx-0 btn-neroo-lg">
                {t("contact.sendBtn")} <BsSend className="my-auto ms-2" />{" "}
              </button>
            </div>
          </div>
        </motion.div>

        {/*
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.5163641896615!2d13.218730173594784!3d-8.831421791222194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f3d69070f571%3A0x266c370a2a207937!2sRCS%20Angola!5e0!3m2!1spt-PT!2sao!4v1713255734568!5m2!1spt-PT!2sao"
          width="600"
          height="450"
          loading="lazy"
          className="w-full shadow-inner shadow-red-500 rounded-xl"
        ></iframe>
        */}
      </div>
      <br />
      <br />
      <br />
      <br /> 
    </div>
  );
}
