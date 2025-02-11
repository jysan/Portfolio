import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGitAlt, FaArrowUp } from "react-icons/fa";
import { SiTypescript } from 'react-icons/si';
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import mail from "../assets/pulsora.png";
import AC2FL from "../assets/AC2FL.webp";
import photoProfile from "../assets/pdp.jpg"; // Chemin correct vers la vraie image

const projects = [
  {
    title: "Pulsora",
    date: "Octobre 2024 - Mars 2025",
    image: mail,
  },
  {
    title: "AC2FL",
    date: "Décembre 2023 - Janvier 2024",
    image: AC2FL,
  },
  {
    title: "Webdocumentaire",
    date: "Septembre 2023 - Novembre 2023",
    image: mail,
  },
];

const skills = [
  { icon: FaReact, color: "#61DBFB" },
  { icon: FaHtml5, color: "#E34C26" },
  { icon: FaCss3Alt, color: "#264DE4" },
  { icon: FaJs, color: "#F7DF1E" },
  { icon: FaNodeJs, color: "#3C873A" },
  { icon: FaGitAlt, color: "#F34F29" },
  { icon: SiTypescript, }
];

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="text-white px-6">
      {/* Section Qui suis-je ? */}
      <section id="about" className="flex flex-col items-center justify-center min-h-[70vh] mb-8">
        <h2 className="text-3xl font-bold mb-6">Qui suis-je ?</h2>
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl">
          <img
            src={photoProfile}
            alt="Profile"
            className="w-64 h-64 rounded-2xl object-cover mb-6 md:mb-0 md:mr-8 scale-110"
          />
          <p className="text-lg text-gray-300 max-w-2xl leading-7">
            Je suis un étudiant en 3ème année de BUT Métiers du Multimédia et de l'Internet (MMI), 
            dans le parcours développement web et dispositif intéractif. 
            D'une envie d'acquérir des compétences par le développement web et les médias numériques,
            je m'intéresse à la création de contenus interactifs et innovants. Avec une solide formation en MMI, je suis toujours en quête de nouveaux défis 
            pour perfectionner mes compétences.
          </p>
        </div>
      </section>

      {/* Section Mes compétences */}
      <section id="skills" className="flex flex-col items-center justify-center min-h-[70vh] mb-8">
        <h2 className="text-3xl font-bold mb-6">Mes compétences</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                className="flex items-center justify-center p-4 rounded-full bg-gray-800"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={50} color={skill.color} />
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Section Mes projets */}
      <section id="projects" className="flex flex-col items-center justify-center min-h-[70vh]">
        <h2 className="text-3xl font-bold mb-6">MES PROJETS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {projects.map((project, index) => (
            <div key={index} className="relative group bg-gray-900 rounded-lg overflow-hidden shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105 group-hover:blur-sm"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto">
                  Découvrir
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 p-3 rounded-full shadow-lg hover:bg-blue-500 transition-colors"
        >
          <FaArrowUp size={24} color="#FFFFFF" />
        </button>
      )}
    </main>
  );
}
