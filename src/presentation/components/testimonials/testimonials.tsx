import { useRef } from "react"; 

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      title: "CEO, Company A",
    },
    {
      id: 2,
      name: "Jane Doe",
      content:
        "Nulla facilisi. Donec pretium, libero eget malesuada fermentum.",
      title: "CTO, Company B",
    },
    // Adicione mais depoimentos conforme necessário
  ];

  const carouselRef = useRef(null);


  return (
    <div className="my-16">
      <div className="owl-carousel owl-theme" ref={carouselRef}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="item">
            <div className="testimonial">
              <h2>{testimonial.name}</h2>
              <p>{testimonial.content}</p>
              <p>{testimonial.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
