import ReactPlayer from "react-player";
import bannerVid from "../assets/videos/banner.mp4";
import SubHeading from "../components/common/SubHeading";
import ArrowButton from "../components/common/ArrowButton";
import { Link } from "react-router-dom";
import CircularText from "../components/common/CircularText";
import heroImg from "../assets/images/home-hero.webp";
import aboutImg from "../assets/images/home-about.webp";
import { PiStrategyBold } from "react-icons/pi";
import { MdSecurity } from "react-icons/md";
import { lazy } from "react";

const AllServices = lazy(() => import("../components/website/AllServices"));
const OurProcess = lazy(() => import("../components/common/OurProcess"));
const Testimonials = lazy(() => import("../components/common/Testimonials"));
const Faq = lazy(() => import("../components/common/Faq"));
const WhyWorkWithUs = lazy(() => import("../components/common/WhyWorkWithUs"));
const VideoSection = lazy(() => import("../components/common/VideoSection"));
const InstagramFeed = lazy(() => import("../components/common/InstagramFeed"));

const Home = () => {
  return (
    <div className="mt-[4.5rem]">
      <section className="relative min-h-screen">
        <div className="absolute inset-0 bg-black/60 z-[2]" />
        <ReactPlayer
          url={bannerVid}
          playing
          muted
          loop
          playsinline
          width="100%"
          height="100%"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
          config={{
            file: {
              attributes: {
                style: {
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                },
              },
            },
          }}
        />
        <div className="wrapper absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2] flex flex-col-reverse gap-5 sm:grid grid-cols-[1fr,20%] items-center">
          <div data-aos="fade-up" className="max-w-[50rem] space-y-1">
            <SubHeading heading="Digital Excellence" className="text-white" />
            <h1 className="text_xl">
              Empowering Businesses with <br />
              <span className="text-primary">Cutting-Edge Technology Solutions</span>
            </h1>
            <p className="desc !text-xl">
              Your Partner for AI, Mobile Apps, Web Development & Digital Success
            </p>
            <div className="pt-10 flex sm:flex-row flex-col items-center gap-2">
              <ArrowButton
                to="/contact-us"
                className="bg-white text-black hover:bg-transparent hover:text-white border border-white"
              >
                Get A Free Consultation
              </ArrowButton>
              <Link to="/services" className="w-full sm:min-w-[10rem] sm:w-auto text-center btn-rounded border border-white text-white bg-transparent hover:bg-white hover:text-black">
                Our Services
              </Link>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="flex justify-end sm:self-end sm:pr-[3rem] lg:pr-[8rem]"
          >
            <CircularText />
          </div>
        </div>
      </section>
      <section className="wrapper">
        <div
          className="sm:max-w-[85vw] lg:!max-w-[60vw] w-full aspect-[2.14/1
] mx-auto -translate-y-[4rem] lg:-translate-y-[4rem] relative z-[5] rounded-[3rem] overflow-hidden bg-black"
        >
          <img
            loading="lazy"
            src={heroImg}
            className="h-full w-full object-cover scale-[101%]"
            alt="Hero"
            data-aos="fade-right"
          />
          <div className="2xl:absolute right-0 top-1/2 2xl:-translate-y-1/2 p-5 2xl:px-10 2xl:w-2/5">
            <p
              data-aos="fade-left"
              className="text-lg md:text-2xl !font-normal text-white/70"
            >
              <b className="text-white">Mandapati Solutions</b> delivers comprehensive technology 
              solutions including <b className="text-white">AI development</b>, <b className="text-white">mobile applications</b>, 
              web development, digital marketing, and e-commerce solutions to help your business thrive.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-14 wrapper space-y-3">
        <div data-aos="fade-up" className="flex justify-center">
          <SubHeading heading="About Us" className="text-white" />
        </div>
        <div className="grid md:grid-cols-[40%,1fr] gap-10">
          <div className="relative w-full rounded-[3rem] overflow-hidden">
            <img
              loading="lazy"
              data-aos="fade-right"
              src={aboutImg}
              className="w-full h-full object-cover rounded-lg"
              alt="About Us"
            />
            <div
              data-aos="fade-right"
              className="absolute left-4 bottom-5 bg-primary text-white p-5 rounded-[1.5rem] shadow-xl text-center"
            >
              <h2 className="text2 !font-bold">100%</h2>
              <p className="desc !text-base">Success Rate</p>
            </div>
          </div>
          <div data-aos="fade-up" className="space-y-3">
            <h2 className="text1">
              Transforming Businesses with Innovative Technology Solutions
            </h2>
            <p className="desc text-white/70">
              At Mandapati Solutions, we are committed to delivering cutting-edge 
              technology solutions that drive business growth and success. From AI 
              development and mobile applications to full-stack web development, 
              digital marketing, e-commerce platforms, and comprehensive software 
              training, we provide end-to-end services tailored to your unique needs. 
              Our expert team combines technical excellence with strategic thinking 
              to deliver solutions that make a real impact on your bottom line.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 py-6">
              <div className="bg-[#121212] flex items-center gap-3 justify-center rounded p-3">
                <div className="bg-black rounded-full w-14 min-w-14 h-14 flex items-center justify-center">
                  <PiStrategyBold size={30} className="fill-secondary" />
                </div>
                <p className="text3">Future-Focused Strategies</p>
              </div>
              <div className="bg-[#121212] flex items-center gap-3 justify-center rounded p-3">
                <div className="bg-black rounded-full w-14 min-w-14 h-14 flex items-center justify-center">
                  <MdSecurity size={30} className="fill-secondary" />
                </div>
                <p className="text3">Secure and Scalable Systems</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex gap-2">
                <div className="w-4 h-4 min-w-4 bg-secondary rounded-full mt-[.30rem]" />
                <p className="desc">
                  Comprehensive Solutions from AI to E-commerce
                </p>
              </div>
              <div className="flex gap-2">
                <div className="w-4 h-4 min-w-4 bg-secondary rounded-full mt-[.30rem]" />
                <p className="desc">
                  Expert Team Delivering Measurable Results
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <VideoSection variant="services" />
      <AllServices length={3} />
      <VideoSection variant="schoolApp" />
      <OurProcess showButton={true} />
      <VideoSection variant="jesusSchool" />
      <Testimonials />
      <VideoSection variant="joinUs" />
      <Faq showButton={true} />
      <InstagramFeed />
      {/* <SlidingComponent /> */}
      <WhyWorkWithUs />
    </div>
  );
};

export default Home;
