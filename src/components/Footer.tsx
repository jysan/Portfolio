import { FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="footer-contact" className="bg-black text-white py-12 flex flex-col items-center">
      {/* Profile Picture Placeholder */}
      <div className="w-16 h-16 bg-gray-700 rounded-md mb-4"></div>
      
      {/* Contact Text */}
      <p className="mb-4 text-lg">Me contacter</p>
      
      {/* Social Icons */}
      <div className="flex space-x-6">
        <a href="www.linkedin.com/in/sanjy-boot-327008278" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={40} color="FFFF00"/>
        </a>
        <a href="mailto:sanjy.boot@gmail.com">
        <IoIosMail size={40} color="FFFF00"/>
        </a>
        <a href="https://wa.me/0616910139" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp size={40} color="FFFF00"/>
        </a>
      </div>
    </footer>
  );
}
