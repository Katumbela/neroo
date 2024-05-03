import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import user from "../../../assets/imgs/Pattern-fill-a10d0ecff0ddaba6c738546ff30db98b.jpg";
import Slider from "react-slick";
import { pictures } from "../../../utils/imagesExporter";

export function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const testimonials = [
    {
      id: 1,
      img: pictures.pic1,
      name: "Marina Silva",
      content:
        "Estou impressionada com o impacto que a equipe da Neroo trouxe para o nosso negócio. Eles não apenas aumentaram nossa presença online, mas também aumentaram significativamente nossas conversões. Altamente recomendado!",
      title: "CEO ",
    },
    {
      id: 2,
      img: pictures.pic3,
      name: "Pedro Santos",
      content:
        "Trabalhar com a Neroo foi uma experiência incrível. Eles têm uma compreensão profunda das tendências do mercado e foram capazes de desenvolver uma estratégia personalizada que impulsionou nosso crescimento exponencialmente.",
      title: "Fundador ",
    },
    {
      id: 3,
      img: pictures.pic5,
      name: "Carla Oliveira",
      content:
        "Desde que começamos a trabalhar com a Neroo, nossas campanhas de marketing nunca foram as mesmas. Eles são mestres em otimizar os gastos com publicidade e sempre entregam resultados tangíveis. Não poderíamos estar mais satisfeitos!",
      title: "Diretora de Marketing ",
    },
    {
      id: 4,
      img: user,
      name: "Rafael Costa",
      content:
        "A Neroo realmente superou todas as nossas expectativas. Sua abordagem inovadora e criativa nos ajudou a alcançar um público totalmente novo, e sua equipe altamente profissional tornou todo o processo suave e eficiente.",
      title: "Gerente de Produto ",
    },
    // Adicione mais depoimentos conforme necessário
  ];

  return (
    <div
      id="testimonials"
      className="px-6 py-16 my-16 md:px-1 slider-container"
    >
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="mx-[2rem]">
            <div className="text-white p-4  w-[3rem] testimonial">
              <div className="flex gap-3">
                <img
                  src={testimonial.img}
                  className="w-[3em] h-[3em] rounded-full"
                  alt=""
                />
                <div>
                  <h2 className="font-bold">{testimonial.name}</h2>
                  <p className="text-secondary">{testimonial.title}</p>
                </div>
              </div>
              <p className="mt-3 text-secondary">{testimonial.content}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
