import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import user from "../../../assets/imgs/Pattern-fill-a10d0ecff0ddaba6c738546ff30db98b.jpg";
import Slider from "react-slick";

export function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 4,
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
      img: user,
      name: "John Doe",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      title: "CEO, Company A",
    },
    {
      id: 2,
      img: user,
      name: "Jane Doe",
      content:
        "Nulla facilisi. Donec pretium, libero eget malesuada fermentum.",
      title: "CTO, Company B",
    },
    {
      id: 3,
      img: user,
      name: "Jane Doe",
      content:
        "Nulla facilisi. Donec pretium, libero eget malesuada fermentum.",
      title: "CTO, Company B",
    },
    {
      id: 4,
      img: user,
      name: "Jane Doe",
      content:
        "Nulla facilisi. Donec pretium, libero eget malesuada fermentum.",
      title: "CTO, Company B",
    },
    // Adicione mais depoimentos conforme necessário
  ];

  return (
    <div className="py-16 my-16 slider-container">
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
              <p className="text-secondary">{testimonial.content}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
