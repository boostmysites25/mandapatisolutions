import ReactPlayer from "react-player";
import { FaDownload } from "react-icons/fa";

const VideoSection = ({ variant = "services" }) => {
  // Video URLs
  const servicesVideoUrl = "https://www.youtube.com/watch?v=k4BtrMmm33A";
  const joinUsVideoUrl = "https://www.youtube.com/watch?v=X3Da7B7VxZ0";
  const bapujiAppVideoUrl = "https://www.youtube.com/watch?v=3k4uLbHudPg";
  const jesusSchoolVideoUrl = "https://www.youtube.com/watch?v=61qzkeQYsaY";

  if (variant === "services") {
    return (
      <section className="py-14 bg-[#111111]">
        <div className="wrapper grid md:grid-cols-2 gap-10 items-center">
          {/* Left Column - Video */}
          <div className="w-full">
            <ReactPlayer
              url={servicesVideoUrl}
              width="100%"
              height="400px"
              controls
              className="rounded-xl overflow-hidden"
            />
          </div>

          {/* Right Column - Services List */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Website & Mobile Development Services
            </h2>
            <p className="text-gray-200 text-lg">
              Professional website development services for schools, offices,
              and ecommerce stores. Expertise in building
            </p>

            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Office Website Design
                </h3>
                <p className="text-gray-600">
                  Tailored website solutions for offices to enhance online
                  presence and functionality.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  School Mobile App Development
                </h3>
                <p className="text-gray-600">
                  Custom mobile apps for schools and colleges in both Android
                  and iOS platforms.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Ecommerce App Development
                </h3>
                <p className="text-gray-600">
                  Specialized in creating ecommerce apps for online stores with
                  seamless user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === "joinUs") {
    return (
      <section className="py-14 wrapper">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Join us today
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Welcome to{" "}
              <strong className="text-white">Mandapati Solutions (MS)</strong>,
              where creativity meets technology! We are a dynamic,
              forward-thinking company dedicated to bringing your unique ideas
              to life with personalized products and cutting-edge digital
              solutions. Whether you're looking for custom merchandise such as
              t-shirts, mugs, keychains, and apparel, or need professional
              website and mobile app development for your school, business, or
              e-commerce store.
            </p>
          </div>

          {/* Right Column - Video */}
          <div className="w-full">
            <ReactPlayer
              url={joinUsVideoUrl}
              width="100%"
              height="400px"
              controls
              className="rounded-xl overflow-hidden"
            />
          </div>
        </div>
      </section>
    );
  }

  if (variant === "schoolApp") {
    return (
      <section className="py-14 bg-[#F0F0F0]">
        <div className="wrapper grid md:grid-cols-2 gap-10 items-center">
          {/* Left Column - Video */}
          <div className="w-full">
            <ReactPlayer
              url={bapujiAppVideoUrl}
              width="100%"
              height="350px"
              controls
              className="rounded-xl overflow-hidden"
            />
          </div>

          {/* Right Column - App Features */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              School Mobile App Development
            </h2>
            <p className="text-gray-600 text-lg">
              LAUNCHING THE OFFICIAL SCHOOL APP FOR BAPUJI EM SCHOOL
            </p>

            <a
              href="https://play.google.com/store/apps/details?id=com.bapujischoolapp"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-r from-primary to-secondary p-6 rounded-lg text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <p className="font-bold text-lg mb-2">
                Available on Google Play Store!
              </p>
              <p className="text-sm mb-3">
                Download the app today and experience seamless school
                management.
              </p>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <span>Download Now</span>
                <FaDownload className="w-5 h-5" />
              </div>
            </a>
          </div>
        </div>
      </section>
    );
  }

  if (variant === "jesusSchool") {
    return (
      <section className="py-14 bg-[#F0F0F0]">
        <div className="wrapper grid md:grid-cols-2 gap-10 items-center">
          {/* Left Column - Video */}
          <div className="w-full">
            <ReactPlayer
              url={jesusSchoolVideoUrl}
              width="100%"
              height="350px"
              controls
              className="rounded-xl overflow-hidden"
            />
          </div>

          {/* Right Column - App Features */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Jesus EM High School App
            </h2>
            <p className="text-gray-600 text-lg">
              LAUNCHING THE OFFICIAL SCHOOL APP FOR JESUS EM HIGH SCHOOL
            </p>

            <a
              href="https://play.google.com/store/apps/details?id=com.jesusschoolapp"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-r from-primary to-secondary p-6 rounded-lg text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <p className="font-bold text-lg mb-2">
                Available on Google Play Store!
              </p>
              <p className="text-sm mb-3">
                Download the app today and stay connected with Jesus EM High
                School.
              </p>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <span>Download Now</span>
                <FaDownload className="w-5 h-5" />
              </div>
            </a>
          </div>
        </div>
      </section>
    );
  }

  return null;
};

export default VideoSection;
