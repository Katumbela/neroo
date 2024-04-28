import React from "react";
//import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";
import {
  FloatingBalls,
  Footer,
  Input,
  NavBar,
  NewsLetter,
  TextArea,
} from "../../components";
import {
  FaBuilding,
  FaEnvelope,
  FaRegEdit,
  FaSpinner,
  FaUser,
} from "react-icons/fa";

import { BsSend } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import axios from "axios";

export function Contact() {
  const { t } = useTranslation();
  document.title = "Contact us | Neroo ";
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    const url = "https://email-api-arotec-lilac.vercel.app/api/enviar-email";
    const dadosEmail = {
      to: "ja3328173@gmail.com",
      subject: "Novo contato via formulário de contato da Neroo",
      body: `
        Nome: ${name} <br>
        Empresa: ${company} <br>
        Email: ${email} <br>
        Assunto: ${subject} <br>
        Descrição: ${description} <br>
      `,
      email: "ja3328173@gmail.com",
      password: "pmjh fcjp wmrm fwmy",
      emailFrom: "neroo-newsletter@gokside.site",
      key: "Angola2020*",
    };

    try {
      const resposta = await axios.post(url, dadosEmail, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Email enviado com sucesso!", resposta);

      setLoading(false);
      setSent(true);
      // Limpar os campos após o envio
      setName("");
      setCompany("");
      setEmail("");
      setSubject("");
      setDescription("");
    } catch (erro) {
      console.error("Erro ao enviar email:", erro);

      setLoading(false);
    }
  };

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
      <div className="flex flex-col gap-10 md:flex-row">
        <motion.div className="w-full">
          <motion.h1 className="text-4xl font-bold text-white lg:text-6xl 2xl:text-[5.5rem]">
            {t("contact.subtitle")}
          </motion.h1>
          <motion.p className="mt-6 text-2xl text-secondary 2xl:text-4xl lg:text-3xl ">
          {t("contact.descForm")}
          </motion.p>
        </motion.div>
        <motion.div className="grid items-center md:px-12 md:w-[70%] 2xl:w-[85%]">
          <div className="my-auto ">
            <h1 className="text-xl font-semibold text-white">
              {t("contact.fill")}
            </h1>
            <br />

            {/* Inputs para nome, empresa, email, assunto e descrição */}
            <div className="flex flex-col gap-4 md:flex-row">
              <Input
                placeholder={t("contact.form.name")}
                value={name}
                onChange={(e) => setName(e)}
                icon={FaUser}
              />
              <Input
                placeholder={t("contact.form.company")}
                value={company}
                onChange={(e) => setCompany(e)}
                icon={FaBuilding}
              />
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <Input
                placeholder={t("contact.form.email")}
                value={email}
                onChange={(e) => setEmail(e)}
                icon={FaEnvelope}
              />
              <Input
                placeholder={t("contact.form.subject")}
                value={subject}
                onChange={(e) => setSubject(e)}
                icon={FaRegEdit}
              />
              <TextArea
                placeholder={t("contact.form.description")}
                value={description}
                onChange={(e) => setDescription(e)}
              />
            </div>
            {sent && (
              <>
                <div className="relative w-full p-4 mx-auto mt-2 text-sm text-green-800 bg-green-100 border border-green-600 rounded-lg 2xl:text-md">
                  <span
                    onClick={() => setSent(false)}
                    className="absolute top-0 cursor-pointer right-2"
                  >
                    &times;
                  </span>
                 {t("contact.info")}
                </div>
              </>
            )}
            <div className="mt-8 btns">
              <button
                onClick={handleSubmit}
                type="submit"
                className="flex mx-auto click md:mx-0 btn-neroo-lg"
                disabled={loading || email == "" || name == "" || company == ""}
              >
                {loading ? (
                  <span className="flex gap-2 text-white">
                    {" "}
                    <FaSpinner className="my-auto animate animate-spin" />{" "}
                    {t("contact.sending")}
                  </span>
                ) : (
                  <span> {t("contact.sendBtn")}</span>
                )}
                {loading ? " " : <BsSend className="my-auto ms-2" />}
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
      <NewsLetter /> 
      <Footer />
    </div>
  );
}
