import Layout from "@/components/layout/Layout";
import About1 from "@/components/sections/About1";
import Banner1 from "@/components/sections/Banner1";
import Categories1 from "@/components/sections/Categories1";
import Cta1 from "@/components/sections/Cta1";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { SlideFromBottomAndFadeIn } from "@/components/animation/animation";
import { Navigation, Pagination } from "swiper/modules";

export default function Home1() {
  return (
    <>
      <Layout headerStyle={2} footerStyle={1}>
        <Banner1 />
        {/* <Brand1 /> */}
        <About1 />
        {/* <Course1 /> */}

        <div>
          <Swiper
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            // className=""
            style={{ height: "500px" }}
          >
            {/* <SwiperSlide><img src="/assets/img/custom/slide-1.jpg" /></SwiperSlide> */}
            <SwiperSlide>
              <div
                style={{
                  width: "100%",
                  height: "500px", // Set your desired height
                  backgroundImage: 'url("/assets/img/custom/slide-1.jpg")', // Replace with your image URL
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{
                  width: "100%",
                  height: "500px", // Set your desired height
                  backgroundImage: 'url("/assets/img/custom/slide-2.jpg")', // Replace with your image URL
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{
                  width: "100%",
                  height: "500px", // Set your desired height
                  backgroundImage: 'url("/assets/img/custom/slide-3.jpg")', // Replace with your image URL
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{
                  width: "100%",
                  height: "500px", // Set your desired height
                  backgroundImage: 'url("/assets/img/custom/slide-4.jpg")', // Replace with your image URL
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{
                  width: "100%",
                  height: "500px", // Set your desired height
                  backgroundImage: 'url("/assets/img/custom/slide-5.jpg")', // Replace with your image URL
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </SwiperSlide>
          </Swiper>
        </div>
        <Categories1 />
        {/* <Testimonial1 /> */}
        {/* <Instructor1 /> */}
        {/* <Blog1 /> */}

        <SlideFromBottomAndFadeIn delay={0.25}>
          <Cta1
            primaryHeading="Unlock Your Potential with GREY MATTER"
            description="Elevate your academic journey with GREY MATTER. From spell bee success to MBBS abroad and enriching field trips, we’re here to guide you. Start today!"
            buttonText="Get Started Now"
          />
        </SlideFromBottomAndFadeIn>
        <div className="m-12" style={{ height: "120px" }}></div>
        {/* <Newsletter1 /> */}
      </Layout>
    </>
  );
}
