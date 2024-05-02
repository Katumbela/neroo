import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowUp, FaRobot, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { bg, regularIcons } from "../../../utils/imagesExporter";
import { Overlay } from "../overlay/overlay";
import { LanguageSwitcher } from "../lang-switcher/languageSwitcher";
import { BsSend } from "react-icons/bs";

export function Footer() {
  const { t } = useTranslation();
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [writing, setW] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { id: 1, text: "Olá! Como posso ajudar você hoje?", sender: "bot" },
  ]);

  useEffect(() => {
    const chatContainer = document.querySelector(".chat-messages");
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight; // Rolagem para a parte inferior
    }
  }, [chatMessages]);

  const handleSendMessage = (message: string) => {
    setW(true);
    // Adiciona a mensagem do usuário à lista de mensagens
    setChatMessages((prevMessages) => [
      ...prevMessages,
      {
        id: prevMessages.length + 1,
        text: message,
        sender: "user",
      },
    ]);

    // Função para adicionar a mensagem do bot com efeito de digitação
    const addBotMessageWithTypingEffect = (response: string) => {
      // Simula um pequeno atraso antes da resposta do bot
      setTimeout(() => {
        // Adiciona cada caractere da resposta do bot com um pequeno atraso entre eles
        setTimeout(() => {
          setChatMessages((prevMessages) => [
            ...prevMessages,
            {
              id: prevMessages.length + 1,
              text: response,
              sender: "bot",
            },
          ]);
        }, 800); // Ajuste o valor para controlar a velocidade da digitação
        setW(false);
      }, 800); // Ajuste o valor para controlar o atraso antes da resposta do bot
    };

    // Lógica adicional para processar a mensagem e responder conforme necessário
    const lowercaseMessage = message.toLowerCase();

    // Verifica se a mensagem contém palavras-chave específicas
    if (
      lowercaseMessage.includes("olá") ||
      lowercaseMessage.includes("oi") ||
      lowercaseMessage.includes("olá!")
    ) {
      addBotMessageWithTypingEffect("Olá! Como posso ajudar você hoje?");
    } else if (lowercaseMessage.includes("bom dia")) {
      addBotMessageWithTypingEffect("Bom dia! Como posso ajudar você hoje?");
    } else if (lowercaseMessage.includes("boa tarde")) {
      addBotMessageWithTypingEffect("Boa tarde! Como posso ajudar você hoje?");
    } else if (lowercaseMessage.includes("boa noite")) {
      addBotMessageWithTypingEffect("Boa noite! Como posso ajudar você hoje?");
    } else if (lowercaseMessage.includes("serviços")) {
      addBotMessageWithTypingEffect(
        "Oferecemos diversos serviços de marketing digital para ajudar a promover o seu negócio online. Isso inclui SEO, gerenciamento de mídias sociais, anúncios pagos, criação de conteúdo e muito mais. Como posso ajudar você hoje?"
      );
    } else if (lowercaseMessage.includes("contato")) {
      addBotMessageWithTypingEffect(
        "Para entrar em contato conosco, você pode ligar para (XX) XXXX-XXXX ou enviar um e-mail para contato@agencianeroo.com. Além disso, você pode clicar no botão do WhatsApp abaixo para falar diretamente conosco. Como posso ajudar mais?"
      );
    } else if (
      lowercaseMessage.includes("preços") ||
      lowercaseMessage.includes("custos")
    ) {
      addBotMessageWithTypingEffect(
        "Nossos preços variam dependendo dos serviços que você precisa e do escopo do projeto. Seria útil saber mais sobre suas necessidades específicas para fornecer um orçamento personalizado. Posso ajudar com mais alguma coisa?"
      );
    } else if (lowercaseMessage.includes("horário")) {
      addBotMessageWithTypingEffect(
        "Estamos disponíveis para atendê-lo de segunda a sexta, das 9h às 18h. Como posso ajudar você dentro deste horário?"
      );
    } else {
      addBotMessageWithTypingEffect(
        "Desculpe, não entendi. Por favor, tente novamente ou entre em contato conosco Whatsapp"
      );
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleToggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <div className="relative mt-12 md:mt-24 lg:mt-32">
      <motion.p
        onClick={handleToggleChat}
        initial={{ opacity: 0, y: 60 }}
        transition={{ duration: 0.3, delay: 0.6 }}
        animate={{ opacity: 1, y: 0 }}
        className={`fixed z-100 focus-within:border-primary p-3 text-4xl border-2 rounded-full border-white/50 hover:text-primary hover:border-white hover:bg-white text-primary bg-white ${
          showScrollButton ? "bottom-20" : "bottom-8"
        }  click right-3`}
      >
        {" "}
        <FaRobot />{" "}
      </motion.p>

      <div className="flex flex-col items-center md:flex-row">
        <motion.div className="grid items-center w-full mb-8 md:w-auto md:mb-0">
          <div className="text-center md:text-start">
            <motion.h1 className="text-3xl font-bold text-white md:text-5xl lg:text-6xl 2xl:text-7xl">
              {t("footer.title")}
            </motion.h1>
            <motion.p className="mt-4 text-base md:mt-6 md:text-xl lg:text-2xl text-secondary 2xl:text-3xl">
              {t("footer.description")}
            </motion.p>
            <motion.div className="flex md:mb-[2rem] justify-center md:justify-start flex-col md:flex-row gap-4 mt-6 md:mt-10">
              <a href={"/contact"} className="click btn-neroo-lg">
                {t("contactText")}
              </a>{" "}
              <span className="hidden my-auto text-white md:inline-block">
                Or
              </span>{" "}
              <a
                href={`tel:${t("footer.tel")}`}
                className="flex items-center justify-center gap-3 mt-2 text-white md:justify-start md:mt-0 click"
              >
                <img
                  className="w-6 h-6"
                  src={regularIcons.Telephone}
                  alt="Telephone Icon"
                />{" "}
                <span>{t("footer.tel")}</span>
              </a>
            </motion.div>
            <div className="">
              <LanguageSwitcher />
            </div>
            {/* Botão do Chat */}
            <motion.button
              onClick={handleToggleChat}
              className="px-4 py-2 mt-6 text-white rounded-lg shadow-lg bg-primary hover:bg-primary-dark click"
            >
              {showChat ? "Hide Chat" : "Show Chat"}
            </motion.button>
          </div>
        </motion.div>
        <motion.div className="w-full relative md:-mb-20 md:w-[90%]">
          <Overlay />
          <img
            src={bg.bgMarketing}
            alt="Marketing Background"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
      {showScrollButton && (
        <button
          onClick={handleScrollTop}
          className="fixed flex items-center gap-2 px-2 py-2 text-center text-white rounded-full shadow-lg md:px-4 click bg-primary place-content-center bottom-4 right-4 animate-bounce"
        >
          <FaArrowUp />
          <span className="hidden text-sm md:block"> Scroll To Top</span>
        </button>
      )}
      {/* Componente do Chat */}
      {showChat && (
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed z-50  bg-white rounded-xl shadow-xl w-[22rem] h-[32rem] bottom-16 right-6"
        >
          <div className="relative p-3 text-white shadow-lg h-[5rem] bg-primary rounded-t-xl">
            <h2 className="my-auto mb-2 text-2xl font-bold ">
              Assistente virtual
            </h2>
            {writing && (
              <span className="-mt-2 text-sm text-white">Escrevendo...</span>
            )}
            <FaTimes
              onClick={handleToggleChat}
              className="absolute text-2xl top-3 right-3"
            />
          </div>
          {/* Renderização das mensagens do chat */}
          <div className="px-4 overflow-auto chat-messages">
            <br />
            {chatMessages.map((message) => (
              <p
                key={message.id}
                className={`p-2 mb-2 rounded-lg ${
                  message.sender === "bot"
                    ? "bg-slate-100 mr-9"
                    : "bg-primary/30 ms-9"
                }`}
              >
                <span className="font-semibold">
                  {message.sender === "bot" ? "Neroo:" : "Você:"}
                </span>{" "}
                {message.text}
              </p>
            ))}
          </div>
          {/* Formulário de envio de mensagem */}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const message = e.target.elements.message.value;
              handleSendMessage(message);
              e.target.elements.message.value = "";
            }}
            className="flex gap-2 mx-3"
          >
            <input
              type="text"
              name="message"
              placeholder="Digite sua mensagem..."
              className="w-full p-2 mb-2 border border-gray-300 rounded"
            />
            <button
              type="submit"
              className="px-4 font-bold rounded-lg text-primary "
            >
              <BsSend />
            </button>
          </form>
        </motion.div>
      )}
    </div>
  );
}
