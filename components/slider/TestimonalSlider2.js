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
            “ FKTT highlighted my child's strengths and opened up great
            opportunities. The experience was invaluable. “
          </p>
          <div className="testimonial__avatar">
            <h4 className="name">Sarah M</h4>
            <span className="designation">Parent</span>
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
            “ The FKTT boosted my son's confidence and enthusiasm for learning.
            A fantastic program for any eager student. “
          </p>
          <div className="testimonial__avatar">
            <h4 className="name">John D </h4>
            <span className="designation">Parent</span>
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
            “ FKTT was amazing! It made learning fun and encouraged me to
            explore new subjects.“
          </p>
          <div className="testimonial__avatar">
            <h4 className="name">Alex A</h4>
            <span className="designation">Student</span>
          </div>
        </div>
      </Slider>
    </>
  );
}
