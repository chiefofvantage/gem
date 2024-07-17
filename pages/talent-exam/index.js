import React from "react";
import {
  FaGraduationCap,
  FaClipboardCheck,
  FaCalendarAlt,
  FaBook,
  FaUsers,
  FaTrophy,
  FaChalkboardTeacher,
  FaCheck,
  FaLaptop,
  FaChartLine,
  FaClock,
  FaQuestionCircle,
} from "react-icons/fa";
import {
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiNumber5,
  RiNumber6,
} from "react-icons/ri";
import img1 from "@/public/farm-guru-1.png";
import img2 from "@/public/farm-guru-2.png";
import img3 from "@/public/farm-guru-3.png";
import Link from "next/link";
import Footer1 from "@/components/layout/footer/Footer1";
import Cta1 from "@/components/sections/Cta1";
import Header1 from "@/components/layout/header/Header1";
import TestimonialSlider1 from "@/components/slider/TestimonialSlider1";
import Testimonial1 from "@/components/sections/Testimonial1";
import Testimonial2 from "@/components/sections/Testimonial2";
import Testimonial3 from "@/components/sections/Testimonial3";
import QuickAction1 from "@/components/sections/QuickAction1";

const ExamCard = ({ title, date, registrationDeadline }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600 mb-2">
      <FaCalendarAlt className="inline mr-2" />
      Exam Date: {date}
    </p>
    <p className="text-gray-600">
      <FaClipboardCheck className="inline mr-2" />
      Registration Deadline: {registrationDeadline}
    </p>
  </div>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white shadow-lg rounded-lg p-6">
    <Icon className="text-4xl text-blue-500 mb-4" />
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const TestimonialCard = ({ name, exam, quote }) => (
  <div className="bg-white shadow-lg rounded-lg p-6">
    <p className="text-gray-600 mb-4">"{quote}"</p>
    <p className="font-bold">{name}</p>
    <p className="text-sm text-gray-500">{exam} Aspirant</p>
  </div>
);

const TalentExamWebpage = () => {
  const exams = [
    {
      title: "JEE Main",
      date: "April 10-12, 2025",
      registrationDeadline: "March 15, 2025",
    },
    {
      title: "NEET",
      date: "May 5, 2025",
      registrationDeadline: "April 1, 2025",
    },
    {
      title: "CAT",
      date: "November 28, 2025",
      registrationDeadline: "October 15, 2025",
    },
  ];

  const features = [
    {
      icon: FaBook,
      title: "Comprehensive Study Material",
      description:
        "Access meticulously curated study resources, including video lectures, e-books, and practice papers, tailored for each exam.",
    },
    {
      icon: FaUsers,
      title: "Peer Learning Community",
      description:
        "Join a vibrant community of fellow aspirants. Collaborate, discuss, and grow together through forums and study groups.",
    },
    {
      icon: FaTrophy,
      title: "Adaptive Mock Tests",
      description:
        "Take AI-powered mock tests that adapt to your performance, helping you focus on areas that need improvement.",
    },
    {
      icon: FaChalkboardTeacher,
      title: "Expert Guidance",
      description:
        "Learn from top educators and industry experts through live classes, doubt-clearing sessions, and personalized mentoring.",
    },
    {
      icon: FaLaptop,
      title: "24/7 Online Access",
      description:
        "Study anytime, anywhere with our mobile-friendly platform. Your preparation never stops, even on the go.",
    },
    {
      icon: FaChartLine,
      title: "Performance Analytics",
      description:
        "Track your progress with detailed analytics. Understand your strengths and weaknesses to strategize better.",
    },
    {
      icon: FaClock,
      title: "Time Management Tools",
      description:
        "Master the art of time management with our specialized tools designed to improve your exam-taking speed and efficiency.",
    },
    {
      icon: FaQuestionCircle,
      title: "Personalized Doubt Resolution",
      description:
        "Get your doubts cleared quickly by our panel of subject matter experts, ensuring you never get stuck in your preparation.",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      exam: "JEE Main",
      quote:
        "This platform made my JEE preparation so much easier and structured.",
    },
    {
      name: "Rahul Verma",
      exam: "NEET",
      quote:
        "The mock tests here are incredibly close to the actual NEET exam pattern.",
    },
    {
      name: "Ananya Desai",
      exam: "CAT",
      quote:
        "Thanks to the expert guidance, I was able to crack CAT with a 99.5 percentile!",
    },
  ];

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

  return (
    <>
      <Header1 />
      <main className="min-h-screen ">
        {/* hero section */}
        <div
          className="slider__item d-flex mt-16"
          data-background={sliderImageArr[0]}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg -8">
                <div className="slider__content">
                  <span
                    className="sub-title"
                    data-delay-in=".2"
                    data-duration-in="1.5"
                  >
                    Experience the Joy of Learning with Exam Guru
                  </span>
                  <h2
                    className="text-[2.8rem] tg-svg mb-11"
                    data-delay-in=".4"
                    data-duration-in="1.5"
                  >
                    Connecting Students With <br />
                    <span className="position-relative text-[#1363df]">
                      <span
                        className="svg-icon"
                        id="slider-svg02"
                        data-svg-icon="assets/img/icons/title_shape.svg"
                      />
                      Knowledge And Success{" "}
                    </span>
                  </h2>
                  <ul
                    className="list-wrap"
                    data-delay-in=".6"
                    data-duration-in="1.5"
                  >
                    <li>
                      <i className="fas fa-check-circle" />
                      Comprehensive Study Materials
                    </li>
                    <li>
                      <i className="fas fa-check-circle" />
                      Expert-Led Mock Tests and Evaluations
                    </li>
                  </ul>
                  <div
                    className="tg-button-wrap"
                    data-delay-in=".8"
                    data-duration-in="1.5"
                  >
                    <Link href="/courses" className="btn tg-svg">
                      <span className="text">Book Your Trail Today</span>{" "}
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

        {/* Exams Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              <FaGraduationCap className="inline mr-2" />
              Upcoming Exams
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {exams.map((exam, index) => (
                <ExamCard key={index} {...exam} />
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="categories-area py-10 bg-white">
          <div className="container">
            <div className="row align-items-center justify-content-center mb-55">
              <div className="col-xl-7 col-lg-8 col-md-10">
                <div className="categories__title-wrap text-center text-lg-start m-0">
                  <div className="section__title mb-0">
                    <span className="sub-title">Why Us?</span>
                    <h2 className="title tg-svg">
                      Why Study Talent Exam in{" "}
                      <span className="position-relative">
                        <span
                          className="svg-icon"
                          id="svg-5"
                          data-svg-icon="assets/img/icons/title_shape.svg"
                        />
                        Philippines?
                      </span>
                    </h2>
                  </div>
                  <p className="mb-0 max-w-md">
                    Why we have to study MBBS in Philippines, what is the
                    difference between studing in india and Philippines.
                  </p>
                </div>
              </div>
              <div className="col-xl-5 col-lg-4 col-md-6"></div>
            </div>
            <div className="row justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-3">
              <div className="col">
                <div className="categories__item-two tg-svg">
                  <Link href="/courses">
                    <div className="icon">
                      <RiNumber1 />
                    </div>
                    <div className="space-y-2">
                      <h3>Study Material</h3>
                      <p className="text-xs text-[#5a7093] ">
                        Curated resources including video lectures, e-books, and
                        practice papers.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col">
                <div className="categories__item-two tg-svg">
                  <Link href="/courses">
                    <div className="icon">
                      <RiNumber2 />
                    </div>
                    <div className="space-y-2">
                      <h3> Community</h3>
                      <p className="text-xs text-[#5a7093] ">
                        Collaborate and grow with fellow aspirants through
                        forums and study groups.{" "}
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col">
                <div className="categories__item-two tg-svg">
                  <Link href="/courses">
                    <div className="icon">
                      <RiNumber3 />
                    </div>
                    <div className="space-y-2">
                      <h3>Mock Tests</h3>
                      <p className="text-xs text-[#5a7093] ">
                        AI-powered tests that adapt to your performance for
                        targeted improvement.{" "}
                      </p>
                    </div>
                  </Link>
                </div>
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

        <section className="quick__action-area  py-10 bg-gray-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-10 col-sm-11">
                <div className="quick__action-item action-bg-1">
                  <div className="">
                    <FaChartLine className="text-white text-5xl mb-0.5" />
                    <h4 className="title text-white mb-2.5">
                      Performance Analytics
                    </h4>
                    <p className="text-gray-200">
                      Track your progress with detailed analytics. Understand
                      your strengths and weaknesses to strategize better.
                    </p>

                    <div className="tg-button-wrap">
                      <Link href="/contact" className="btn white-btn tg-svg">
                        <span className="text">Register Now</span>{" "}
                        <span
                          className="svg-icon"
                          id="reg-btn"
                          data-svg-icon=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-10 col-sm-11">
                <div
                  className="quick__action-item action-bg-2"
                  data-background="/quick_action02.jpg"
                >
                  <div className="">
                    <FaChalkboardTeacher className="text-white text-5xl mb-0.5" />
                    <h4 className="title text-white mb-2.5">Expert Guidance</h4>
                    <p className="text-gray-200">
                      Learn from top educators and industry experts through live
                      classes, doubt-clearing sessions, and personalized
                      mentoring.
                    </p>
                    <div className="tg-button-wrap">
                      <Link href="/about-us" className="btn white-btn tg-svg">
                        <span className="text">Discover Now</span>{" "}
                        <span
                          className="svg-icon"
                          id="discover-btn"
                          data-svg-icon="/assets/img/icons/btn-arrow.svg"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonials Section */}
        <Testimonial3 />

        {/* contact section */}
        <Cta1 />

        <div className="bg-[#061e43]">
          <Footer1 />
        </div>
      </main>
    </>
  );
};

export default TalentExamWebpage;
