import Link from "next/link";

export default function Categories1() {
  return (
    <>
      <section id="services" className="categories-area section-py-130">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-5 col-lg-8 col-md-10">
              <div className="categories__title-wrap text-center text-xl-start">
                <div className="section__title">
                  <span className="sub-title">Services & Products</span>
                  <h2 className="title tg-svg">
                    Browse By{" "}
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
                <p>
                  At GREY MATTER, we enhance education through a variety of
                  programs. Our spell bee competitions have improved the
                  vocabulary and spelling skills of over 25,000 students. We
                  offer comprehensive guidance for students pursuing MBBS
                  studies abroad and have successfully supported many in their
                  journey. Our talent exams identify and nurture academic
                  strengths, benefiting over 5,000 school students.
                  Additionally, our field trips provide hands-on learning
                  experiences, enriching the education of more than 35,000
                  students.
                </p>
                <div className="tg-button-wrap justify-content-center justify-content-xl-start">
                  {/* <Link href="/courses" className="btn btn-border tg-svg"><span className="text">All
                                        Categories</span> <span className="svg-icon" id="svg-6" data-svg-icon="assets/img/icons/btn-arrow.svg" /></Link> */}
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-9">
              <div className="categories__wrap">
                <img
                  src="/assets/img/objects/categories_shape03.svg"
                  alt="shape"
                  data-aos="fade-right"
                />
                <img
                  src="/assets/img/objects/categories_shape04.svg"
                  alt="shape"
                  data-aos="fade-left"
                />
                <div className="row justify-content-center row-cols-2 row-cols-md-3">
                  <div className="col">
                    <div className="categories__item">
                      <Link href="/spell-bee">
                        <div
                          className="categories__item_img"
                          style={{ overflow: "hidden" }}
                        >
                          <img
                            src="/assets/img/custom/spell-bee.jpg"
                            alt="Spell Bee"
                          />
                        </div>
                        <span className="name">Spell Bee</span>
                        {/* <span className="courses">We organize engaging and educational spell bee competitions to enhance students' vocabulary and spelling skills</span> */}
                      </Link>
                    </div>
                  </div>
                  <div className="col">
                    <div className="categories__item">
                      <Link href="#services">
                        <div
                          className="categories__item_img"
                          style={{ overflow: "hidden" }}
                        >
                          <img
                            style={{ paddingTop: "20px" }}
                            src="/assets/img/custom/mbbs.png"
                            alt="overseas MBBS"
                          />
                        </div>
                        {/* <img className="categories__item_img" style={{ objectFit: "filled" }} src="/assets/img/custom/abroad_MBBS.webp" alt="abroad_MBBS" /> */}
                        <span className="name">Overseas MBBS</span>
                        {/* <span className="courses">We provide comprehensive guidance and support for students aspiring to pursue MBBS studies abroad, ensuring a smooth admission process.</span> */}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center row-cols-2 row-cols-sm-3">
                  <div className="col">
                    <div className="categories__item">
                      <Link href="#services">
                        <div
                          className="categories__item_img"
                          style={{ overflow: "hidden" }}
                        >
                          <img
                            style={{ padding: "20px" }}
                            src="/assets/img/custom/exam.png"
                            alt="Talen tExam"
                          />
                        </div>
                        <span className="name">Talent Exam</span>
                        {/* <span className="courses">08 Courses</span> */}
                      </Link>
                    </div>
                  </div>
                  <div className="col">
                    <div className="categories__item">
                      <Link href="/farm-guru">
                        <div
                          className="categories__item_img"
                          style={{ overflow: "hidden" }}
                        >
                          <img
                            src="/assets/img/custom/trip.webp"
                            alt="Field Trip"
                          />
                        </div>
                        <span className="name">Field Trip</span>
                        {/* <span className="courses">13 Courses</span> */}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="categories__shapes">
          <div className="categories__shapes-item rotateme">
            <img src="/assets/img/objects/categories_shape01.png" alt="shape" />
          </div>
          <div className="categories__shapes-item" data-aos="fade-up">
            <img src="/assets/img/objects/categories_shape02.png" alt="shape" />
          </div>
        </div>
      </section>
    </>
  );
}
