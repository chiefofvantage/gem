import Link from "next/link";
import MobileMenu from "../MobileMenu";
export default function Header2({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  isSpellBee = false,
}) {
  return (
    <>
      <div id="header-fixed-height" />
      <header className="tg-header__style-two">
        <div
          id="sticky-header"
          className={`tg-header__area ${scroll ? "sticky-menu" : ""}`}
        >
          <div className="container custom-container">
            <div className="row">
              <div className="col-12">
                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                  <i className="tg-flaticon-menu-1" />
                </div>
                <div className="tgmenu__wrap">
                  <nav className="tgmenu__nav">
                    <div className="logo flex items-center gap-3">
                      <Link href="/">
                        <img
                          src="/assets/img/custom/logo.png"
                          alt="Logo"
                          className="h-20"
                        />
                      </Link>
                      {isSpellBee && (
                        <img
                          src="/assets/img/custom/bee.png"
                          alt="Logo"
                          className="h-16"
                        />
                      )}
                    </div>
                    <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex">
                      <ul className="navigation">
                      <li className="menu-item">
                          <Link href="/about-us">About Us</Link>
                        </li>
                        <li className="active menu-item-has-children">
                          <Link href="/spell-bee">Spell Bee</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link href="/spell-bee#what-is-spell-bee">
                                What is Spell Bee
                              </Link>
                            </li>
                            <li className="">
                              <Link href="/spell-bee#benefits">
                                Benefits of Spell bee
                              </Link>
                            </li>
                            <li>
                              <Link href="/spell-bee#categories">
                                Categories
                              </Link>
                            </li>
                            <li>
                              <Link href="/spell-bee#exam-schedule">
                                Exam Schedule
                              </Link>
                            </li>
                            <li>
                              <a
                                href="/spell-bee-brochure.pdf"
                                download
                                className="w-full"
                              >
                                Download Brochure
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <Link href="/mbbs">Overseas MBBS</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link href="/mbbs#why-dmsf">Why Choose DMSF</Link>
                            </li>
                            <li>
                              <Link href="/mbbs#mbbs-in-philippines">
                                MBBS in Philippines
                              </Link>
                            </li>
                            <li>
                              <Link href="/mbbs#features">Features</Link>
                            </li>
                            <li>
                              <Link href="/mbbs#additional-features">
                                Additional Features
                              </Link>
                            </li>
                            <li>
                              <a
                                href="/mbbs-brochure.pdf"
                                download
                                className="w-full"
                              >
                                Download Brochure
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <Link href="/talent-exam">Talent Exam</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link href="/talent-exam#about-fktt">
                                About FKTT
                              </Link>
                            </li>
                            <li>
                              <Link href="/talent-exam#subjects">
                                Test Subjects
                              </Link>
                            </li>
                            <li>
                          <a
                            href="/fg-brochure.pdf"
                            download
                            className="w-full"
                          >
                            Download Brochure
                          </a>
                        </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <Link href="/farm-guru">Farm Guru</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link href="/farm-guru#about-us">About Us</Link>
                            </li>
                            <li>
                              <Link href="/farm-guru#what-we-do">
                                What we do
                              </Link>
                            </li>
                            <li>
                              <Link href="/farm-guru#gallery">Gallery</Link>
                            </li>
                          </ul>
                        </li>
                        
                        <li>
                          <Link href="/contact">Contact</Link>
                        </li>
                        
                      </ul>
                    </div>

                    {/* <div className="tgmenu__action">
                      <ul className="list-wrap">
                        <li className="mini-cart-icon">
                          <Link href="/shop" className="cart-count">
                            <img src="/assets/img/icons/cart.svg" alt="cart" />
                            <span className="mini-cart-count">0</span>
                          </Link>
                        </li>
                        <li className="header-phone d-none d-lg-block d-xl-none d-xxl-block">
                          <Link href="/tel:993-00-67777">
                            <i className="flaticon-phone-call" />
                            993-00-67777
                          </Link>
                        </li>
                        <li className="header-btn login-btn">
                          <Link href="/contact" className="btn">
                            Log in
                          </Link>
                        </li>
                        <li className="header-btn">
                          <Link href="/contact" className="btn">
                            Try For Free
                          </Link>
                        </li>
                      </ul>
                    </div> */}
                  </nav>
                </div>
                {/* Mobile Menu  */}
                <div className="tgmobile__menu">
                  <nav className="tgmobile__menu-box">
                    <div className="close-btn" onClick={handleMobileMenu}>
                      <i className="tg-flaticon-close-1" />
                    </div>
                    <div className="nav-logo">
                      <Link href="/">
                        <img src="/assets/img/custom/logo.png" alt="Logo" />
                      </Link>
                    </div>
                    <div className="tgmobile__search">
                      <form action="#">
                        <input type="text" placeholder="Search here..." />
                        <button>
                          <i className="fas fa-search" />
                        </button>
                      </form>
                    </div>
                    <div className="tgmobile__menu-outer">
                      <MobileMenu />
                    </div>
                    {/* <div className="tgmenu__action">
                      <ul className="list-wrap">
                        <li className="header-btn login-btn">
                          <Link href="#" className="btn">
                            Log in
                          </Link>
                        </li>
                        <li className="header-btn">
                          <Link href="#" className="btn">
                            Try For Free
                          </Link>
                        </li>
                      </ul>
                    </div> */}
                    <div className="social-links">
                      <ul className="list-wrap">
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
                <div
                  className="tgmobile__menu-backdrop"
                  onClick={handleMobileMenu}
                />
                {/* End Mobile Menu */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
