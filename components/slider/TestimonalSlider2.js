import Slider from "react-slick";

const settings = {
  dots: false,
  infinite: true,
  speed: 600,
  autoplay: false,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: (
    <button type="button" className="slick-prev">
      <i className="flaticon-chevron"></i>
    </button>
  ),
  nextArrow: (
    <button type="button" className="slick-next">
      <i className="flaticon-chevron"></i>
    </button>
  ),
};

export default function TestimonalSlider2() {
  return (
    <>
      <Slider {...settings} className="testimonial-active">
        <div className="testimonial__item">
          <div className="testimonial__quote">
            <img src="/assets/img/icons/quote02.png" alt="icon" />
          </div>
          <div className="testimonial__rating">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <p>
            “ This platform made my JEE preparation so much easier and
            structured. “
          </p>
          <div className="testimonial__avatar">
            <h4 className="name">Priya Sharma</h4>
            <span className="designation">JEE Main Aspirant</span>
          </div>
        </div>
        <div className="testimonial__item">
          <div className="testimonial__quote">
            <img src="/assets/img/icons/quote02.png" alt="icon" />
          </div>
          <div className="testimonial__rating">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <p>
            “ The mock tests here are incredibly close to the actual NEET exam
            pattern. “
          </p>
          <div className="testimonial__avatar">
            <h4 className="name">Rahul Verma</h4>
            <span className="designation">NEET Aspirant</span>
          </div>
        </div>
        <div className="testimonial__item">
          <div className="testimonial__quote">
            <img src="/assets/img/icons/quote02.png" alt="icon" />
          </div>
          <div className="testimonial__rating">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <p>
            “ Thanks to the expert guidance, I was able to crack CAT with a 99.5
            percentile! “
          </p>
          <div className="testimonial__avatar">
            <h4 className="name">Rahul Verma</h4>
            <span className="designation">CAT Aspirant</span>
          </div>
        </div>
      </Slider>
    </>
  );
}
