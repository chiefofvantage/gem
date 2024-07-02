import Link from "next/link"

export default function Banner1() {
    return (
        <>
            <section className="banner-area banner-bg" data-background="/assets/img/banner/banner_bg.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="banner__content">
                                <img src="/assets/img/banner/bshape_01.png" alt="shape" className="shape alltuchtopdown" />
                                <img src="/assets/img/banner/bshape_02.png" alt="shape" className="shape" />
                                <span className="sub-title" >Shapping the future of Education</span>
                                <h3 className="title tg-svg">Empowering <span className="position-relative"><span className="svg-icon" id="svg-2" data-svg-icon="assets/img/icons/title_shape.svg" />Young Minds</span> with Excellence in Educational Upliftment</h3>
                                <p>Unlock Your Potential with GREY MATTER: Leading the Way in empowering students lifes
                                </p>
                                <div className="banner__btn-wrap" >
                                    <div className="tg-button-wrap">
                                        <Link href="#services" className="btn tg-svg"><span className="text">Explore Services</span>
                                            <span className="svg-icon" id="svg-1" data-svg-icon="assets/img/icons/btn-arrow.svg" /></Link>
                                    </div>
                                    <div className="banner__phone">
                                        <i className="flaticon-phone-call" />
                                        <div className="number-info">
                                            <span>Have any Question?</span>
                                            <h6 className="number"><Link href="tel:98404-57400">98404-57400</Link></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="banner__images">
                                <img src="/assets/img/banner/banner_img.png" alt="img" className="main-img" />
                                <img src="/assets/img/banner/bshape_03.png" alt="shape" className="shape" data-aos="fade-down-right" data-aos-delay={1200} />
                                <img src="/assets/img/banner/bshape_04.png" alt="shape" className="shape" data-aos="fade-right" data-aos-delay={1200} />
                                <img src="/assets/img/banner/bshape_05.png" alt="shape" className="shape" data-aos="fade-down-left" data-aos-delay={1200} />
                                <div className="banner__fact">
                                    <div className="banner__fact-item">
                                        <div className="icon">
                                            <i className="flaticon-group" />
                                        </div>
                                        <div className="info">
                                            <span>Students Benifited</span>
                                            <h4 className="count">25K</h4>
                                        </div>
                                    </div>
                                    <div className="banner__fact-item">
                                        <div className="icon">
                                            <i className="flaticon-graduation-cap" />
                                        </div>
                                        <div className="info">
                                            <span>Partner Institutions</span>
                                            <h4 className="count">100+</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
