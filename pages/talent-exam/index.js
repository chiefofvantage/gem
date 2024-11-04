import {
  SlideFromBottomAndFadeIn,
  SlideFromLeftAndFadeIn,
  SlideFromRightAndFadeIn,
} from "@/components/animation/animation";
import Layout from "@/components/layout/Layout";
import Cta1 from "@/components/sections/Cta1";
import img1 from "@/public/farm-guru-1.png";
import img2 from "@/public/farm-guru-2.png";
import img3 from "@/public/farm-guru-3.png";
import Head from "next/head";
import Link from "next/link";
import { FaBalanceScale, FaPuzzlePiece, FaUsers } from "react-icons/fa";
import { FaUserGear } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";
import { GrTechnology } from "react-icons/gr";
import { IoTime } from "react-icons/io5";
import { MdAllInclusive } from "react-icons/md";
import { RiSpeakFill } from "react-icons/ri";
import { SiGoogleclassroom, SiMicrostrategy } from "react-icons/si";
const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white py-6 px-6 md:px-[15px]  rounded-lg shadow-md text-center w-[450px] md:w-[290px]">
    <SlideFromBottomAndFadeIn>
      <div className="text-blue-500 mb-4 flex justify-center ">{icon}</div>
      <h4 className="text-xl font-semibold mb-2  ">{title}</h4>
      <p className="text-left mx-auto">{description}</p>
    </SlideFromBottomAndFadeIn>
  </div>
);

