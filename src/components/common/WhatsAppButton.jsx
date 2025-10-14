import { FaWhatsapp } from "react-icons/fa";
import { companyDetails } from "../../content/constant";

const WhatsAppButton = () => {
  const phoneNumber = companyDetails.phone.replace(/[\s+]/g, ""); // Remove spaces and +
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce hover:scale-110"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp size={32} />
    </a>
  );
};

export default WhatsAppButton;

