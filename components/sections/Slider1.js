import Link from "next/link";
import Slider from "react-slick";
const settings = {
  dots: false,
  infinite: true,
  speed: 600,
  autoplay: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
};

import img1 from "@/public/assets/img/banner/slider_bg01.jpg";
import img2 from "@/public/assets/img/banner/slider_bg02.jpg";
import img3 from "@/public/assets/img/banner/slider_bg03.jpg";
const sliderImageArr = [img1, img2, img3];

export default function Slider1({ images }) {
  return (
    <>
      <section className="slider-area">
        <Slider {...settings} className="slider__active">
          <div
            className="slider__item d-flex"
            data-background={images?.[0] || sliderImageArr[0]}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-8">
                  <div className="slider__content">
                    <span
                      className="sub-title"
                      data-delay-in=".2"
                      data-duration-in="1.5"
                    >
                      Experience the Joy of Farming with Farm Guru
                    </span>
                    <h2
                      className="title tg-svg"
                      data-delay-in=".4"
                      data-duration-in="1.5"
                    >
                      Connecting{" "}
                      <span className="position-relative">
                        <span
                          className="svg-icon"
                          id="slider-svg02"
                          data-svg-icon="assets/img/icons/title_shape.svg"
                        />
                        Children{" "}
                      </span>
                      with Nature and{" "}
                      <span className="position-relative">
                        <span
                          className="svg-icon"
                          id="slider-svg02"
                          data-svg-icon="assets/img/icons/title_shape.svg"
                        />
                        Agriculture{" "}
                      </span>
                    </h2>
                    <ul
                      className="list-wrap"
                      data-delay-in=".6"
                      data-duration-in="1.5"
                    >
                      <li>
                        <i className="fas fa-check-circle" />
                        Hands-On Learning in Nature{" "}
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />
                        Fun and Educational Field Trips
                      </li>
                    </ul>
                    <div
                      className="tg-button-wrap"
                      data-delay-in=".8"
                      data-duration-in="1.5"
                    >
                      <Link href="/courses" className="btn tg-svg">
                        <span className="text">Book Your Visit Today</span>{" "}
                        <span
                          className="svg-icon"
                          id="slider-btn01"
                          data-svg-icon="assets/img/icons/btn-arrow.svg"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="/assets/img/objects/categories_shape02.png"
              alt="shape"
              width={108}
              className="top-shape"
              data-delay-in="1.2"
              data-duration-in="1.5"
            />
            <img
              src="/assets/img/banner/slider_shape.png"
              alt="shape"
              className="bottom-shape"
              data-delay-in="1.2"
              data-duration-in="1.5"
            />
          </div>
          <div
            className="slider__item d-flex"
            data-background={images?.[1] || sliderImageArr[1]}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-8">
                  <div className="slider__content">
                    <span
                      className="sub-title"
                      data-delay-in=".2"
                      data-duration-in="1.5"
                    >
                      Experience the Joy of Farming with Farm Guru
                    </span>
                    <h2
                      className="title tg-svg"
                      data-delay-in=".4"
                      data-duration-in="1.5"
                    >
                      Connecting{" "}
                      <span className="position-relative">
                        <span
                          className="svg-icon"
                          id="slider-svg02"
                          data-svg-icon="assets/img/icons/title_shape.svg"
                        />
                        Children{" "}
                      </span>
                      with Nature and{" "}
                      <span className="position-relative">
                        <span
                          className="svg-icon"
                          id="slider-svg02"
                          data-svg-icon="assets/img/icons/title_shape.svg"
                        />
                        Agriculture{" "}
                      </span>
                    </h2>
                    <ul
                      className="list-wrap"
                      data-delay-in=".6"
                      data-duration-in="1.5"
                    >
                      <li>
                        <i className="fas fa-check-circle" />
                        Hands-On Learning in Nature{" "}
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />
                        Fun and Educational Field Trips
                      </li>
                    </ul>
                    <div
                      className="tg-button-wrap"
                      data-delay-in=".8"
                      data-duration-in="1.5"
                    >
                      <Link href="/courses" className="btn tg-svg">
                        <span className="text">Book Your Visit Today</span>{" "}
                        <span
                          className="svg-icon"
                          id="slider-btn02"
                          data-svg-icon="assets/img/icons/btn-arrow.svg"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="/assets/img/objects/categories_shape02.png"
              alt="shape"
              width={108}
              className="top-shape"
              data-delay-in="1.2"
              data-duration-in="1.5"
            />
            <img
              src="/assets/img/banner/slider_shape.png"
              alt="shape"
              className="bottom-shape"
              data-delay-in="1.2"
              data-duration-in="1.5"
            />
          </div>
          <div
            className="slider__item d-flex"
            data-background={images?.[2] || sliderImageArr[2]}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-8">
                  <div className="slider__content">
                    <span
                      className="sub-title"
                      data-delay-in=".2"
                      data-duration-in="1.5"
                    >
                      Experience the Joy of Farming with Farm Guru
                    </span>
                    <h2
                      className="title tg-svg"
                      data-delay-in=".4"
                      data-duration-in="1.5"
                    >
                      Connecting{" "}
                      <span className="position-relative">
                        <span
                          className="svg-icon"
                          id="slider-svg02"
                          data-svg-icon="assets/img/icons/title_shape.svg"
                        />
                        Children{" "}
                      </span>
                      with Nature and{" "}
                      <span className="position-relative">
                        <span
                          className="svg-icon"
                          id="slider-svg02"
                          data-svg-icon="assets/img/icons/title_shape.svg"
                        />
                        Agriculture{" "}
                      </span>
                    </h2>
                    <ul
                      className="list-wrap"
                      data-delay-in=".6"
                      data-duration-in="1.5"
                    >
                      <li>
                        <i className="fas fa-check-circle" />
                        Hands-On Learning in Nature{" "}
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />
                        Fun and Educational Field Trips
                      </li>
                    </ul>
                    <div
                      className="tg-button-wrap"
                      data-delay-in=".8"
                      data-duration-in="1.5"
                    >
                      <Link href="/courses" className="btn tg-svg">
                        <span className="text">Book Your Visit</span>{" "}
                        <span
                          className="svg-icon"
                          id="slider-btn03"
                          data-svg-icon="assets/img/icons/btn-arrow.svg"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="/assets/img/objects/categories_shape02.png"
              alt="shape"
              width={108}
              className="top-shape"
              data-delay-in="1.2"
              data-duration-in="1.5"
            />
            <img
              src="/assets/img/banner/slider_shape.png"
              alt="shape"
              className="bottom-shape"
              data-delay-in="1.2"
              data-duration-in="1.5"
            />
          </div>
        </Slider>
      </section>
    </>
  );
}
