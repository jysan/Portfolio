import logo from "../assets/logo-portfolio.png";
import { FaWhatsapp } from "react-icons/fa"; 
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="footer-contact" className="bg-black text-white py-12 flex flex-col items-center">
      
      <div className="w-16 h-16 mb-4">
        <img src={logo} alt="Logo Portfolio" className="w-full h-full object-cover rounded-md" />
      </div>
      
      
      <p className="mb-4 text-lg">Me contacter</p>
      
      
      <div className="flex space-x-6">
        <a href="www.linkedin.com/in/sanjy-boot-327008278" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={40} color="3182ce"/>
        </a>
        <a href="mailto:sanjy.boot@gmail.com">
          <IoIosMail size={40} color="3182ce"/>
        </a>
        <a href="https://wa.me/0616910139" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={40} color="3182ce"/>
        </a>
      </div>
     
      <p className="mt-4">Un projet de Sanjy BOOT - © 2024 Portfolio - Tous droits Réservés.</p>
    </footer>
  );
}
