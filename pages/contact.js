import Breadcrumb from "@/components/layout/Breadcrumb";
import Footer1 from "@/components/layout/footer/Footer1";
import Header1 from "@/components/layout/header/Header1";
import Layout from "@/components/layout/Layout";
import Head from "next/head";
import Link from "next/link";

export default function Contact() {
  return (
    <Layout headerStyle={2} footerStyle={1}>
      <Head>
        <title>Contact Us | Grey Matter solutions</title>
        <meta property="og:title" content="Contact Us" key="title" />
      </Head>

      <div className="overflow-hidden">
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
                        <p className="uppercase">
                          15, 22ND STREET, Macmillan Colony, <br /> NANGANALLUR,
                          CHENNAI - 600 061.
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
                <div className="contact-map">
                  {/* <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48409.69813174607!2d-74.05163325136718!3d40.68264649999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bae694479a3%3A0xb9949385da52e69e!2sBarclays%20Center!5e0!3m2!1sen!2sbd!4v1684309529719!5m2!1sen!2sbd"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  /> */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.714704974454!2d80.19085297346103!3d12.990090514475853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526755d9c430b1%3A0x80f908a9d441605e!2s15%2C%2022nd%20St%2C%20Thillaiganga%20Nagar%2C%20Nanganallur%2C%20Chennai%2C%20Tamil%20Nadu%20600061!5e0!3m2!1sen!2sin!4v1721842496723!5m2!1sen!2sin"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* contact-area-end */}
        {/* contact-map */}
      </div>
    </Layout>
  );
}
