import { Link } from "react-router-dom";
import bgImg from "../../assets/images/footer-bg.webp";
import { companyDetails, logo } from "../../content/constant";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="pt-4">
      <div
        className="bg-cover bg-no-repeat bg-center pt-12 pb-6"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="wrapper">
          <div className="flex justify-between flex-wrap gap-6 mb-6">
            <div className="flex justify-start">
              <div className="flex flex-col gap-2">
                <img
                  loading="lazy"
                  src={logo}
                  alt="logo"
                  className="w-[15rem] object-contain"
                />
                 
                <div className="flex items-center gap-3 pt-2">
                  <Link
                    to={companyDetails.facebook}
                    className="w-8 h-8 flex items-center justify-center rounded transition-all duration-300 hover:border-primary group"
                  >
                    <FaFacebookF
                      size={18}
                      className="group-hover:fill-primary group-hover:text-black"
                    />
                  </Link>
                  <Link
                    to={companyDetails.linkedin}
                    className="w-8 h-8 flex items-center justify-center rounded transition-all duration-300 hover:border-primary group"
                  >
                    <FaLinkedinIn
                      size={18}
                      className="group-hover:fill-primary group-hover:text-black"
                    />
                  </Link>
                  <Link
                    to={companyDetails.instagram}
                    className="w-8 h-8 flex items-center justify-center rounded transition-all duration-300 hover:border-primary group"
                  >
                    <AiFillInstagram
                      size={18}
                      className="group-hover:fill-primary group-hover:text-black"
                    />
                  </Link>

                  <Link
                    to={companyDetails.youtube}
                    className="w-8 h-8 flex items-center justify-center rounded transition-all duration-300 hover:border-primary group"
                  >
                    <FaYoutube
                      size={18}
                      className="group-hover:fill-primary group-hover:text-black"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h5 className="text4 underline underline-offset-4">Our Office</h5>
              <ul className="flex flex-col gap-1 list-disc pl-5">
                <li className="text-sm">
                  <Link to={`tel:${companyDetails.phone}`} className="link">
                    {companyDetails.phone}
                  </Link>
                </li>
                <li className="text-sm">
                  <Link to={`mailto:${companyDetails.email}`} className="link">
                    {companyDetails.email}
                  </Link>
                </li>
                <li className="text-sm max-w-sm">{companyDetails.address}</li>
              </ul>
            </div>
          </div>
          <hr className="border-white/20 my-4" />
          <p className="text-sm text-center">
            Copyright © {new Date().getFullYear()} Mandapati Solutions| All
            Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