const TalentExamWebpage = () => {
  const sliderImageArr = [img1, img2, img3];
  return (
    <Layout headerStyle={2} footerStyle={1}>
      <Head>
        <title>Talent Exam | Grey Matter solutions</title>
        <meta property="og:title" content="Talent Exam" key="title" />
      </Head>
      <main className="min-h-screen overflow-hidden">
        {/* hero section */}
        <div
          className="slider__item d-flex mt-16"
          data-background={sliderImageArr[0]}
        >
          <div className="flex flex-col lg:flex-row container justify-between gap-5 items-center">
            <SlideFromLeftAndFadeIn>
              <div className="">
                <div className="slider__content">
                  <span
                    className="sub-title text-sm sm:text-base"
                    data-delay-in=".2"
                    data-duration-in="1.5"
                  >
                    Inspiring educators, shaping future leaders through our
                    teacher training program.
                  </span>
                  <h2
                    className="text-2xl sm:text-[2.8rem] leading-tight tg-svg mb-2"
                    data-delay-in=".4"
                    data-duration-in="1.5"
                  >
                    A chance for educators
                    <br />
                    <span className="position-relative text-[#1363df]">
                      <span
                        className="svg-icon"
                        id="slider-svg02"
                        data-svg-icon="assets/img/icons/title_shape.svg"
                      />
                      to unlock new teaching horizons!
                    </span>
                  </h2>
                  <p className="max-w-md mt-4 leading-6">
                    Unlock incredible opportunities with the Teacher Training
                    Program, which recognizes dedication and rewards with
                    advanced teaching skills for inspiring future generations.
                  </p>
                  <div
                    className="tg-button-wrap"
                    data-delay-in=".8"
                    data-duration-in="1.5"
                  >
                    <Link
                      href="/courses"
                      className="btn tg-svg w-full lg:max-w-fit justify-center"
                    >
                      <span className="text">Register Today</span>
                    </Link>
                  </div>
                </div>
              </div>
            </SlideFromLeftAndFadeIn>
            <SlideFromRightAndFadeIn>
              <img
                src="/exam/teachersimg.jpg"
                className="rounded object-cover object-center h-80"
              />
            </SlideFromRightAndFadeIn>
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

        <section className="py-16 overflow-hidden" id="about-fktt">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-5 col-lg-6">
                <SlideFromLeftAndFadeIn>
                  <div className="about__title-wrap">
                    <div className="section__title">
                      <span className="sub-title">About TTP</span>
                      <h2 className="title tg-svg text-xl">
                        About the
                        <span className="position-relative">
                          <span
                            className="svg-icon"
                            id="about-svg"
                            data-svg-icon="assets/img/icons/title_shape.svg"
                          />
                          Teachers Training program
                        </span>{" "}
                      </h2>
                    </div>
                    <p className="">
                      A teacher training program is a program that equips
                      teachers with techniques and modern pedagogy strategies
                      that helps them to better connect with, manage, and teach
                      to their students in a manner which ensures that all
                      students are learning and benefitting.
                    </p>
                    <p>
                      Training teachers is essential in the 21st century, as
                      today’s students struggle with traditional methods. Modern
                      students need personalized education that aligns with
                      their learning styles. Once teachers embrace this, they
                      can make a profound impact on countless students.
                    </p>
                  </div>
                </SlideFromLeftAndFadeIn>
              </div>
              <div className="col-xl-7 col-lg-6 col-md-11">
                <div className="about__images-wrap">
                  <div className="flex flex-col sm:flex-row gap-5">
                    <SlideFromRightAndFadeIn>
                      <img
                        src="/exam/philosophy.jpg"
                        alt="img"
                        className="h-[25rem] object-cover object-center rounded-md"
                      />
                    </SlideFromRightAndFadeIn>
                    {/* <SlideFromRightAndFadeIn delay={0.25}>
                      <img
                        src="/exam/3.jpeg"
                        alt="img"
                        className="h-[25rem] object-cover object-center rounded-md"
                      />
                    </SlideFromRightAndFadeIn> */}
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
        <section id="subjects" className="py-16">
          <div className="container mx-auto">
            <div className="container">
              <div className="row align-items-center justify-content-center mb-55">
                <div className="col-xl-7 col-lg-8 col-md-10">
                  <div className="categories__title-wrap text-center text-lg-start m-0">
                    <div className="section__title mb-0">
                      <span className="sub-title">Training Modules</span>
                      <h2 className="title tg-svg">
                        Explore the
                        <span className="position-relative">
                          <span
                            className="svg-icon"
                            id="svg-5"
                            data-svg-icon="assets/img/icons/title_shape.svg"
                          />
                          Training Modules
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
                icon={<SiMicrostrategy size={40} />}
                title="Pedagogical Strategies"
                description="Pedagogical strategies encompass a range of teaching methods and approaches designed to enhance student learning and engagement."
              />
              <FeatureCard
                icon={<SiGoogleclassroom size={40} />}
                title="Classroom mangement"
                description="Classroom management involves techniques and strategies that create an organized, respectful, and productive learning environment for all students.  "
              />
              <FeatureCard
                icon={<GrTechnology size={40} />}
                title="Technology Integration"
                description="Technology integration refers to the effective incorporation of digital tools and resources into teaching and learning processes to enhance educational experiences and outcomes."
              />
              <FeatureCard
                icon={<MdAllInclusive size={40} />}
                title="Inclusive Education"
                description="Inclusive education is an approach that ensures all students, regardless of their backgrounds or abilities, have equal access to quality education and participate fully in the learning environment."
              />
              <FeatureCard
                icon={<GiTeacher size={40} />}
                title="Professional Development"
                description="Professional development refers to ongoing training and education that enhances educators' skills, knowledge, and effectiveness in the classroom to better support student learning."
              />
            </div>
          </div>
        </section>

        <section className="py-16 overflow-hidden" id="about-stp">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-5 col-lg-6">
                <SlideFromLeftAndFadeIn>
                  <div className="about__title-wrap">
                    <div className="section__title">
                      <span className="sub-title">About STP</span>
                      <h2 className="title tg-svg text-xl">
                        About the
                        <span className="position-relative">
                          <span
                            className="svg-icon"
                            id="about-svg"
                            data-svg-icon="assets/img/icons/title_shape.svg"
                          />
                          Student Training program
                        </span>{" "}
                      </h2>
                    </div>
                    <p className="">
                      A student training program is designed to provide learners
                      with vital skills and up-to-date strategies that improve
                      their ability to manage their studies, connect with their
                      learning journey, and engage actively in their education.
                      With the challenges of the 21st century, traditional
                      approaches may not be sufficient, as today’s students
                      often require personalized support that aligns with their
                      unique learning preferences and strengths.
                    </p>
                    <p>
                      This program helps students maximize their potential,
                      equipping them for success in their academic pursuits and
                      beyond.
                    </p>
                  </div>
                </SlideFromLeftAndFadeIn>
              </div>
              <div className="col-xl-7 col-lg-6 col-md-11">
                <div className="about__images-wrap">
                  <div className="flex flex-col sm:flex-row gap-5">
                    <SlideFromRightAndFadeIn>
                      <img
                        src="/exam/philosophy.jpg"
                        alt="img"
                        className="h-[25rem] object-cover object-center rounded-md"
                      />
                    </SlideFromRightAndFadeIn>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section id="subjects" className="py-16">
          <div className="container mx-auto">
            <div className="container">
              <div className="row align-items-center justify-content-center mb-55">
                <div className="col-xl-7 col-lg-8 col-md-10">
                  <div className="categories__title-wrap text-center text-lg-start m-0">
                    <div className="section__title mb-0">
                      <span className="sub-title">Training Modules</span>
                      <h2 className="title tg-svg">
                        Explore the
                        <span className="position-relative">
                          <span
                            className="svg-icon"
                            id="svg-5"
                            data-svg-icon="assets/img/icons/title_shape.svg"
                          />
                          Training Modules
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
                icon={<SiMicrostrategy size={40} />}
                title="Pedagogical Strategies"
                description="Pedagogical strategies encompass a range of teaching methods and approaches designed to enhance student learning and engagement."
              />
              <FeatureCard
                icon={<SiGoogleclassroom size={40} />}
                title="Classroom Management"
                description="Classroom management involves techniques and strategies that create an organized, respectful, and productive learning environment for all students.  "
              />
              <FeatureCard
                icon={<GrTechnology size={40} />}
                title="Technology Integration"
                description="Technology integration refers to the effective incorporation of digital tools and resources into teaching and learning processes to enhance educational experiences and outcomes."
              />
              <FeatureCard
                icon={<MdAllInclusive size={40} />}
                title="Inclusive Education"
                description="Inclusive education is an approach that ensures all students, regardless of their backgrounds or abilities, have equal access to quality education and participate fully in the learning environment."
              />
              <FeatureCard
                icon={<GiTeacher size={40} />}
                title="Professional Development"
                description="Professional development refers to ongoing training and education that enhances educators' skills, knowledge, and effectiveness in the classroom to better support student learning."
              />
            </div>
          </div>
        </section> */}

        {/* Features Section */}
        <>
          <section className="categories-area py-10 bg-white">
            <div className="container">
              <div className="row align-items-center justify-content-center mb-55">
                <div className="col-xl-7 col-lg-8 col-md-10">
                  <SlideFromLeftAndFadeIn>
                    <div className="categories__title-wrap text-center text-lg-start m-0">
                      <div className="section__title mb-0">
                        <span className="sub-title">Future Readiness</span>
                        <h2 className="title tg-svg">
                          Right Direction
                          <span className="position-relative">
                            <span
                              className="svg-icon"
                              id="svg-5"
                              data-svg-icon="assets/img/icons/title_shape.svg"
                            />
                            - Future Readiness
                          </span>
                        </h2>
                      </div>
                      <p className="mb-0">
                        It is important for students to understand the
                        challenges they will face in the future and to be able
                        to identify their needs, take responsibility for their
                        learning, and become proficient in understanding their
                        strengths, interests, and preferences. Additionally,
                        they must comprehend the requirements they need to meet
                        to be successful.
                      </p>
                    </div>
                  </SlideFromLeftAndFadeIn>
                </div>
                <div className="col-xl-5 col-lg-4 col-md-6"></div>
              </div>
              <div className="row justify-content-center row-cols-1 row-cols-sm-2">
                <SlideFromLeftAndFadeIn>
                  <div className="col">
                    <div className="categories__item-two tg-svg">
                      <Link href="/">
                        <div className="icon">
                          <RiSpeakFill />
                        </div>
                        <div className="space-y-2">
                          <h3>Communication Skills</h3>
                          <p className="text-sm text-[#5a7093] ">
                            Communication skills are an essential requirement
                            for anyone in a workplace environment. Being able to
                            articulate ideas and communicate information and
                            instructions in a clear, concise manner is a skill
                            which is sure to be appreciated by colleagues and
                            associates at all levels.
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </SlideFromLeftAndFadeIn>
                <SlideFromRightAndFadeIn>
                  <div className="col">
                    <div className="categories__item-two tg-svg">
                      <Link href="/">
                        <div className="icon">
                          <FaBalanceScale />
                        </div>
                        <div className="space-y-2">
                          <h3>Work Ethics</h3>
                          <p className="text-sm text-[#5a7093] ">
                            The work ethics training program for students
                            promotes teamwork by instilling trust in fellow
                            students. In turn, students are more likely to
                            become open to working together when they appreciate
                            and respect one another. Work ethics include the
                            concept of shared commitment to a purpose.
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </SlideFromRightAndFadeIn>

                <SlideFromLeftAndFadeIn>
                  <div className="col">
                    <div className="categories__item-two tg-svg">
                      <Link href="/">
                        <div className="icon">
                          <FaUsers />
                        </div>
                        <div className="space-y-2">
                          <h3>Team Work</h3>
                          <p className="text-sm text-[#5a7093] ">
                            Teamwork and a positive attitude are what all
                            employers need and value. If students can
                            demonstrate to the employer that they have the
                            attitude and skills to make a positive impact, they
                            have a great chance of securing a job and adding
                            value to their employer from Day One.
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </SlideFromLeftAndFadeIn>

                <SlideFromRightAndFadeIn>
                  <div className="col">
                    <div className="categories__item-two tg-svg">
                      <Link href="/">
                        <div className="icon">
                          <IoTime />
                        </div>
                        <div className="space-y-2">
                          <h3>Time Management</h3>
                          <p className="text-sm text-[#5a7093] ">
                            Effective time management is a skill most students
                            need to make the most out of their personal life and
                            the professional life they are entering into. Thus,
                            to a college student, time management can make the
                            difference between a mediocre and a superior
                            performance.
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </SlideFromRightAndFadeIn>
                <SlideFromLeftAndFadeIn>
                  <div className="col">
                    <div className="categories__item-two tg-svg">
                      <Link href="/">
                        <div className="icon">
                          <FaPuzzlePiece />
                        </div>
                        <div className="space-y-2">
                          <h3>Problem Sloving</h3>
                          <p className="text-sm text-[#5a7093] ">
                            Although some students may be naturally inquisitive,
                            they require training to become systematically
                            analytical, fair, and open-minded in their pursuit
                            of solving problems. With these skills, students can
                            become confident in their reasoning and apply their
                            critical thinking ability to any content area or
                            discipline.
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </SlideFromLeftAndFadeIn>
                <SlideFromRightAndFadeIn>
                  <div className="col">
                    <div className="categories__item-two tg-svg">
                      <Link href="/">
                        <div className="icon">
                          <FaUserGear />
                        </div>
                        <div className="space-y-2">
                          <h3>Adaptability</h3>
                          <p className="text-sm text-[#5a7093] ">
                            Students who are flexible and adaptable react well
                            to changes in their environments - Deals with their
                            ability to manage multiple assignments and tasks,
                            set priorities, and adapting to changing conditions
                            and work assignments. They have a positive can-do
                            attitude about anything that gets thrown their way.
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </SlideFromRightAndFadeIn>
              </div>
            </div>
            {/* <div className="categories__shapes-two">
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
            </div> */}
          </section>
        </>
        {/* <SlideFromRightAndFadeIn>
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
                      <h4 className="title text-white mb-2.5">
                        Expert Guidance
                      </h4>
                      <p className="text-gray-200">
                        Learn from top educators and industry experts through
                        live classes, doubt-clearing sessions, and personalized
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
        </SlideFromRightAndFadeIn> */}

        {/* contact section */}
        <div className="flex flex-col gap-3">
          <Cta1
            primaryHeading="Join the Teachers Training program"
            description="Unlock their potential and empower them to succeed with our Teacher Training Program. Don't miss this opportunity to enhance their teaching skills and nurture their professional growth."
            buttonText="Register Now"
          />
          <Cta1
            primaryHeading="Join the Student Training program"
            description="Unlock their potential and empower them to succeed with our Teacher Training Program. Don't miss this opportunity to enhance their teaching skills and nurture their professional growth."
            buttonText="Register Now"
          />
        </div>
      </main>
    </Layout>
  );
};

export default TalentExamWebpage;
