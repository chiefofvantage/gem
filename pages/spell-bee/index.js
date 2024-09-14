// primary :#1363df
// sec: #082a5e
// text: #39557e

import {
  SlideFromRightAndFadeIn,
  SlideFromLeftAndFadeIn,
  FadeIn,
  SlideFromBottomAndFadeIn,
} from "@/components/animation/animation";
import Footer1 from "@/components/layout/footer/Footer1";
import Header1 from "@/components/layout/header/Header1";
import Layout from "@/components/layout/Layout";
import { FaRegEdit } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaPenFancy } from "react-icons/fa";
import { FaClipboardCheck } from "react-icons/fa";

import Cta1 from "@/components/sections/Cta1";
import Head from "next/head";
import Link from "next/link";
import { FaGlobe, FaLanguage, FaMoneyBillWave } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import {
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiNumber5,
} from "react-icons/ri";

const SpellBee = () => {
  return (
    <Layout headerStyle={2} footerStyle={1} isSpellBee={true}>
      <Head>
        <title>Spell Bee | Grey Matter solutions</title>
        <meta property="og:title" content="Spell Bee" key="title" />
      </Head>
      {/* 1200px */}
      <main className="overflow-hidden">
        {/* hero section */}
        <section
          className="banner-area-two  max-w-7xl py-28 mx-auto"
          data-background="/assets/img/banner/banner_bg02.jpg"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <SlideFromLeftAndFadeIn>
                  <div className="banner__content-two flex flex-col items-center lg:items-start">
                    <img
                      src="/assets/img/banner/banner_shape02.png"
                      alt="shape"
                      className="shape"
                      data-aos="zoom-in-right"
                      data-aos-delay={1200}
                    />
                    <h3 className="title tg-svg">
                      <span className="position-relative">
                        <span
                          className="svg-icon"
                          id="svg-2"
                          data-svg-icon="assets/img/icons/title_shape.svg"
                        />
                        SpellBee:
                      </span>
                      Unleash Your <br /> Word <span>Power</span>
                    </h3>

                    <p className="max-w-md md:text-left text-center lg:text-left text-white/80">
                      A Spelling Bee is a competition where contestants spell
                      various words. It enhances language skills, boosts
                      confidence, and promotes self-motivated learning.
                    </p>

                    <button className="btn btn-primary w-full max-w-sm">
                      Register Now
                    </button>
                  </div>
                </SlideFromLeftAndFadeIn>
              </div>
              <div className="col-lg-6">
                <div className="banner__images-two">
                  <img
                    src="/assets/img/banner/banner_shape03.png"
                    alt="shape"
                    className="shape"
                    data-aos="zoom-in-down"
                    data-aos-delay={800}
                  />
                  <img
                    src="/assets/img/banner/banner_shape04.png"
                    alt="shape"
                    className="shape"
                    data-aos="zoom-in-left"
                    data-aos-delay={1200}
                  />
                  <div className="flex gap-6 justify-center w-full">
                    <div
                      className="banner__images-col w-full sm:w-60"
                      data-aos="fade-up"
                      data-aos-delay={200}
                    >
                      <img
                        src="/spell-bee/blog_thumb04.jpeg"
                        alt="img"
                        className="rounded-md h-96 w-full sm:w-60 object-cover object-center"
                      />
                    </div>
                    <div className=" hidden sm:flex flex-col gap-6">
                      <img
                        src="/assets/img/banner/banner_img02.png"
                        alt="img"
                        className="rounded-md h-1/2 object-cover object-center"
                        data-aos="fade-left"
                        data-aos-delay={300}
                      />
                      <img
                        src="/assets/img/banner/banner_img03.png"
                        alt="img"
                        className="rounded-md h-1/2 object-cover object-center"
                        data-aos="fade-left"
                        data-aos-delay={400}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src="/assets/img/banner/banner_shape01.png"
            alt="shape"
            className="banner__two-shape alltuchtopdown"
          />
        </section>
        {/* What is spell bee */}

        <section id="what-is-spell-bee" className=" bg-slate-100 p-5 py-10">
          <div className="flex flex-col gap-5 relative max-w-7xl mx-auto">
            {/* section heading */}
            <h2 className="text-2xl sm:text-4xl font-semibold">
              What is
              <img
                src="/spell-bee-1.png"
                height={45}
                width={45}
                alt="spell-bee"
                className="inline-block translate-y-3"
              />
              <span className="text-[#1363df]">Spell bee?</span>
            </h2>
            {/* section content */}
            <div className="flex flex-col md:flex-row gap-10 items-center md:justify-center">
              <div className="relative ">
                <SlideFromLeftAndFadeIn>
                  <img
                    src="/students.jpg"
                    alt="student"
                    className="rounded object-cover object-center h-80"
                    fill
                  />
                </SlideFromLeftAndFadeIn>
              </div>
              <SlideFromRightAndFadeIn>
                <div className="flex flex-col gap-6 pl-5 sm:pl-0">
                  <div className="max-w-lg space-y-2">
                    <h3 className="font-semibold text-[#082a5e]">
                      Enhancement of Language Skills
                    </h3>

                    <p className="text-sm text-[#39557e]">
                      The Spelling Bee competition helps enhance several aspects
                      of students English language skills, such as vocabulary,
                      spelling, comprehension, listening, and writing abilities.
                    </p>
                  </div>

                  <div className="max-w-lg space-y-2">
                    <h3 className="font-semibold text-[#082a5e]">
                      Confidence Building
                    </h3>

                    <p className="text-sm text-[#39557e]">
                      The Spelling Bee competition helps enhance several aspects
                      of students English language skills, such as vocabulary,
                      spelling, comprehension, listening, and writing abilities.
                    </p>
                  </div>

                  <div className="max-w-lg space-y-2">
                    <h3 className="font-semibold text-[#082a5e]">
                      Motivation and Self-Based Learning
                    </h3>

                    <p className="text-sm text-[#39557e]">
                      The Spelling Bee competition helps enhance several aspects
                      of students English language skills, such as vocabulary,
                      spelling, comprehension, listening, and writing abilities.
                    </p>
                  </div>
                </div>
              </SlideFromRightAndFadeIn>
            </div>
          </div>
        </section>

        {/* Benefits of spell bee */}
        <section
          id="benefits"
          className="flex flex-col gap-5 px-2 py-10 relative items-center  max-w-7xl mx-auto"
        >
          {/* section heading */}
          <h2 className="text-4xl font-semibold">
            <span className="text-[#1363df]">Benefits of</span> Spell bee
            <img
              src="/spell-bee-1.png"
              height={45}
              width={45}
              alt="spell-bee"
              className="inline-block translate-y-3"
            />
          </h2>

          <div className="row justify-content-center">
            <div className="col-lg-6">
              <SlideFromLeftAndFadeIn>
                <div className="blog__post-item-two">
                  <div className="blog__post-thumb-two overflow-hidden rounded-md">
                    <img
                      src="/spell-bee/blog_thumb02.jpg"
                      alt="img"
                      className="hover:scale-110"
                    />
                  </div>
                  <div className="blog__post-content-two">
                    <div href="#" className="cat">
                      Builds Confidence
                    </div>
                    <h4 className="title">
                      <div href="/blog-details">
                        Boosts confidence through public speaking and applause
                        for efforts.{" "}
                      </div>
                    </h4>
                  </div>
                </div>
              </SlideFromLeftAndFadeIn>
            </div>
            <div className="col-lg-6">
              <SlideFromRightAndFadeIn>
                <div className="blog__post-item-three shine__animate-item">
                  <div className="blog__post-thumb-three">
                    <div href="/blog-details" className="shine__animate-link">
                      <img src="/spell-bee/blog_thumb04.jpeg" alt="img" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="bg-[#e7effc] text-[#1363df] text-sm rounded px-2.5 py-1.5 uppercase font-thin w-fit">
                      Enhanced Vocabulary
                    </h3>

                    <p className="text-[#39557e] ">
                      Spelling bee participation helps children gain competency
                      over vocabulary, improving their reading and writing
                      skills.{" "}
                    </p>
                  </div>
                </div>
              </SlideFromRightAndFadeIn>
              <SlideFromRightAndFadeIn>
                <div className="blog__post-item-three shine__animate-item">
                  <div className="blog__post-thumb-three">
                    <div href="/blog-details" className="shine__animate-link">
                      <img src="/spell-bee/blog_thumb03.jpeg" alt="img" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="bg-[#e7effc] text-[#1363df] text-sm rounded px-2.5 py-1.5 uppercase font-thin w-fit">
                      Improves Cognitive Skills
                    </h3>

                    <p className="text-[#39557e] ">
                      It helps develop cognitive skills, memory, and better
                      learning abilities, beneficial for higher education.
                    </p>
                  </div>
                </div>
              </SlideFromRightAndFadeIn>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="categories-area mb-60" id="categories">
          <div className="container">
            <div className="row align-items-center justify-content-center mb-55">
              <div className="col-xl-7 col-lg-8 col-md-10">
                <SlideFromLeftAndFadeIn>
                  <div className="categories__title-wrap text-center text-lg-start m-0">
                    <div className="section__title mb-0">
                      <span className="sub-title">Categories</span>
                      <h2 className="title tg-svg">
                        Spell Bee{" "}
                        <span className="position-relative">
                          <span
                            className="svg-icon"
                            id="svg-5"
                            data-svg-icon="assets/img/icons/title_shape.svg"
                          />
                          Categories
                        </span>
                      </h2>
                    </div>
                    <p className="mb-0">
                      Our Spelling Bee features 6 distinct categories, tailored
                      to various grade levels from Class 1 to Class 10. Each
                      category provides age-appropriate challenges, fostering
                      growth and learning for every participant.
                    </p>
                  </div>
                </SlideFromLeftAndFadeIn>
              </div>
              <div className="col-xl-5 col-lg-4 col-md-6"></div>
            </div>
            <FadeIn delay={0.2}>
              <div className="row justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-3">
                <div className="col">
                  <div className="categories__item-two tg-svg">
                    <Link href="/courses">
                      <div className="icon">
                        <RiNumber1 />
                      </div>
                      <div className="info">
                        <span className="name">CATEGORY 1</span>
                        <span className="courses">Class 1 & 2</span>
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
                      <div className="info">
                        <span className="name">CATEGORY 2</span>
                        <span className="courses">Class 3 & 4</span>
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
                      <div className="info">
                        <span className="name">CATEGORY 3</span>
                        <span className="courses">Class 5 & 6</span>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col">
                  <div className="categories__item-two tg-svg">
                    <Link href="/courses">
                      <div className="icon">
                        <RiNumber4 />
                      </div>
                      <div className="info">
                        <span className="name">CATEGORY 4</span>
                        <span className="courses">Class 7 & 8</span>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col">
                  <div className="categories__item-two tg-svg">
                    <Link href="/courses">
                      <div className="icon">
                        <RiNumber5 />
                      </div>
                      <div className="info">
                        <span className="name">CATEGORY 5</span>
                        <span className="courses">Class 9 & 10</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Process of the Spell Bee */}
        <section
          id="process-of-the-spell-bee"
          className="categories-area py-10 bg-white overflow-hidden"
        >
          <div className="container">
            <div className="row align-items-center justify-content-center mb-55">
              <div className="col-xl-7 col-lg-8 col-md-10">
                <SlideFromLeftAndFadeIn>
                  <div className="categories__title-wrap text-center text-lg-start m-0">
                    <div className="section__title mb-0">
                      <span className="sub-title">Spell Bee Process</span>
                      <h2 className="title tg-svg">
                        Process of the{" "}
                        <span className="position-relative">
                          <span
                            className="svg-icon"
                            id="svg-5"
                            data-svg-icon="assets/img/icons/title_shape.svg"
                          />
                          Spell Bee
                        </span>
                      </h2>
                    </div>
                    <p className="mb-0">
                      The Spell Bee competition begins with registration,
                      followed by the provision of study materials to aid in
                      preparation. After the exam, results are announced within
                      two weeks, offering a structured and rewarding experience
                      for participants.
                    </p>
                  </div>
                </SlideFromLeftAndFadeIn>
              </div>
              <div className="col-xl-5 col-lg-4 col-md-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
              <SlideFromLeftAndFadeIn>
                <div className="col h-full">
                  <div className="categories__item-two tg-svg h-full">
                    <Link href="/" className="h-full">
                      <div className="icon">
                        <FaRegEdit />
                      </div>
                      <div className="flex flex-col gap-2.5">
                        <h3 className="text-xl">1. Registration</h3>
                        <span className="sm:text-sm text-xs text-[#5a7093]">
                          Participants can register for the competition through
                          their schools or online platforms. Registration
                          ensures the participants details are recorded for the
                          upcoming event.
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
                        <FaBook />
                      </div>
                      <div className="flex flex-col gap-2.5">
                        <h3 className=" text-lg sm:text-xl">
                          2. Providing Books
                        </h3>
                        <span className="text-xs sm:sm:text-sm  text-[#5a7093]">
                          After registration, study materials and guides are
                          provided to participants to help them prepare for the
                          competition. These resources cover essential
                          vocabulary, spelling patterns, and language rules.
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
                        <FaPenFancy />
                      </div>
                      <div className="flex flex-col gap-2.5">
                        <h3 className="sm:text-xl  text-lg">3. Exam</h3>
                        <span className="sm:text-sm text-xs text-[#5a7093]">
                          The competition is conducted in multiple levels,
                          starting with the school-level exam. Participants
                          spell words on stage or in written format, testing
                          their language proficiency.
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </SlideFromLeftAndFadeIn>
              <SlideFromRightAndFadeIn>
                <div className="col h-full">
                  <div className="categories__item-two tg-svg h-full">
                    <Link href="/" className="h-full">
                      <div className="icon">
                        <FaClipboardCheck />
                      </div>
                      <div className="flex flex-col gap-2.5">
                        <h3 className="sm:text-xl  text-lg">
                          4. Exam Results{" "}
                        </h3>
                        <span className="sm:text-sm text-xs text-[#5a7093]">
                          Results are announced two weeks after the exam,
                          allowing time for evaluation. Participants receive
                          feedback, and those with high scores are awarded
                          certificates and progress to the next level.
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

        {/* Location */}
        <SlideFromBottomAndFadeIn delay={0.2}>
          <section
            className="mb-60"
            data-background="/assets/img/bg/fact_bg.jpg"
          >
            <div className="container py-5" id="exam-schedule">
              <div className="row justify-content-center">
                <div className="col-xl-5 col-lg-7 col-md-9">
                  <div className="section__title text-center mb-50">
                    <span className="sub-title">Exam Schedule</span>
                    <h2 className="title tg-svg">
                      Levels of the Competition{" "}
                      <span className="position-relative">
                        <span
                          className="svg-icon"
                          id="fact-title"
                          data-svg-icon="assets/img/icons/title_shape.svg"
                        />
                        &
                      </span>{" "}
                      <br />
                      Its Schedule{" "}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5">
                <div className="">
                  <div className="fact__item-two">
                    <div className="fact__icon-two">
                      <i className="flaticon-webinar" />
                    </div>
                    <div className="fact__content-two">
                      <h3>School level</h3>
                    </div>
                    <p className="mt-2">
                      School level competition would be conducted in your school
                      between first week of August and last week of October, as
                      per the date allotted to the competition organizer by the
                      school authority
                    </p>

                    <p className="m-0">Awards:</p>
                    <ul className="list-disc pl-6">
                      <li className="">Top 3: Winner Certificates</li>
                      <li>Above 50%: Commendation Certificates </li>
                      <li>Below 50%: Participation Certificates </li>
                    </ul>
                  </div>
                </div>
                <div className="">
                  <div className="fact__item-two">
                    <div className="fact__icon-two">
                      <i className="flaticon-graduates" />
                    </div>
                    <div className="fact__content-two">
                      <h3>District level</h3>
                    </div>
                    <p className="mt-2">
                      District level competition also would be conducted in your
                      school between first week of November and last week of
                      December, as per the date allotted to the competition
                      organizer by the school authority
                    </p>

                    <p className="m-0">Awards:</p>
                    <ul className="list-disc pl-6">
                      <li>Top 3: Winner Certificates & Medals</li>
                      <li>Above 60%: Commendation Certificates & Medals </li>
                      <li>Below 60%: Participation Certificates</li>
                    </ul>
                  </div>
                </div>
                <div className="h-full">
                  <div className="fact__item-two h-full">
                    <div className="fact__icon-two">
                      <i className="flaticon-countries" />
                    </div>
                    <div className="fact__content-two">
                      <h3>State Level</h3>
                    </div>
                    <p className="mt-2">
                      State level would be conducted in the month of January /
                      February, the venue and date allocated would be intimated
                      to the participant through a notice well in advance
                      through their own school or by mail or message.
                    </p>

                    <p className="m-0">Awards:</p>
                    <ul className="list-disc pl-6">
                      <li>Top 3: Winner Certificates & Trophies</li>
                      <li>Above 60%: Commendation Certificates & Medals</li>
                      <li>Below 60%: Participation Certificates</li>
                    </ul>
                  </div>
                </div>
                <div className="h-full">
                  <div className="fact__item-two h-full">
                    <div className="fact__icon-two">
                      <i className="flaticon-trophy" />
                    </div>
                    <div className="fact__content-two">
                      <h3>National Level</h3>
                    </div>
                    <p className="mt-2">
                      The national level would be conducted in the month of
                      April/May (After the Academic exams); the venue and date
                      allocated would be intimated to the participant through a
                      notice well in advance through their own school or by mail
                      or message
                    </p>

                    <p className="m-0">Awards:</p>
                    <ul className="list-disc pl-6">
                      <li>Top 2: Certificates, Trophies & Cash Prize</li>
                      <li>Top 3-15: Certificates, Trophies & Gift Hampers</li>
                      <li>Top 16-50: Certificates, Medals & Gifts</li>
                      <li>Others: Participation Certificates</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SlideFromBottomAndFadeIn>
        {/* contact section */}
        <Cta1
          primaryHeading={"Unleash Your Word Power and Excel"}
          description={
            "Don't miss this chance to boost your language skills, build confidence, and engage in self-motivated learning. Register for the Spell Bee and become a spelling champion!"
          }
          buttonText={"Join Open Compensation"}
        />
      </main>
    </Layout>
  );
};
export default SpellBee;
