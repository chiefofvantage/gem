import Footer1 from "@/components/layout/footer/Footer1";
import Header1 from "@/components/layout/header/Header1";
import Cta1 from "@/components/sections/Cta1";
import Testimonial3 from "@/components/sections/Testimonial3";
import img1 from "@/public/farm-guru-1.png";
import img2 from "@/public/farm-guru-2.png";
import img3 from "@/public/farm-guru-3.png";
import Link from "next/link";
import {
  FaAward,
  FaBook,
  FaBookOpen,
  FaBrain,
  FaCalendarAlt,
  FaChalkboardTeacher,
  FaChartLine,
  FaClipboardCheck,
  FaClock,
  FaDollarSign,
  FaGlobe,
  FaHeadphones,
  FaLaptop,
  FaQuestionCircle,
  FaRocket,
  FaTrophy,
  FaUsers,
} from "react-icons/fa";

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

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <div className="text-blue-500 mb-4 flex justify-center">{icon}</div>
    <h4 className="text-xl font-semibold mb-2">{title}</h4>
    <p className="text-left mx-auto">{description}</p>
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
          <div className="flex w-full">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg -8">
                  <div className="slider__content">
                    <span
                      className="sub-title"
                      data-delay-in=".2"
                      data-duration-in="1.5"
                    >
                      Empowering young minds, shaping future innovators
                    </span>
                    <h2
                      className="text-[2.8rem] tg-svg mb-2"
                      data-delay-in=".4"
                      data-duration-in="1.5"
                    >
                      A chance for your child <br />
                      <span className="position-relative text-[#1363df]">
                        <span
                          className="svg-icon"
                          id="slider-svg02"
                          data-svg-icon="assets/img/icons/title_shape.svg"
                        />
                        to explore NASA!
                      </span>
                    </h2>
                    <p className="max-w-md mt-4 leading-6">
                      Unlock amazing opportunities with the Future Kids Talent
                      Test, which recognizes excellence and rewards with an
                      educational tour to NASA.
                    </p>
                    <div
                      className="tg-button-wrap"
                      data-delay-in=".8"
                      data-duration-in="1.5"
                    >
                      <Link href="/courses" className="btn tg-svg">
                        <span className="text">Register Today</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute right-0 top-20 w-1/2 h-full">
              <img
                src="/exam/hero-img.jpg"
                className="rounded object-cover object-center -z-40"
              />
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

        <section className="py-16 overflow-hidden">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-5 col-lg-6">
                <div className="about__title-wrap">
                  <div className="section__title">
                    <span className="sub-title">About FKTT</span>
                    <h2 className="title tg-svg text-xl">
                      About the
                      <span className="position-relative">
                        <span
                          className="svg-icon"
                          id="about-svg"
                          data-svg-icon="assets/img/icons/title_shape.svg"
                        />
                        Future Kids Talent Test
                      </span>{" "}
                    </h2>
                  </div>
                  <p className="">
                    The Future Kids Talent Test (FKTT) is a state-level program
                    designed to identify and nurture exceptional academic talent
                    among students. It offers a comprehensive assessment of
                    skills, recognizing high-potential students and their
                    achievements.
                  </p>
                  <p>
                    FKTT provides students the chance to compete at a state
                    level, gaining valuable exposure and motivation. The program
                    supports academic growth, helping students reach their
                    fullest potential and preparing them for future success.
                  </p>
                </div>
              </div>
              <div className="col-xl-7 col-lg-6 col-md-11">
                <div className="about__images-wrap">
                  <div className="flex flex-col sm:flex-row gap-5">
                    <img
                      src="/exam/2.jpeg"
                      alt="img"
                      className="h-[25rem] object-cover object-center rounded-md"
                    />
                    <img
                      src="/exam/3.jpeg"
                      alt="img"
                      className="h-[25rem] object-cover object-center rounded-md"
                    />
                  </div>
                  {/* <div className="column">
                    <img
                      src="/about-2.png"
                      alt="img"
                      className="h-[12.5rem] object-cover object-center"
                    />
                    <img
                      src="/about-1.png"
                      alt="img"
                      className="h-[12.5rem] object-cover object-center"
                    />
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
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Exams Section */}
        <section className="py-16">
          <div className="container mx-auto">
            <div className="container">
              <div className="row align-items-center justify-content-center mb-55">
                <div className="col-xl-7 col-lg-8 col-md-10">
                  <div className="categories__title-wrap text-center text-lg-start m-0">
                    <div className="section__title mb-0">
                      <span className="sub-title">Test Subjects</span>
                      <h2 className="title tg-svg">
                        Explore the
                        <span className="position-relative">
                          <span
                            className="svg-icon"
                            id="svg-5"
                            data-svg-icon="assets/img/icons/title_shape.svg"
                          />
                          Test Subjects
                        </span>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-4 col-md-6">
                  <div className="tg-button-wrap mt-4 mt-lg-0 justify-content-center justify-content-lg-end"></div>
                </div>
              </div>
              <div className="row justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-3"></div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={<FaBookOpen size={40} />}
                title="Mathematics"
                description="Enhance problem-solving and analytical skills through various mathematical concepts and challenges."
              />
              <FeatureCard
                icon={<FaGlobe size={40} />}
                title="Science"
                description="Deepen understanding of scientific principles, theories, and their practical applications."
              />
              <FeatureCard
                icon={<FaAward size={40} />}
                title="General Knowledge"
                description="Expand awareness of current affairs, history, geography, and cultural knowledge."
              />
              <FeatureCard
                icon={<FaBrain size={40} />}
                title="Mental Ability"
                description="Develop logical reasoning, cognitive skills, and critical thinking through diverse mental challenges."
              />
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
                    <span className="sub-title">Benefits</span>
                    <h2 className="title tg-svg">
                      Exclusive
                      <span className="position-relative">
                        <span
                          className="svg-icon"
                          id="svg-5"
                          data-svg-icon="assets/img/icons/title_shape.svg"
                        />
                        Program Benefits
                      </span>
                    </h2>
                  </div>
                  <p className="mb-0">
                    Gain exclusive perks including a NASA tour for top
                    performers, networking with talented peers, year-round
                    support with resources and mentorship, and opportunities for
                    academic scholarships.{" "}
                  </p>
                </div>
              </div>
              <div className="col-xl-5 col-lg-4 col-md-6"></div>
            </div>
            <div className="row justify-content-center row-cols-1 row-cols-sm-2">
              <div className="col">
                <div className="categories__item-two tg-svg">
                  <Link href="/">
                    <div className="icon">
                      <FaRocket />
                    </div>
                    <div className="space-y-2">
                      <h3>NASA Tour</h3>
                      <p className="text-sm text-[#5a7093] ">
                        Top performers may win an educational trip to NASA.
                        Experience a unique opportunity to explore space science
                        firsthand.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col">
                <div className="categories__item-two tg-svg">
                  <Link href="/">
                    <div className="icon">
                      <FaUsers />
                    </div>
                    <div className="space-y-2">
                      <h3> Networking</h3>
                      <p className="text-sm text-[#5a7093] ">
                        Connect with like-minded talented students. Build
                        lasting relationships and collaborate on exciting
                        projects.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col">
                <div className="categories__item-two tg-svg">
                  <Link href="/">
                    <div className="icon">
                      <FaCalendarAlt />
                    </div>
                    <div className="space-y-2">
                      <h3>Year-round Support</h3>
                      <p className="text-sm text-[#5a7093] ">
                        Access educational resources and mentorship throughout
                        the year. Receive guidance to help you excel in your
                        academic journey.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col">
                <div className="categories__item-two tg-svg">
                  <Link href="/">
                    <div className="icon">
                      <FaDollarSign />
                    </div>
                    <div className="space-y-2">
                      <h3>Scholarships</h3>
                      <p className="text-sm text-[#5a7093] ">
                        Explore opportunities for academic scholarships. Receive
                        financial support to further your education and achieve
                        your goals.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col">
                <div className="categories__item-two tg-svg">
                  <Link href="/">
                    <div className="icon">
                      <FaHeadphones />
                    </div>
                    <div className="space-y-2">
                      <h3>Dedicated Support</h3>
                      <p className="text-sm text-[#5a7093] ">
                        Receive ongoing support from our team of academic
                        counselors and technical experts throughout your
                        learning journey.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col">
                <div className="categories__item-two tg-svg">
                  <Link href="/">
                    <div className="icon">
                      <FaBookOpen />
                    </div>
                    <div className="space-y-2">
                      <h3>Structured Learning Path</h3>
                      <p className="text-sm text-[#5a7093] ">
                        Follow a well-designed curriculum that ensures
                        systematic coverage of all important topics and
                        concepts.
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
        <Cta1
          primaryHeading="Join the Future Kids Talent Test"
          description="Unlock their potential and set them on the path to success with the Future Kids Talent Test. Don't miss this chance to discover and nurture their unique talents."
          buttonText="Register Now"
        />

        <div className="bg-[#061e43]">
          <Footer1 />
        </div>
      </main>
    </>
  );
};

export default TalentExamWebpage;
