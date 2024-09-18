// // primary :#1363df
// // sec: #082a5e
// // text: #39557e
import {
  SlideFromBottomAndFadeIn,
  SlideFromLeftAndFadeIn,
  SlideFromRightAndFadeIn,
} from "@/components/animation/animation";
import Layout from "@/components/layout/Layout";
import Testimonial3 from "@/components/sections/Testimonial3";
import Head from "next/head";
import Link from "next/link";
import {
  FaBed,
  FaBriefcaseMedical,
  FaBuilding,
  FaChalkboardTeacher,
  FaFlask,
  FaGlobe,
  FaGraduationCap,
  FaHome,
  FaLanguage,
  FaMedal,
  FaMoneyBillWave,
  FaRegCheckCircle,
  FaTrophy,
  FaUserGraduate,
  FaUtensils,
} from "react-icons/fa";
import {
  MdAttachMoney,
  MdLocalHospital,
  MdMoneyOff,
  MdVerified,
} from "react-icons/md";

const DavaoMedicalSchoolHomepage = () => {
  return (
    <Layout headerStyle={2} footerStyle={1} isbgBlue>
      <div className="min-h-screen bg-gray-100">
        <Head>
          <title> | Grey Matter solutions</title>
          <meta property="og:title" content="Spell Bee" key="title" />
        </Head>

        {/* Hero Section */}
        <section
          className="banner-area-two py-32 bg-[#082b5e] overflow-hidden "
          data-background="/assets/img/banner/banner_bg02.jpg"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <SlideFromLeftAndFadeIn>
                  <div className="banner__content-two">
                    <img
                      src="/assets/img/banner/banner_shape02.png"
                      alt="shape"
                      className="shape"
                      data-aos="zoom-in-right"
                      data-aos-delay={1200}
                    />
                    <h3 className="title tg-svg">
                      Start Your Journey to{" "}
                      <span className="position-relative">
                        <span
                          className="svg-icon"
                          id="svg-2"
                          data-svg-icon="assets/img/icons/title_shape.svg"
                        />
                        MBBS
                      </span>
                      Excellence Abroad!{" "}
                    </h3>

                    {/* <div
                      className="tg-button-wrap flex justify-center lg:justify-start"
                      data-delay-in=".8"
                      data-duration-in="1.5"
                    >
                      <Link
                        href="/courses"
                        className="btn tg-svg justify-center max-w-sm w-full"
                      >
                        Apply Now
                      </Link>
                    </div> */}

                    <div className="flex flex-col  gap-4 w-full">
                      <button className="btn btn-primary w-full max-w-sm">
                        Apply Now
                      </button>
                      <a href="/mbbs-brochure.pdf" download className="w-full">
                        <button className="bg-white h-12 rounded font-bold  w-full max-w-sm">
                          Download Brochure
                        </button>
                      </a>
                    </div>
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
                  <div className="banner__images-grid">
                    <div
                      className="banner__images-col"
                      data-aos="fade-up"
                      data-aos-delay={200}
                    >
                      <img
                        src="/mbbs/2.jpeg"
                        alt="img"
                        className="rounded-md h-96 w-full sm:w-60 object-cover object-top"
                      />
                    </div>
                    <div className="hidden sm:flex flex-col gap-6 h-96 justify-center">
                      <img
                        src="/mbbs/3.jpeg"
                        className="rounded-md w-full h-1/2 object-cover object-center "
                        alt="img"
                        data-aos="fade-left"
                        data-aos-delay={300}
                      />

                      <img
                        src="/mbbs/1.jpeg"
                        className="rounded-md w-full h-1/2 object-cover object-center"
                        alt="img"
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

        {/* Why DMSF */}
        <section className="py-16" id="why-dmsf">
          <div className="container mx-auto">
            <SlideFromLeftAndFadeIn>
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-7 col-lg-8 col-md-10">
                    <div className="categories__title-wrap text-center text-lg-start m-0">
                      <div className="section__title mb-0">
                        <span className="sub-title">Why DMSF</span>
                        <h2 className="title tg-svg">
                          Why Choose{" "}
                          <span className="position-relative">
                            <span
                              className="svg-icon"
                              id="svg-5"
                              data-svg-icon="assets/img/icons/title_shape.svg"
                            />
                            DMSF?
                          </span>
                        </h2>
                        <p className="max-w-md">
                          Join our trusted consultancy to make your MBBS abroad
                          a reality with expert guidance and a personalized
                          approach.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-4 col-md-6">
                    <div className="tg-button-wrap mt-4 mt-lg-0 justify-content-center justify-content-lg-end"></div>
                  </div>
                </div>
                <div className="row justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-3"></div>
              </div>
            </SlideFromLeftAndFadeIn>
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
            <SlideFromBottomAndFadeIn delay={0.25}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <FeatureCard
                  icon={<MdVerified size={40} />}
                  title="Authorized Partner"
                  description="We are authorized consultants for top medical universities abroad, ensuring a smooth, reliable journey."
                />
                <FeatureCard
                  icon={<FaChalkboardTeacher size={40} />}
                  title="Expert Guidance"
                  description="Our seasoned consultants offer tailored advice and support at every step, from application to enrollment."
                />
                <FeatureCard
                  icon={<FaGlobe size={40} />}
                  title="Global Opportunities"
                  description="Explore diverse cultures and cutting-edge medical education programs across the globe."
                />
                <FeatureCard
                  icon={<FaGraduationCap size={40} />}
                  title="Career Advancement"
                  description="Gain a competitive edge with an internationally recognized medical degree, opening doors to global career opportunities."
                />
                <FeatureCard
                  icon={<FaMedal size={40} />}
                  title="No. 1 in MCI Screening Tests"
                  description="DMSF is top performing in the MCI screening test."
                />
                <FeatureCard
                  icon={<FaUserGraduate size={40} />}
                  title="3000+ Indian Students Graduated"
                  description="A large community of Indian alumni."
                />
                <FeatureCard
                  icon={<FaTrophy size={40} />}
                  title="Top Performing International Medical School"
                  description="Recognized for excellence in medical education."
                />
                <FeatureCard
                  icon={<FaBuilding size={40} />}
                  title="World Class Infrastructure"
                  description="State-of-the-art medical education facilities in Asia."
                />
              </div>
            </SlideFromBottomAndFadeIn>
          </div>
        </section>

        {/* Why Philippines Section */}
        <section
          id="mbbs-in-philippines"
          className="categories-area py-10 bg-white overflow-hidden"
        >
          <div className="container">
            <div className="row align-items-center justify-content-center mb-55">
              <div className="col-xl-7 col-lg-8 col-md-10">
                <SlideFromLeftAndFadeIn>
                  <div className="categories__title-wrap text-center text-lg-start m-0">
                    <div className="section__title mb-0">
                      <span className="sub-title">MBBS in Philippines</span>
                      <h2 className="title tg-svg">
                        Why Study MBBS in{" "}
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
                    <p className="mb-0">
                      Studying MBBS in the Philippines offers numerous
                      advantages, including global recognition of education,
                      English-medium instruction, affordable costs, and
                      extensive clinical exposure, all of which enhance career
                      opportunities.
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
                        <FaGlobe />
                      </div>
                      <div className="flex flex-col gap-2.5">
                        <h3 className="text-xl">
                          Global Recognition of Education
                        </h3>
                        <span className="sm:text-sm text-xs text-[#5a7093]">
                          Degrees from the Philippines are recognized worldwide,
                          providing graduates with global career opportunities.
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
                        <FaLanguage />
                      </div>
                      <div className="flex flex-col gap-2.5">
                        <h3 className=" text-lg sm:text-xl">
                          English-Medium Instruction
                        </h3>
                        <span className="text-xs sm:sm:text-sm text-xs text-[#5a7093]">
                          Courses are taught in English, making it easier for
                          international students to adapt and excel.
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
                        <MdAttachMoney />
                      </div>
                      <div className="flex flex-col gap-2.5">
                        <h3 className="sm:text-xl  text-lg">
                          Low-Cost & High-Quality Education
                        </h3>
                        <span className="sm:text-sm text-xs text-[#5a7093]">
                          Enjoy a high standard of education at a fraction of
                          the cost compared to other countries.
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
                        <FaMoneyBillWave />
                      </div>
                      <div className="flex flex-col gap-2.5">
                        <h3 className="sm:text-xl  text-lg">
                          Affordable Cost of Living
                        </h3>
                        <span className="sm:text-sm text-xs text-[#5a7093]">
                          Living expenses in the Philippines are relatively low,
                          making it a cost-effective choice for students.
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
                        <MdLocalHospital />
                      </div>
                      <div className="flex flex-col gap-2.5">
                        <h3 className="sm:text-xl  text-lg">
                          Extensive Clinical Exposure
                        </h3>
                        <span className="sm:text-sm text-xs text-[#5a7093]">
                          Gain hands-on experience with extensive clinical
                          exposure in diverse healthcare settings.
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
                        <FaBriefcaseMedical />
                      </div>
                      <div className="flex flex-col gap-2.5">
                        <h3 className="sm:text-xl  text-lg">
                          Enhanced Career Opportunities
                        </h3>
                        <span className="sm:text-sm text-xs text-[#5a7093]">
                          A medical degree from the Philippines opens up
                          enhanced career opportunities around the globe.
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

        {/* Top Class Features Section */}
        <section id="features" className="py-16 bg-gray-100">
          <div className="container mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12">
              Top Class Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              <FacilityCard
                icon={<FaChalkboardTeacher size={40} />}
                title="Classrooms"
                imageSrc="/mbbs-1.png"
                description="Our state-of-the-art classrooms are equipped with the latest technology to enhance your learning experience, ensuring an interactive and engaging educational environment."
              />

              <FacilityCard
                icon={<FaBed size={40} />}
                title="Hostel"
                imageSrc="/mbbs-2.png"
                description="Comfortable and secure hostel accommodations provide a home away from home, with amenities that cater to the needs of international students."
              />
              <FacilityCard
                icon={<FaFlask size={40} />}
                title="VR Anatomy"
                imageSrc="/mbbs-3.png"
                description="Experience cutting-edge learning with our VR Anatomy labs, offering immersive 3D simulations for a deeper understanding of human anatomy."
              />
              <FacilityCard
                icon={<FaGlobe size={40} />}
                title="3D Anatomage"
                imageSrc="/mbbs-4.png"
                description="Our 3D Anatomage tables allow for detailed, interactive anatomical studies, making complex medical concepts easier to grasp."
              />
            </div>
          </div>
        </section>

        {/* Additional Features Section */}
        <section id="additional-features" className="bg-blue-50 py-16">
          <div className="container mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12">
              Additional Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FeatureListItem
                icon={<MdMoneyOff size={45} />}
                title="No Donation or Capitation Fees"
                description="Our transparent and affordable fee structure ensures that there are no hidden charges or extra payments, making quality education accessible to all."
              />
              <FeatureListItem
                icon={<FaRegCheckCircle size={45} />}
                title="Accredited by the NMC & WHO"
                description="Our institution is recognized by both the National Medical Commission (NMC) and the World Health Organization (WHO), guaranteeing the global acceptance and credibility of your medical degree."
              />
              <FeatureListItem
                icon={<FaHome size={45} />}
                title="Excellent Accommodation Facilities"
                description="We offer well-maintained, secure, and comfortable living spaces with all necessary amenities, ensuring that students can focus on their studies without any worries."
              />
              <FeatureListItem
                icon={<FaUtensils size={45} />}
                title="Indian Food Available for Students"
                description="Our campus provides a variety of nutritious and delicious Indian meals, helping students feel at home while they pursue their studies abroad."
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section
        <SlideFromBottomAndFadeIn delay={0.25}>
          <div id="testimonials">
            <Testimonial3 />
          </div>
        </SlideFromBottomAndFadeIn> */}
      </div>
    </Layout>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <div className="text-blue-500 mb-4 flex justify-center">{icon}</div>
    <h4 className="text-xl font-semibold mb-2">{title}</h4>
    <p>{description}</p>
  </div>
);

const FacilityCard = ({ icon, title, imageSrc, description }) => (
  <SlideFromBottomAndFadeIn>
    <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
      <div className="text-blue-500 mb-4 flex justify-center">{icon}</div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-left">{description}</p>
      <img src={imageSrc} alt={title} className="h-96 object-cover rounded" />
    </div>
  </SlideFromBottomAndFadeIn>
);

const FeatureListItem = ({ icon, title, description }) => (
  <SlideFromBottomAndFadeIn>
    <div className="flex flex-col bg-white p-4 rounded-lg shadow-md gap-3 h-full">
      <div className="bg-blue-500 text-white p-2 rounded-full mr-4 max-w-fit">
        {icon}
      </div>
      <h4 className="font-semibold text-lg sm:text-xl lg:text-2xl">{title}</h4>
      <p className="text-sm sm:text-base"> {description} </p>
    </div>
  </SlideFromBottomAndFadeIn>
);

export default DavaoMedicalSchoolHomepage;
