import Link from "next/link"

export default function About1() {
    return (
        <>
            <section className="about-area tg-motion-effects section-py-120">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="about__images">
                                <img className="small-img tg-motion-effects3" src="/assets/img/custom/about-r-1.png" alt="img" />
                                <img className="big-img" src="/assets/img/custom/about-r-2.png" alt="img" />
                                <div className="about__exp">
                                    <svg width={126} height={108} viewBox="0 0 126 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 10C0 4.47715 4.47715 0 10 0H110.996C116.321 0 120.713 4.17312 120.983 9.4914L125.429 96.7793C125.733 102.754 120.758 107.657 114.789 107.267L9.34719 100.369C4.08901 100.025 0 95.6593 0 90.3899V10Z" fill="currentcolor" />
                                    </svg>
                                    <h4 className="year">75 +</h4>
                                    <p>Years of Combined Experience</p>
                                </div>
                                <img src="/assets/img/others/about_dots.svg" alt="svg" className="dots tg-motion-effects2" />
                                <svg className="circle tg-motion-effects1" width={344} height={344} viewBox="0 0 344 344" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x={20} y={20} width={304} height={304} rx={152} stroke="currentcolor" strokeWidth={40} />
                                </svg>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <div className="about__content">
                                <div className="section__title">
                                    <span className="sub-title">Get To Know About Us</span>
                                    <h2 className="title tg-svg">Pioneering <span className="position-relative"><span className="svg-icon" id="svg-3" data-svg-icon="assets/img/icons/title_shape.svg" />Competitive Education</span>
                                        and Training Excellence</h2>
                                </div>
                                <p className="desc">Established in 2017, GREY MATTER is a dynamic and emerging company dedicated to providing top-notch services in competitive tests, farm trips, management education, overseas education, and training programs. Our company is managed by a team of professionals with extensive experience in the fields of education and training. Over the years, we have proudly conducted spell bee tests for more than 25,000 students across Tamil Nadu and Andhra Pradesh, organized farm trips for over 35,000 students, and facilitated training programs for more than 5,000 college students. At GREY MATTER, we are committed to implementing modern methodologies of learning, ensuring that our sessions in colleges across Tamil Nadu are both innovative and impactful.</p>
                                <ul className="about__info-list list-wrap">
                                    <li className="about__info-list-item">
                                        <div className="icon"><i className="flaticon-support" /></div>
                                        <p className="content">400+ <br /> Schools Reached</p>
                                    </li>
                                    <li className="about__info-list-item">
                                        <div className="icon"><i className="flaticon-file" /></div>
                                        <p className="content">1500+ <br /> Tests conducted</p>
                                    </li>
                                    <li className="about__info-list-item">
                                        <div className="icon"><i className="flaticon-graduation-cap" /></div>
                                        <p className="content">25000+ <br /> Over Students</p>
                                    </li>
                                    <li className="about__info-list-item">
                                        <div className="icon"><i className="flaticon-video-player" /></div>
                                        <p className="content">12K+ <br /> Lessons taken</p>
                                    </li>
                                </ul>
                                {/* <div className="tg-button-wrap">
                                    <Link href="/about-us" className="btn tg-svg"><span className="text">Discover More</span> <span className="svg-icon" id="about-btn" data-svg-icon="assets/img/icons/btn-arrow.svg" /></Link>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
