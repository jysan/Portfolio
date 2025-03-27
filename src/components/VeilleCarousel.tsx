import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import hackernews from "../assets/hackernews.png";
import hafnium from "../assets/hafnium.png";
import cert from "../assets/Cert-Fr.png";
import thales from "../assets/thales.png"

const veille = [
  { title: "TheHackerNews", image: hackernews},
  { title: "Cert-FR", image: cert},
  { title: "Cyber Solutions by Thales", image: thales },
];

export default function VeilleCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? veille.length - 1 : prevIndex - 1));
    };
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === veille.length - 1 ? 0 : prevIndex + 1));
    };
  
    return (
      <div className="relative w-full max-w-lg mx-auto flex items-center">
        <button onClick={prevSlide} className="bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-700 mr-4">
          <FaChevronLeft size={24} color="white" />
        </button>
        <div className="overflow-hidden relative h-75 w-full">
          {veille.map((item, index) => (
            <img
              key={index}
              src={item.image}
              alt={item.title}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
            />
          ))}
        </div>
        <button onClick={nextSlide} className="bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-700 ml-4">
          <FaChevronRight size={24} color="white" />
        </button>
      </div>
    );
  }