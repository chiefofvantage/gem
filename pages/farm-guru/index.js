// primary :#1363df
// sec: #082a5e
// text: #39557e
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

import Cta1 from "@/components/sections/Cta1";
import Footer1 from "@/components/layout/footer/Footer1";
import Header1 from "@/components/layout/header/Header1";
import Link from "next/link";
import {
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiNumber5,
  RiNumber6,
} from "react-icons/ri";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// /assets/img/banner/slider_bg03.jpg
import Brand2 from "@/components/sections/Brand2";
import img1 from "@/public/farm-guru-1.png";
import img2 from "@/public/farm-guru-2.png";
import img3 from "@/public/farm-guru-3.png";

import {
  SlideFromRightAndFadeIn,
  SlideFromLeftAndFadeIn,
  FadeIn,
  SlideFromBottomAndFadeIn,
} from "@/components/animation/animation";
import Head from "next/head";
import Layout from "@/components/layout/Layout";

const sliderImageArr = [img1, img2, img3];
const brandImg = [
  "/brand-1.png",
  "/brand-2.png",
  "/brand-3.png",
  "/brand-4.png",
  "/brand-5.png",
  "/brand-6.png",
  "/brand-7.png",
  "/brand-8.png",
  "/brand-5.png",
];

const FarmGuru = () => {
  return (
    <Layout headerStyle={2} footerStyle={1}>
      <Head>
        <title>Farm Guru | Grey Matter solutions</title>
        <meta property="og:title" content="Farm Guru" key="title" />
      </Head>

      <main className="">
        {/* hero section */}

        <div
          className="slider__item d-flex mt-12 relative "
          data-background={sliderImageArr[0]}
        >
          <div className="flex flex-col lg:flex-row container justify-between gap-5 items-center overflow-hidden">
            <SlideFromLeftAndFadeIn>
              <div className="">
                <div className="slider__content ">
                  <span
                    className="sub-title text-sm sm:text-base"
                    data-delay-in=".2"
                    data-duration-in="1.5"
                  >
                    Experience the Joy of Farming with Farm Guru
                  </span>
                  <h2
                    className="text-2xl sm:text-[2.8rem] leading-tight tg-svg mb-2"
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
                    with <br /> Nature and{" "}
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
                    <Link
                      href="/"
                      className="btn tg-svg w-full lg:max-w-fit justify-center"
                    >
                      <span className="text">Book Your Visit Today</span>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </SlideFromLeftAndFadeIn>
            <SlideFromBottomAndFadeIn delay={0.25}>
              <img
                src="/farm-guru/farm-guru-hero-img.png"
                className="rounded object-cover object-center h-96 animate-fadein"
              />
            </SlideFromBottomAndFadeIn>
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

        {/* Brand  */}
        <div className="bg-gray-100 pt-10">
          <Brand2 brandImg={brandImg} />
        </div>

        {/* About us */}
        <section className="about-area-two overflow-hidden">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-5 col-lg-6">
                <SlideFromLeftAndFadeIn>
                  <div className="about__title-wrap">
                    <div className="section__title">
                      <span className="sub-title">About Us</span>
                      <h2 className="title tg-svg text-xl">
                        Connecting Generations Through Sustainable{" "}
                        <span className="position-relative">
                          <span
                            className="svg-icon"
                            id="about-svg"
                            data-svg-icon="assets/img/icons/title_shape.svg"
                          />
                          Farming
                        </span>{" "}
                      </h2>
                    </div>
                    <p className="">
                      Farm Guru was established in October 2016 by a group of
                      professionals, agriculturalists, educationalists, and
                      entrepreneurs. Our mission is to bring children and farms
                      together, providing hands-on experience in organic farming
                      and sustainable practices.{" "}
                    </p>
                    <p>
                      Located just 25 km from Chennai, Farm Guru offers a unique
                      opportunity for students to learn about farming in a
                      serene, green environment.{" "}
                    </p>
                  </div>
                </SlideFromLeftAndFadeIn>
              </div>
              <div className="col-xl-7 col-lg-6 col-md-11">
                <div className="about__images-wrap">
                  <div className="column">
                    <SlideFromRightAndFadeIn>
                      <img
                        src="/about-3.png"
                        alt="img"
                        className="h-[25rem] object-cover object-center"
                      />
                    </SlideFromRightAndFadeIn>
                  </div>
                  <div className="column">
                    <SlideFromRightAndFadeIn delay={0.1}>
                      <img
                        src="/about-2.png"
                        alt="img"
                        className="h-[12.5rem] object-cover object-center"
                      />
                    </SlideFromRightAndFadeIn>
                    <SlideFromRightAndFadeIn delay={0.2}>
                      <img
                        src="/about-1.png"
                        alt="img"
                        className="h-[12.5rem] object-cover object-center"
                      />
                    </SlideFromRightAndFadeIn>
                  </div>
                  <div className="about__shapes">
                    <img
                      src="/assets/img/objects/about_shape01.png"
                      alt="img"
                      className="about-shape-01"
                      data-aos="fade-down-left"
                    />
                    <img
                      src="/assets/img/objects/about_shape02.png"
                      alt="img"
                      className="about-shape-02"
                      data-aos="fade-up-right"
                    />
                    <img
                      src="/assets/img/objects/about_shape03.png"
                      alt="img"
                      className="about-shape-03 rotateme"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="categories-area mb-60">
          <div className="container">
            <div className="row align-items-center justify-content-center mb-55">
              <div className="col-xl-7 col-lg-8 col-md-10">
                <SlideFromLeftAndFadeIn>
                  <div className="categories__title-wrap text-center text-lg-start m-0">
                    <div className="section__title mb-0">
                      <span className="sub-title">What we do</span>
                      <h2 className="title tg-svg">
                        A Day at our{" "}
                        <span className="position-relative">
                          <span
                            className="svg-icon"
                            id="svg-5"
                            data-svg-icon="assets/img/icons/title_shape.svg"
                          />
                          Farm
                        </span>
                      </h2>
                    </div>
                    <p className="mb-0 max-w-md">
                      The day starts early at the farm.The best time to reach
                      here is before the sun clears the tree line to come out
                      into the open.{" "}
                    </p>
                  </div>
                </SlideFromLeftAndFadeIn>
              </div>
              <div className="col-xl-5 col-lg-4 col-md-6"></div>
            </div>
            <div className="row justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-3">
              <SlideFromBottomAndFadeIn>
                <div className="col">
                  <div className="categories__item-two tg-svg">
                    <Link href="/courses">
                      <div className="icon">
                        <RiNumber1 />
                      </div>
                      <div className="">
                        <div className="text-[#082a5e] text-xl hover:text-[]">
                          Welcome Drink
                        </div>
                        <span className="text-sm text-[#5a7093]">
                          Refreshing fresh coconut water
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </SlideFromBottomAndFadeIn>
              <div className="col">
                <SlideFromBottomAndFadeIn>
                  <div className="categories__item-two tg-svg">
                    <Link href="/courses">
                      <div className="icon">
                        <RiNumber2 />
                      </div>
                      <div className="">
                        <div className="text-[#082a5e] text-xl hover:text-[]">
                          Learning Tour
                        </div>
                        <span className="text-sm text-[#5a7093]">
                          Discover transplanting and crop rotation.{" "}
                        </span>
                      </div>
                    </Link>
                  </div>
                </SlideFromBottomAndFadeIn>
              </div>
              <div className="col">
                <SlideFromBottomAndFadeIn>
                  <div className="categories__item-two tg-svg">
                    <Link href="/courses">
                      <div className="icon">
                        <RiNumber3 />
                      </div>
                      <div className="">
                        <div className="text-[#082a5e] text-xl hover:text-[]">
                          Farm to Fork
                        </div>
                        <span className="text-sm text-[#5a7093]">
                          Enjoy farm-fresh, healthy meals.
                        </span>
                      </div>
                    </Link>
                  </div>
                </SlideFromBottomAndFadeIn>
              </div>
              <div className="col">
                <SlideFromBottomAndFadeIn>
                  <div className="categories__item-two tg-svg">
                    <Link href="/courses">
                      <div className="icon">
                        <RiNumber4 />
                      </div>
                      <div className="">
                        <div className="text-[#082a5e] text-xl hover:text-[]">
                          Digging Knowledge
                        </div>
                        <span className="text-sm text-[#5a7093] leading-none">
                          Stories and yoga under the mango tree.{" "}
                        </span>
                      </div>
                    </Link>
                  </div>
                </SlideFromBottomAndFadeIn>
              </div>
              <div className="col">
                <SlideFromBottomAndFadeIn>
                  <div className="categories__item-two tg-svg">
                    <Link href="/courses">
                      <div className="icon">
                        <RiNumber5 />
                      </div>
                      <div className="">
                        <div className="text-[#082a5e] text-xl hover:text-[]">
                          Time to Leave
                        </div>
                        <span className="text-sm text-[#5a7093]">
                          Take home memories and awareness.
                        </span>
                      </div>
                    </Link>
                  </div>
                </SlideFromBottomAndFadeIn>
              </div>
              <div className="col">
                <SlideFromBottomAndFadeIn>
                  <div className="categories__item-two tg-svg">
                    <Link href="/courses">
                      <div className="icon">
                        <RiNumber6 />
                      </div>
                      <div className="">
                        <div className="text-[#082a5e] text-xl hover:text-[]">
                          Sowing and Reaping
                        </div>
                        <span className="text-sm text-[#5a7093]">
                          Understand the true cost of farming.
                        </span>
                      </div>
                    </Link>
                  </div>
                </SlideFromBottomAndFadeIn>
              </div>
            </div>
          </div>
          <div className="categories__shapes-two">
            <div className="categories__shapes-item-two rotateme">
              <img
                src="/assets/img/objects/categories_shape05.png"
                alt="shape"
              />
            </div>
            <div className="categories__shapes-item-two" data-aos="fade-up">
              <img
                src="/assets/img/objects/categories_shape02.png"
                alt="shape"
              />
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row align-items-center justify-content-center mb-10">
              <div className="col-xl-7 col-lg-8 col-md-10">
                <div className="categories__title-wrap text-center text-lg-start m-0">
                  <div className="section__title mb-0">
                    <span className="sub-title">Gallery</span>
                    <h2 className="title tg-svg">
                      Our Art{" "}
                      <span className="position-relative">
                        <span
                          className="svg-icon"
                          id="svg-5"
                          data-svg-icon="assets/img/icons/title_shape.svg"
                        />
                        Gallery
                      </span>
                    </h2>
                    <p className="mb-0 max-w-xl">
                      Discover the joy of children engaging with nature through
                      our vibrant collection of field trip photos. Each image
                      captures the essence of learning and fun at Farm Guru.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-4 col-md-6"></div>
            </div>

            <div className=" rounded mb-16 mt-14">
              <Swiper
                pagination={{
                  type: "fraction",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                // className=""
                style={{ height: "500px" }}
              >
                {/* <SwiperSlide><img src="/assets/img/custom/slide-1.jpg" /></SwiperSlide> */}
                <SwiperSlide>
                  <div
                    style={{
                      width: "100%",
                      height: "500px",
                      backgroundImage:
                        'url("/assets/img/custom/farm-guru-1.png")', // Replace with your image URL
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    style={{
                      width: "100%",
                      height: "500px", // Set your desired height
                      backgroundImage:
                        'url("/assets/img/custom/farm-guru-2.png")', // Replace with your image URL
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    style={{
                      width: "100%",
                      height: "500px", // Set your desired height
                      backgroundImage:
                        'url("/assets/img/custom/farm-guru-3.png")', // Replace with your image URL
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    style={{
                      width: "100%",
                      height: "500px", // Set your desired height
                      backgroundImage:
                        'url("/assets/img/custom/farm-guru-4.png")', // Replace with your image URL
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    style={{
                      width: "100%",
                      height: "500px", // Set your desired height
                      backgroundImage:
                        'url("/assets/img/custom/farm-guru-5.png")', // Replace with your image URL
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>

        {/* contact section */}
        <Cta1
          primaryHeading={"Join Us at Farm Guru!"}
          description={
            "Embark on a unique, educational adventure with your students. Witness the wonders of sustainable farming and nurture a love for nature in the young minds."
          }
        />
      </main>
    </Layout>
  );
};
export default FarmGuru;
