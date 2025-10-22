import banner from "../assets/videos/aboutus.mp4";
import aboutUsImg from "../assets/images/about-us.png";
import SubHeading from "../components/common/SubHeading";
import { Link } from "react-router-dom";
import ourVisionImg from "../assets/images/our vision.png";
import ourMissionImg from "../assets/images/our mission.png";
import whyWeExistImg from "../assets/images/why we exist.png";
import OurCoreValues from "../components/website/OurCoreValues";
import { lazy } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
const PageBanner = lazy(() => import("../components/website/PageBanner"));

const AboutUs = () => {
  return (
    <div className="mt-[4.5rem]">
      <PageBanner
        banner={banner}
        title="About Us"
        links={[{ title: "Home", url: "/" }, { title: "About Us" }]}
      />
      <section className="py-14 relative min-h-screen flex items-center bg-tertiary/40">
        <div className="wrapper grid lg:grid-cols-[40%_1fr] items-center gap-10 text-grayClr z-10 relative">
          <div data-aos="fade-up" className="flex justify-start">
            <img
              loading="lazy"
              src={aboutUsImg}
              className="object-contain sm:scale-110 w-full aspect-square max-h-[60vh] lg:aspect-auto"
              alt=""
            />
          </div>
          <div className="space-y-4">
            <SubHeading heading="Who We Are" className="text-white" />
            <h2 data-aos="fade-up" className="text1 capitalize">
              Your Trusted Partner for{" "}
              <span className="text-stroke-gray text-stroke-white">
                Digital Transformation
              </span>
            </h2>
            <p data-aos="fade-up" className="desc text-white/70">
              Mandapati Solutions is a leading technology company dedicated to 
              empowering businesses with cutting-edge solutions. We specialize in 
              AI development, mobile applications, full-stack web development, 
              digital marketing, e-commerce platforms, and software training. 
              Our mission is to help businesses thrive in the digital age.
              <br />
              At Mandapati Solutions, we combine technical excellence with strategic 
              thinking to deliver solutions that drive real business value. We're 
              committed to understanding your unique challenges and providing 
              tailored solutions that help you achieve your goals and stay ahead 
              of the competition.
            </p>
            <div
              data-aos="fade-up"
              className="grid sm:grid-cols-2 gap-7 py-4 text-white/70"
            >
              <div className="flex items-center gap-2">
                <div className="w-[1rem] h-[1rem] rounded-full bg-white"></div>
                <p className="capitalize">Innovating for Tomorrow</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-[1rem] h-[1rem] rounded-full bg-white"></div>
                <p className="capitalize">Future-Ready Tech Solutions</p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="grid sm:grid-cols-2 gap-5"
            >
              <div className="flex items-center gap-3 bg-[#121212] p-4 rounded-lg">
                <div className="w-3 h-3 min-w-3 bg-primary rounded-full"></div>
                <p className="text-white/90 font-medium">
                  Building reliable solutions with modern tech for global clients
                </p>
              </div>
              <div className="flex items-center gap-3 bg-[#121212] p-4 rounded-lg">
                <div className="w-3 h-3 min-w-3 bg-secondary rounded-full"></div>
                <p className="text-white/90 font-medium">
                  Dedicated to excellence in every project we deliver
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F0F0F0] text-black">
        <div
          data-aos="fade-up"
          className="wrapper py-8 px-3 grid md:grid-cols-[45%_1fr] gap-7 md:gap-16"
        >
          <img
            loading="lazy"
            src={ourVisionImg}
            className="object-contain aspect-video h-full w-full rounded-md"
            alt=""
          />
          <div className="space-y-6">
            <SubHeading heading="Our Vision" className="text-primary" />
            <p className="desc">
              To be the leading technology partner that empowers businesses to 
              achieve digital excellence and sustainable growth. We envision a 
              future where every business, regardless of size, has access to 
              cutting-edge technology solutions that drive innovation, efficiency, 
              and success. Through our comprehensive services in AI, mobile apps, 
              web development, digital marketing, and training, we strive to be 
              the catalyst for digital transformation across industries.
            </p>
            <div>
              <Link
                to="/contact-us"
                className="btn-fullrounded flex items-center gap-2 bg-primary text-white hover:bg-primary/80 w-fit capitalize"
              >
                get in touch <FaArrowRightLong className="mt-[.15rem]" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper pt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-16">
          <div data-aos="fade-up" className="space-y-4">
            <h3 className="text2 text-primary">
              Our <br /> Mission
            </h3>
            <img
              loading="lazy"
              src={ourMissionImg}
              className="md:hidden block object-cover aspect-[6/4] h-fit w-full rounded-sm"
              alt="Our Vision"
            />
            <p className="desc !text-white">
              Our mission is to deliver exceptional technology solutions that 
              drive business growth and success. We are committed to providing 
              comprehensive services including AI development, mobile applications, 
              full-stack web development, digital marketing, e-commerce solutions, 
              and software training. Through innovation, quality, and client-centric 
              approach, we help businesses leverage technology to achieve their goals, 
              improve efficiency, and stay competitive in today's digital marketplace. 
              We believe in building lasting partnerships based on trust, transparency, 
              and measurable results.
            </p>
          </div>
          <img
            loading="lazy"
            data-aos="fade-up"
            src={ourMissionImg}
            className="hidden md:block object-cover aspect-[6/4] h-full w-full rounded-xl"
            alt="Our Vision"
          />
        </div>
      </section>
      <OurCoreValues />
      <section className="pt-7 wrapper space-y-5">
        <div className="grid md:grid-cols-2 gap-7 md:gap-14">
          <div className="flex flex-col overflow-hidden rounded-xl">
            <img
              loading="lazy"
              src={whyWeExistImg}
              alt="Why we exist"
              className="aspect-[6/4] w-full object-cover h-full"
            />
          </div>
          <div className="space-y-3">
            <h2 className="text2 text-primary">Why We Exist</h2>
            <p className="desc">
              In today's rapidly evolving digital landscape, businesses need a 
              technology partner that understands their challenges and delivers 
              solutions that make a real difference. Mandapati Solutions exists 
              to bridge the gap between technology and business success. <br /> <br /> 
              We provide comprehensive technology services including AI development, 
              mobile applications, web development, digital marketing, e-commerce 
              solutions, and software training. Our goal is to empower businesses 
              of all sizes to leverage technology effectively, drive growth, and 
              achieve sustainable success in the digital age.
            </p>
          </div>
        </div>
        <p className="desc">
          Our commitment to excellence, innovation, and client success makes us 
          more than just a technology provider. We are a strategic partner in your 
          growth journey, dedicated to helping you navigate the complexities of 
          the digital world and achieve your business objectives. <br />
          Our Philosophy: We believe that technology should be an enabler of 
          growth, a driver of innovation, and a competitive advantage. Every 
          solution we develop is crafted with precision, quality, and your 
          business goals in mind. We combine technical expertise with strategic 
          thinking to deliver solutions that not only meet your current needs but 
          also position you for future success. With Mandapati Solutions by your 
          side, you have a trusted partner committed to your long-term growth and 
          success.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
