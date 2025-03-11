import { FaArrowUp, FaReact,FaWordpress, FaGitAlt } from "react-icons/fa";
import { SiTypescript,SiDocker, SiTailwindcss, SiAdobephotoshop, SiAdobeindesign, SiBlender } from "react-icons/si";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import pulsora from "../assets/pulsora.png";
import AC2FL from "../assets/AC2FL.webp";
import webdoc from "../assets/webdoc.png";
import photoProfile from "../assets/pics.png";
import ProjectPopup from "../components/ProjectPopup";
import VeilleCarousel from "../components/VeilleCarousel";
import lego from "../assets/lego.mp4"
import lego2 from "../assets/lego2.mp4"
import lego3 from "../assets/lego3.mp4"


type Project = {
  title: string;
  date: string;
  image: string;
  description: string;
  tools: string[]
  lien: string,
};

const projects: Project[] = [
  {
    title: "Pulsora",
    date: "Octobre 2024 - Mars 2025",
    image: pulsora,
    description: "Une application web et mobile qui sert à suivre les joueurs d'un club de football .",
    tools: ["React","Typescript", "Tailwindcss", "Docker","Figma","Git"],
    lien: "https://github.com/jpkamdem/pulsora-final.git",
  },
  {
    title: "AC2FL",
    date: "Décembre 2023 - Janvier 2024",
    image: AC2FL,
    description: "Une refont du site vitrine AC2FL.",
    tools: ["PHP", "Tailwind CSS","Figma","Git"],
    lien: "https://github.com/rboucheron/AC2FL.git",
    
  },
  {
    title: "Webdocumentaire",
    date: "Septembre 2023 - Novembre 2023",
    image: webdoc,
    description: "Ce projet à pour sujet un reportage sur un traiteur italien .",
    tools: ["HTML", "CSS", "JavaScript", "Figma","Git"],
    lien: "https://github.com/GuedesAlexandre/Webdoc.git",
  },
];

const skills = [
  { icon: FaReact, color: "#61DBFB", title: "React" },
  { icon: SiTypescript, color: "#3178C6", title: "TypeScript" },
  { icon: FaWordpress, color: "#21759B", title: "WordPress" },
  { icon: FaGitAlt, color: "#F34F29", title: "Git" },
  { icon: SiDocker, color: "#2496ED", title: "Docker" },
  { icon: SiTailwindcss, color: "#06B6D4", title: "Tailwind CSS" },
  { icon: SiAdobeindesign, color: "#FF0099", title: "Indesign" },
  { icon: SiAdobephotoshop, color: "#264DE4", title: "Photoshop" },
  { icon: SiBlender, color: "#F34F29", title: "Blender" },
];

export default function Home() {
  const [showButton, setShowButton] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
      <section id="about" className="flex flex-col items-center justify-center min-h-[70vh] mb-8">
        <h2 className="text-3xl font-bold mb-6">Qui suis-je ?</h2>
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl">
        <video
        src={lego3} // Ton fichier vidéo importé
        autoPlay
        muted
        playsInline
        className="w-64 h-96 rounded-2xl object-cover mb-6 md:mb-0 md:mr-8 scale-110 shadow-lg"/>
        <p className="text-lg text-gray-300 max-w-2xl leading-7">
            
        Je suis Sanjy BOOT, actuellement je suis en 3ème année du BUT Métiers du Multimédia et de l’Internet (MMI) spécialité développement web et dispositif intéractif, j’ai fait un bac sciences technologique en laboratoire.

        </p>
        </div>
      </section>

      <section id="skills" className="flex flex-col items-center justify-center min-h-[70vh] mb-8">
        <h2 className="text-3xl font-bold mb-6">Mes compétences</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div key={index} className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-800"
                whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <Icon size={50} color={skill.color} />
                <p className="mt-2 text-sm text-gray-300">{skill.title}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section id="projects" className="flex flex-col items-center justify-center min-h-[70vh]">
        <h2 className="text-3xl font-bold mb-6">MES PROJETS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative group bg-gray-900 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105 group-hover:blur-sm"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto"
                  onClick={() => setSelectedProject(project)}
                >
                  Découvrir
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="veille" className="flex flex-col items-center justify-center min-h-[70vh]">
        <h2 className="text-3xl font-bold mb-6">MA VEILLE</h2>
        <p className="items-center mb-5">La veille est centrée sur la cybersécurité car suite au BUT MMI j'aimerais m'orienter vers ce domaine</p>
        <VeilleCarousel />

      </section>

      {selectedProject && <ProjectPopup project={selectedProject} onClose={() => setSelectedProject(null)} />}

      {showButton && (
        <button onClick={scrollToTop} className="fixed bottom-8 right-8 bg-blue-600 p-3 rounded-full shadow-lg hover:bg-blue-500 transition-colors">
          <FaArrowUp size={24} color="#FFFFFF" />
        </button>
      )}
    </main>
  );
}
