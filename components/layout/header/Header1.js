import Link from "next/link";
import MobileMenu from "../MobileMenu";

export default function Header1({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  isbgBlue = false,
}) {
  return (
    <>
      <header>
        <div
          id="sticky-header"
          className={`tg-header__area transparent-header`}
        >
          <div className="container custom-container">
            <div className="row">
              <div className="col-12">
                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                  <i className="tg-flaticon-menu-1" />
                </div>
                <div className="tgmenu__wrap">
                  <nav className="tgmenu__nav">
                    <div className="logo">
                      <Link href="/">
                        <img src="/assets/img/custom/logo.png" alt="Logo" />
                      </Link>
                    </div>
                    <div className="tgmenu__action ml-auto d-none d-xl-flex mr-5">
                      <ul className="navigation flex gap-2">
                      
                        <li className="menu-item">
                          <Link
                            href="/spell-bee"
                            className={`px-3  py-2 rounded  ${
                              isbgBlue
                                ? "text-white hover:bg-[#1363df] hover:text-white"
                                : "hover:bg-[#1363df] hover:text-white"
                            } `}
                          >
                            Spell Bee
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={`px-3  py-2 rounded  ${
                              isbgBlue
                                ? "text-white hover:bg-[#1363df] hover:text-white"
                                : "hover:bg-[#1363df] hover:text-white"
                            } `}
                            href="/mbbs"
                          >
                            Overseas MBBS
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={`px-3  py-2 rounded  ${
                              isbgBlue
                                ? "text-white hover:bg-[#1363df] hover:text-white"
                                : "hover:bg-[#1363df] hover:text-white"
                            } `}
                            href="/talent-exam"
                          >
                            Talent Exam
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={`px-3  py-2 rounded  ${
                              isbgBlue
                                ? "text-white hover:bg-[#1363df] hover:text-white"
                                : "hover:bg-[#1363df] hover:text-white"
                            } `}
                            href="/farm-guru"
                          >
                            Field Trip
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex">
                      <ul className="navigation">
                        <li className="menu-item">
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
                    </div> */}
                    {/* Uncomment and fix the search form as needed */}
                    {/* <div className="tgmenu__search d-none d-md-block">
                      <form action="#" className="tgmenu__search-form">
                        <div className="select-grp">
                          <svg
                            width={12}
                            height={12}
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 12H6.85714V6.85714H12V12ZM5.14286 12H0V6.85714H5.14286V12ZM12 5.14286H6.85714V0H12V5.14286ZM5.14286 5.14286H0V0H5.14286V5.14286Z"
                              fill="currentcolor"
                            />
                          </svg>
                          <select
                            className="form-select"
                            id="course-cat"
                            aria-label="Default select example"
                            style={{ width: 150 }}
                          >
                            <option disabled>Categories</option>
                            <option>Business</option>
                            <option value={2}>Data Science</option>
                            <option value={3}>Art & Design</option>
                            <option value={4}>Marketing</option>
                            <option value={5}>Finance</option>
                          </select>
                        </div>
                        <div className="input-grp">
                          <input
                            type="text"
                            placeholder="Search For Course . . ."
                          />
                          <button type="submit">
                            <i className="flaticon-searching" />
                          </button>
                        </div>
                      </form>
                    </div> */}
                    {/* Uncomment and fix the action buttons as needed */}
                    {/* <div className="tgmenu__action">
                      <ul className="list-wrap">
                        <li className="header-btn login-btn">
                          <Link href="/contact" className="btn">
                            Log in
                          </Link>
                        </li>
                      </ul>
                    </div> */}
                  </nav>
                </div>
                {/* Mobile Menu */}
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
                    {/* <div className="tgmobile__search">
                      <form action="#">
                        <input type="text" placeholder="Search here..." />
                        <button>
                          <i className="fas fa-search" />
                        </button>
                      </form>
                    </div> */}
                    <div className="tgmobile__menu-outer">
                      <MobileMenu isbgBlue={isbgBlue} />
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
                            <i className="fab fa-instagram" />
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
