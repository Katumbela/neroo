import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { BsSend } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { LinePrimary } from "../line/line";
import axios from "axios";
import { CgSpinner } from "react-icons/cg";

export function NewsLetter() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  /*
  const handleSubmitt = async () => {
    setLoading(true);

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "ja3328173@gmail.com",
        pass: "pmjh fcjp wmrm fwmy",
      },
    });

    const mailOptions = {
      from: "neroo-newsletter@gokside.site",
      to: "ja3328173@gmail.com",
      subject: "Novo inscrito na newsletter da Neroo",
      text: `Novo e-mail cadastrado: ${email}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      setSent(true);
      console.log("E-mail enviado com sucesso!");
      setEmail("");
    } catch (error) {
      alert(
        "Ocorreu um erro ao enviar o e-mail. Por favor, tente novamente mais tarde."
      );
    } finally {
      setLoading(false);
    }
  };*/

  const handleSubmit = async () => {
    setLoading(true);

    const url = "https://email-api-arotec-lilac.vercel.app/api/enviar-email";
    const dadosEmail = {
      to: "ja3328173@gmail.com",
      subject: "Novo inscrito na newsletter da Neroo",
      body: `Novo e-mail cadastrado na newsletter Neroo: ${email}`,
      email: "ja3328173@gmail.com",
      password: "pmjh fcjp wmrm fwmy",
      emailFrom:
        "neroo-newsletter@gokside.site",
      key: "Angola2020*",
    };

    try {
      const resposta = await axios.post(url, dadosEmail, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Email enviado com sucesso!", resposta);
      setSent(true)
      setLoading(false);
    } catch (erro: unknown) {
      console.error("Erro ao enviar email:", erro);

      setLoading(false);
    }
  };

  return (
    <motion.div
      className="px-2 text-center my-14 m0d:px- md:my-16 lg:my-24"
      initial={{ y: 70 }}
      transition={{ duration: 0.6 }}
      whileInView={{ y: 0 }}
    >
      <h1 className="text-2xl font-semibold text-primary md:text-3xl lg:text-4xl">
        {t("newsletter.title")}
      </h1>
      <br />
      <div className="md:w-[60%]  flex-col flex  gap-4 mx-auto">
        <div className="flex w-full gap-4 px-2 py-2 border rounded-full md:px-5 md:py-3 text-dark focus-within:border-red-500 bg-secondary">
          <FaEnvelope className="hidden my-auto text-4xl md:flex md:text-4xl text-primary" />
          <input
            type="email"
            placeholder={t("newsletter.email")}
            className="w-full my-auto text-black bg-transparent outline-none ps-4 md:ps-0"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            type="submit"
            className="flex click btn-neroo-lg"
            disabled={loading}
          >
            {loading ? (
              <CgSpinner className="text-2xl text-white animate-spin animate"/>
            ) : (
              <>
                <span className="hidden md:flex">
                  {t("newsletter.btnText")}
                </span>
                <span className="text-xl text-white md:hidden">
                  <BsSend />
                </span>
              </>
            )}
          </button>
        </div>
      </div>
      <br />
      <motion.div
        initial={{ opacity: 0, y: 90 }}
        transition={{ duration: 0.1, delay: 0.4 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        {
            sent && <>
            <div className="relative p-4 mx-auto text-sm text-green-800 bg-green-100 border border-green-600 rounded-lg md:text-2xl md:w-7/12 2xl:text-2xl">
                <span onClick={()=> setSent(false)} className="absolute top-0 text-2xl cursor-pointer right-2">&times;</span>
                {t("newsletter.info")}
            </div>
            </>
        }
        <LinePrimary />
      </motion.div>
    </motion.div>
  );
}
