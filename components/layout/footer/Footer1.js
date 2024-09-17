import Link from "next/link";

export default function Footer1() {
  return (
    <>
      <footer
        className="footer-bg mt-6"
        data-bg-color="var(--tg-common-color-dark)"
      >
        <div className="footer__top-wrap">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="footer-widget">
                  <div className="footer__about">
                    <div className="footer__logo logo">
                      <Link href="/">
                        <img src="/assets/img/custom/logo.png" alt="Logo" />
                      </Link>
                    </div>
                    <p>
                      Helping students achieve their academic and personal
                      goals.
                    </p>
                    <ul className="list-wrap m-0 p-0">
                      <li className="address">
                        15, 22nd Street, Macmillan Colony, Nanganallur, <br />{" "}
                        Chennai - 600 061.
                      </li>
                      <li className="number">
                        +91 98404-57400 | +91 90875-57766
                      </li>
                      <li className="number">
                        greymatteredusolutions@gmail.com
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Uncomment and update sections as needed */}
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="footer-widget widget_nav_menu">
                  <h4 className="fw-title">Resources</h4>
                  <ul className="list-wrap">
                    <li>
                      <Link href="/about-us">About</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="footer-widget widget_nav_menu">
                  <h4 className="fw-title">Services</h4>
                  <ul className="list-wrap">
                    <li>
                      <Link href="/spell-bee">Spell Bee</Link>
                    </li>
                    <li>
                      <Link href="/mbbs">Overseas MBBS</Link>
                    </li>
                    <li>
                      <Link href="/talent-exam">Talent Exam</Link>
                    </li>
                    <li>
                      <Link href="/farm-guru">Field Trip</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="footer-widget widget_nav_menu">
                  <h4 className="fw-title">Social Accounts</h4>
                  {/* <ul className="list-wrap">
                    <li>
                      <Link href="/spell-bee">Spell Bee</Link>
                    </li>
                    <li>
                      <Link href="/mbbs">Overseas MBBS</Link>
                    </li>
                    <li>
                      <Link href="/talent-exam">Talent Exam</Link>
                    </li>
                    <li>
                      <Link href="/farm-guru">Field Trip</Link>
                    </li>
                  </ul> */}

                  <nav className="">
                    <div className="social-links">
                      <ul className="list-wrap flex gap-4 text-xl">
                        <li>
                          <Link href="https://www.facebook.com/GreyMatter.Educational.Solutions">
                            <i className="fab fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.instagram.com/gmes_24/">
                            <i className="fab fa-instagram" />
                          </Link>
                        </li>
                        {/* <li>
                          <Link href="#">
                            <i className="fab fa-twitter" />
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
                        </li> */}
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Uncomment and update copyright section as needed */}
        <div className="copyright__wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="copyright__text">
                  <p>
                    Copyright © {new Date().getFullYear()} eduvalt. All rights
                    reserved.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="copyright__menu">
                  <ul className="list-wrap d-flex flex-wrap justify-content-center justify-content-lg-end">
                    <li>
                      <Link href="#">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link href="#">Terms & Conditions</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
