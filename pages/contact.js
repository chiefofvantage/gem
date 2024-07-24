import Breadcrumb from "@/components/layout/Breadcrumb";
import Footer1 from "@/components/layout/footer/Footer1";
import Header1 from "@/components/layout/header/Header1";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <Header1 />

      <div className="mt-24">
        <Breadcrumb breadcrumbTitle={"Contact"} />
        <section className="contact-area py-12">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="contact-info-wrap">
                  <h2 className="title">Keep In Touch With Us</h2>
                  <p>
                    Alternatively, you can use the form below to send us a
                    message directly. We'll get back to you as soon as possible.
                  </p>
                  <ul className="list-wrap">
                    <li>
                      <div className="icon">
                        <i className="flaticon-pin-1" />
                      </div>
                      <div className="content">
                        <p>
                          15, 22ND STREET, NANGANALLUR, <br /> CHENNAI - 600
                          061.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="flaticon-phone-call" />
                      </div>
                      <div className="content">
                        <Link href="tel:0123456789">+91 90875-57766</Link>
                        <Link href="tel:0123456789">+91 98404-57400 </Link>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="flaticon-email" />
                      </div>
                      <div className="content">
                        <Link
                          href="mailto:GREYMATTEREDUSOLUTIONS@GMAIL.Com"
                          className="lowercase"
                        >
                          GREYMATTEREDUSOLUTIONS@GMAIL.Com
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="contact-form-wrap">
                  <h4 className="title">Get in Touch</h4>
                  <form
                    id="contact-form"
                    action="assets/mail.php"
                    method="POST"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input
                            name="name"
                            type="text"
                            placeholder="Name *"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input
                            name="email"
                            type="email"
                            placeholder="E-mail *"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input
                            name="phone"
                            type="number"
                            placeholder="Phone *"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input
                            name="subject"
                            type="text"
                            placeholder="Your Subject *"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-grp">
                      <textarea name="message" placeholder="Message" required />
                    </div>
                    <button type="submit" className="btn">
                      Send Message
                    </button>
                  </form>
                  <p className="ajax-response mb-0" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* contact-area-end */}
        {/* contact-map */}
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48409.69813174607!2d-74.05163325136718!3d40.68264649999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bae694479a3%3A0xb9949385da52e69e!2sBarclays%20Center!5e0!3m2!1sen!2sbd!4v1684309529719!5m2!1sen!2sbd"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <div className="bg-[#061e43]">
        <Footer1 />
      </div>
    </>
  );
}
