// // primary :#1363df
// // sec: #082a5e
// // text: #39557e
import Footer1 from "@/components/layout/footer/Footer1";
import Header1 from "@/components/layout/header/Header1";
import Link from "next/link";
import {
  FaBed,
  FaBuilding,
  FaChalkboardTeacher,
  FaFlask,
  FaGlobe,
  FaGraduationCap,
  FaTrophy,
  FaUserGraduate,
} from "react-icons/fa";
import {
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiNumber5,
  RiNumber6,
} from "react-icons/ri";

const DavaoMedicalSchoolHomepage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header1 />

      {/* Hero Section */}
      <section
        className="banner-area-two banner-bg-two bg-[#082b5e]"
        data-background="/assets/img/banner/banner_bg02.jpg"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
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

                <div
                  className="tg-button-wrap"
                  data-delay-in=".8"
                  data-duration-in="1.5"
                >
                  <Link href="/courses" className="btn tg-svg">
                    <span className="text">Apply Now</span>{" "}
                    <span
                      className="svg-icon"
                      id="slider-btn01"
                      data-svg-icon="assets/img/icons/btn-arrow.svg"
                    />
                  </Link>
                </div>
              </div>
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
                    <img src="/assets/img/banner/banner_img01.png" alt="img" />
                  </div>
                  <div className="banner__images-col">
                    <img
                      src="/assets/img/banner/banner_img02.png"
                      alt="img"
                      data-aos="fade-left"
                      data-aos-delay={300}
                    />
                    <img
                      src="/assets/img/banner/banner_img03.png"
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
      <section className="py-16">
        <div className="container mx-auto">
          <div className="container">
            <div className="row align-items-center justify-content-center mb-55">
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
              icon={<FaGraduationCap size={40} />}
              title="No. 1 in MCI Screening Test"
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
        </div>
      </section>

      {/* Why Philippines Section */}
      <section className="categories-area py-10 bg-white">
        <div className="container">
          <div className="row align-items-center justify-content-center mb-55">
            <div className="col-xl-7 col-lg-8 col-md-10">
              <div className="categories__title-wrap text-center text-lg-start m-0">
                <div className="section__title mb-0">
                  <span className="sub-title">What we do</span>
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
                  <div className="">
                    <span className="text-xs text-[#5a7093]">
                      Global Recognition of Education
                    </span>
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
                  <div className="">
                    <span className="text-xs text-[#5a7093]">
                      English-Medium Instruction
                    </span>
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
                  <div className="">
                    <span className="text-xs text-[#5a7093]">
                      Low-cost & High-quality Education{" "}
                    </span>
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
                  <div className="">
                    <span className="text-xs text-[#5a7093] leading-none">
                      Affordable Cost of Living
                    </span>
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
                  <div className="">
                    <span className="text-xs text-[#5a7093]">
                      Extensive Clinical Exposure
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col ">
              <div className="categories__item-two tg-svg">
                <Link href="/courses">
                  <div className="icon">
                    <RiNumber6 />
                  </div>
                  <div className="">
                    <span className="text-xs text-[#5a7093]">
                      Enhanced Career Opportunities
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="categories__shapes-two">
          <div className="categories__shapes-item-two rotateme">
            <img src="/assets/img/objects/categories_shape05.png" alt="shape" />
          </div>
          <div className="categories__shapes-item-two" data-aos="fade-up">
            <img src="/assets/img/objects/categories_shape02.png" alt="shape" />
          </div>
        </div>
      </section>

      {/* Top Class Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">
            Top Class Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FacilityCard
              icon={<FaChalkboardTeacher size={40} />}
              title="Classrooms"
              imageSrc="/mbbs-1.png"
            />
            <FacilityCard
              icon={<FaBed size={40} />}
              title="Hostel"
              imageSrc="/mbbs-2.png"
            />
            <FacilityCard
              icon={<FaFlask size={40} />}
              title="VR Anatomy"
              imageSrc="/mbbs-3.png"
            />
            <FacilityCard
              icon={<FaGlobe size={40} />}
              title="3D Anatomage"
              imageSrc="/mbbs-4.png"
            />
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">
            Additional Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureListItem text="No Donation or Capitation Fee" />
            <FeatureListItem text="Accredited by NMC & WHO" />
            <FeatureListItem text="Excellent Accommodation Facilities" />
            <FeatureListItem text="Indian Food Available for Students" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="bg-[#061e43]">
        <Footer1 />
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <div className="text-blue-500 mb-4 flex justify-center">{icon}</div>
    <h4 className="text-xl font-semibold mb-2">{title}</h4>
    <p>{description}</p>
  </div>
);

const FacilityCard = ({ icon, title, imageSrc }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <div className="text-blue-500 mb-4 flex justify-center">{icon}</div>
    <h4 className="text-xl font-semibold mb-2">{title}</h4>
    <img
      src={imageSrc}
      alt={title}
      className="w-full h-40 object-cover rounded"
    />
  </div>
);

const FeatureListItem = ({ text }) => (
  <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
    <div className="bg-blue-500 text-white p-2 rounded-full mr-4">
      <FaGraduationCap size={20} />
    </div>
    <p className="font-semibold">{text}</p>
  </div>
);

export default DavaoMedicalSchoolHomepage;
