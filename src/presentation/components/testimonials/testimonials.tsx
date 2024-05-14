import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import user from "../../../assets/imgs/Pattern-fill-a10d0ecff0ddaba6c738546ff30db98b.jpg";
import { pictures } from "../../../utils/imagesExporter";
import { Section } from "../section/section";

export function Testimonials() {
  /*
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
  */
 
  const testimonials = [
    {
      id: 4,
      img: user,
      name: "Sérgio Mateus",
      content:
        "A Neroo realmente superou todas as nossas expectativas. Sua abordagem inovadora e criativa nos ajudou a alcançar um público totalmente novo, e sua equipe altamente profissional tornou todo o processo suave e eficiente.",
      title: "CEO ",
    },
    {
      id: 1,
      img: pictures.emmanuel,
      name: "Ema Nuell",
      content:
        "Estou impressionada com o impacto que a equipe da Neroo trouxe para o nosso negócio. Eles não apenas aumentaram nossa presença online, mas também aumentaram significativamente nossas conversões. Altamente recomendado!",
      title: "Estrategista e Social Mídia ",
    },
    {
      id: 2,
      img: pictures.pic3,
      name: "Crisvan",
      content:
        "Trabalhar com a Neroo foi uma experiência incrível. Eles têm uma compreensão profunda das tendências do mercado e foram capazes de desenvolver uma estratégia personalizada que impulsionou nosso crescimento exponencialmente.",
      title: "Dr. de arte e UI/UX Design",
    },
    {
      id: 3,
      img: pictures.pic1,
      name: "Noémia Fernandes ",
      content:
        "Trabalhar com a Neroo foi uma experiência incrível. Eles têm uma compreensão profunda das tendências do mercado e foram capazes de desenvolver uma estratégia personalizada que impulsionou nosso crescimento exponencialmente.",
      title: "Social Mídea e Gest. de Tráfego pago",
    },
  ];

  return (
    <div id="testimonials" className="flex flex-wrap justify-center gap-8 px-6 py-16 mx-auto my-16 md:px-1">
      {/*

<Slider {...settings}>
        {testimonials.map((testimonial) => (
          <Section key={testimonial.id}>
            <div className="mx-[2rem]">
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
          </Section>
        ))}
      </Slider>

        */}

      {testimonials.map((testimonial) => (
        <Section key={testimonial.id}>
          <div className="  h-[15rem] rounded-lg grid items-center bg-white/10">
            <div className="text-white p-4  w-[3rem] testimonial">
              <div className="flex flex-col justify-center gap-3">
                <img
                  src={testimonial.img}
                  className="w-[5.5em] h-[5.5em] mx-auto rounded-full"
                  alt=""
                />
                <div className="text-center">
                  <h2 className="text-xl font-bold">{testimonial.name}</h2>
                  <p className="text-sm text-secondary">{testimonial.title}</p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      ))}
    </div>
  );
}
