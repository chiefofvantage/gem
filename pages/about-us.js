import {
  SlideFromBottomAndFadeIn,
  SlideFromLeftAndFadeIn,
  SlideFromRightAndFadeIn,
} from "@/components/animation/animation";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Footer1 from "@/components/layout/footer/Footer1";
import Header1 from "@/components/layout/header/Header1";
import Layout from "@/components/layout/Layout";
import Head from "next/head";
import Link from "next/link";
import {
  FaGraduationCap,
  FaUser,
  FaBuilding,
  FaRegClipboard,
} from "react-icons/fa";

const About = ({ image, name, job, aboutHim, tags }) => {
  return (
    <section className="py-4">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="instructor-details-wrap">
              <div className="instructor-details-img">
                <img src={image} alt="img" />
              </div>
              <div className="instructor-details-content">
                <div className="content-top">
                  <div className="left-side-content">
                    <h2 className="title">{name} </h2>
                    <span>{job}</span>
                  </div>
                  <div className="instructor-details-social">
                    <ul className="list-wrap">
                      <li>
                        <Link href="#">
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-whatsapp" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-youtube" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="list-wrapc flex gap-2.5 flex-wrap">
                  {tags.map((tag) => (
                    <p className="bg-[#e7effc] text-[#1363df] px-2 rounded">
                      {tag}
                    </p>
                  ))}
                </div>
                <hr />
                <div className="bio-content">
                  <h4 className="title">Short Bio:</h4>
                  <p>{aboutHim}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const data = [
  {
    image: "/about-us/1.jpeg",
    name: "Mr. Veeraraghavan",
    job: "Sales and Marketing Expert",
    aboutHim:
      "A Science Graduate with a PG Diploma in Global Strategic Management, Mr. Veeraraghavan brings over 20 years of experience in Sales and Marketing across various industries including Pharma, FMCG, Education, and Training & Testing.",
    tags: [
      "Multi-tasking",
      "Business",
      "Development",
      "Target-oriented",
      "Approach",
    ],
  },
  {
    image: "/about-us/2.jpeg",
    name: "Mr. Rufus",
    job: "Team Building and Training Specialist",
    aboutHim:
      "With a Science degree and an MBA specializing in Marketing and HR, Mr. Rufus has 22 years of experience in Sales and Marketing. He has worked with leading Educational Institutions, Software Corporations, and Training Firms.",
    tags: [
      "Team Building",
      "Training",
      "Event Management",
      "Government Projects",
    ],
  },
  {
    image: "/about-us/3.jpeg",
    name: "Mr. Prakash",
    job: "Multi-industry Professional",
    aboutHim:
      "A Science graduate with a Post Graduate degree in Computer Applications, Mr. Prakash has 15 years of experience in Sales and Marketing across Education, Insurance, and Training & Testing industries.",
    tags: [
      "Customer-centric Approach",
      "Real Estate Development",
      "Business Management",
    ],
  },
];

export default function AboutUs() {
  return (
    <Layout headerStyle={1} footerStyle={1}>
      <Head>
        <title>About Us | Grey Matter solutions</title>
        <meta property="og:title" content="About Us" key="title" />
      </Head>
      <div className="mt-24 overflow-hidden">
        <Breadcrumb breadcrumbTitle={"About Us"} />

        <div>
          {data.map(({ aboutHim, image, job, name, tags }, index) => (
            <SlideFromBottomAndFadeIn delay={0.1 * index}>
              <About
                job={job}
                name={name}
                tags={tags}
                aboutHim={aboutHim}
                image={image}
              />
            </SlideFromBottomAndFadeIn>
          ))}
        </div>

        <section className="categories-area py-10 bg-white overflow-hidden">
          <div className="container overflow-hidden">
            <div className="row align-items-center justify-content-center mb-55">
              <div className="col-xl-7 col-lg-8 col-md-10">
                <SlideFromLeftAndFadeIn>
                  <div className="categories__title-wrap text-center text-lg-start m-0">
                    <div className="section__title mb-0">
                      <span className="sub-title">
                        Worldwide Our Achievement
                      </span>
                      <h2 className="title tg-svg">
                        Our{" "}
                        <span className="position-relative">
                          <span
                            className="svg-icon"
                            id="svg-5"
                            data-svg-icon="assets/img/icons/title_shape.svg"
                          />
                          Achievement
                        </span>
                      </h2>
                    </div>
                    <p className="mb-0">
                      With over 25K students benefited, 100+ partner
                      institutions, and 75+ years of combined experience, we
                      deliver unparalleled educational support and
                      opportunities.
                    </p>
                  </div>
                </SlideFromLeftAndFadeIn>
              </div>
              <div className="col-xl-5 col-lg-4 col-md-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 overflow-hidden">
              <SlideFromLeftAndFadeIn>
                <div className="col h-full">
                  <div className="categories__item-two tg-svg h-full">
                    <Link href="/" className="h-full">
                      <div className="icon">
                        <FaUser />
                      </div>
                      <div className="flex flex-col gap-2.5">
                        <h3 className="text-xl">25K+ Students Benefited</h3>
                        <span className="sm:text-sm text-xs text-[#5a7093]">
                          Over 25,000 students have achieved their academic
                          goals through our programs.
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </SlideFromLeftAndFadeIn>
              <SlideFromRightAndFadeIn>
                <div className="col h-full">
                  <div className="categories__item-two tg-svg h-full">
                    <Link href="/" className="h-full ">
                      <div className="icon">
                        <FaBuilding />
                      </div>
                      <div className="flex flex-col gap-2.5">
                        <h3 className=" text-lg sm:text-xl">
                          100+ Partner Institutions
                        </h3>
                        <span className="text-xs sm:sm:text-sm text-[#5a7093]">
                          We collaborate with more than 100 esteemed
                          institutions worldwide.
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </SlideFromRightAndFadeIn>

              <SlideFromLeftAndFadeIn>
                <div className="col h-full">
                  <div className="categories__item-two tg-svg h-full">
                    <Link href="/" className="h-full">
                      <div className="icon">
                        <FaGraduationCap />
                      </div>
                      <div className="flex flex-col gap-2.5">
                        <h3 className="sm:text-xl  text-lg">
                          75+ Years of Experience
                        </h3>
                        <span className="sm:text-sm text-xs text-[#5a7093]">
                          Our team boasts over 75 years of collective experience
                          in the education sector.
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </SlideFromLeftAndFadeIn>

              <SlideFromRightAndFadeIn>
                <div className="col h-full">
                  <div className="categories__item-two tg-svg h-full">
                    <Link href="/" className="h-full ">
                      <div className="icon">
                        <FaRegClipboard />
                      </div>
                      <div className="flex flex-col gap-2.5">
                        <h3 className=" text-lg sm:text-xl">
                          1500+ Tests Conducted
                        </h3>
                        <span className="text-xs sm:sm:text-sm text-[#5a7093]">
                          We have successfully conducted over 1500 tests,
                          ensuring thorough assessment and evaluation for our
                          students.
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </SlideFromRightAndFadeIn>
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

        {/* <section
          className="fact-area fact-bg"
          data-background="/assets/img/bg/fact_bg.jpg"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-5 col-lg-7 col-md-9">
                <div className="section__title text-center mb-50">
                  <span className="sub-title"></span>
                  <h2 className="title tg-svg">
                    Our{" "}
                    <span className="position-relative">
                      <span
                        className="svg-icon"
                        id="fact-title"
                        data-svg-icon="assets/img/icons/title_shape.svg"
                      />
                      Achievement
                    </span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="fact__item-two text-center">
                  <div className="fact__icon-two">
                    <i className="flaticon-webinar" />
                  </div>
                  <div className="fact__content-two">
                    <h3 className="count">25K+ </h3>
                    <p>Students Benefited</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="fact__item-two text-center">
                  <div className="fact__icon-two">
                    <i className="flaticon-graduates" />
                  </div>
                  <div className="fact__content-two">
                    <h3 className="count">100+</h3>
                    <p>Partner Institutions</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="fact__item-two text-center">
                  <div className="fact__icon-two">
                    <i className="flaticon-countries" />
                  </div>
                  <div className="fact__content-two">
                    <h3 className="count">75+</h3>
                    <p>Years of Combined Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* <section className="cta-area-two bg-[#061e43s] overflow-hidden">
          <div
            className="cta__bg"
            data-background="/assets/img/bg/cta_bg.jpg"
          />
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-10">
                <div className="cta__content">
                  <p>ARE YOU READY FOR THIS OFFER</p>
                  <h2 className="title">50% Offer For Very First 50</h2>
                  <h5 className="sub-title">Student’s Mentors</h5>
                  <div className="tg-button-wrap justify-content-center">
                    <Link href="/contact" className="btn tg-svg">
                      <span className="text">Become a Student</span>{" "}
                      <span
                        className="svg-icon"
                        id="cta-btn-2"
                        data-svg-icon="assets/img/icons/btn-arrow.svg"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cta__shapes">
            <img
              src="/assets/img/objects/cta_shape001.svg"
              alt="img"
              className="position-absolute"
              data-aos="fade-down-right"
              data-aos-delay={300}
            />
            <img
              src="/assets/img/objects/cta_shape002.png"
              alt="img"
              className="position-absolute"
            />
            <img
              src="/assets/img/objects/cta_shape003.svg"
              alt="img"
              className="position-absolute"
              data-aos="fade-up-left"
              data-aos-delay={300}
            />
          </div>
        </section> */}
        {/* <section className="events-area position-relative section-pt-120 section-pb-90">
          <div className="container">
            <div className="section__title-wrap mb-55">
              <div className="row align-items-center gap-4 gap-md-0">
                <div className="col-md-8">
                  <div className="section__title text-center text-md-start">
                    <span className="sub-title">Featured Events</span>
                    <h2 className="title tg-svg">
                      Upcoming{" "}
                      <span className="position-relative">
                        <span
                          className="svg-icon"
                          id="event-svg"
                          data-svg-icon="assets/img/icons/title_shape.svg"
                        />
                        Events
                      </span>
                    </h2>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="tg-button-wrap justify-content-center justify-content-md-end">
                    <Link href="/events" className="btn btn-border tg-svg">
                      <span className="text">Our All Events</span>{" "}
                      <span
                        className="svg-icon"
                        id="events-btn"
                        data-svg-icon="assets/img/icons/btn-arrow.svg"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="events__item shine__animate-item">
                  <div className="events__item-thumb">
                    <Link
                      href="/events-details"
                      className="shine__animate-link"
                    >
                      <img
                        src="/assets/img/events/event_thumb01.jpg"
                        alt="img"
                      />
                    </Link>
                    <span className="events__date">
                      <i className="flaticon-calendar-date" /> 25 May, 2023
                    </span>
                  </div>
                  <div className="events__item-content">
                    <h4 className="title">
                      <Link href="/events-details">
                        Aewe Creating Futures Through Technology Conference
                      </Link>
                    </h4>
                    <span className="location">
                      <i className="flaticon-pin-1" /> United Kingdom
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="events__item shine__animate-item">
                  <div className="events__item-thumb">
                    <Link
                      href="/events-details"
                      className="shine__animate-link"
                    >
                      <img
                        src="/assets/img/events/event_thumb02.jpg"
                        alt="img"
                      />
                    </Link>
                    <span className="events__date">
                      <i className="flaticon-calendar-date" /> 25 May, 2023
                    </span>
                  </div>
                  <div className="events__item-content">
                    <h4 className="title">
                      <Link href="/events-details">
                        Exactly How Technology Can Make Reading Better
                      </Link>
                    </h4>
                    <span className="location">
                      <i className="flaticon-pin-1" /> Tokyo Japan
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="events__item shine__animate-item">
                  <div className="events__item-thumb">
                    <Link
                      href="/events-details"
                      className="shine__animate-link"
                    >
                      <img
                        src="/assets/img/events/event_thumb03.jpg"
                        alt="img"
                      />
                    </Link>
                    <span className="events__date">
                      <i className="flaticon-calendar-date" /> 25 May, 2023
                    </span>
                  </div>
                  <div className="events__item-content">
                    <h4 className="title">
                      <Link href="/events-details">
                        Aewe Creating Futures Through Technology Conference
                      </Link>
                    </h4>
                    <span className="location">
                      <i className="flaticon-pin-1" /> New Work
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mentors__shapes">
            <img src="/assets/img/objects/mentors_shape01.png" alt="shape" />
            <img
              src="/assets/img/objects/events_shape.png"
              width={98}
              alt="shape"
            />
          </div>
        </section> */}
      </div>
    </Layout>
  );
}
