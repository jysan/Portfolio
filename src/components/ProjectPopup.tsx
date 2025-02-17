import { motion } from "framer-motion";
import { FaTimes, FaGitAlt } from "react-icons/fa";



interface ProjectPopupProps {
  project: {
    title: string;
    description: string;
    tools: string[];
    lien: string;
  };
  onClose: () => void;
}


export default function ProjectPopup({ project, onClose }: ProjectPopupProps) {
  return (
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-md flex items-center justify-center z-50">
      <motion.div
        className="bg-gray-900 p-6 rounded-xl shadow-lg w-11/12 md:w-1/2 relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
      >
        <button className="absolute top-4 right-4 text-gray-400 hover:text-white" onClick={onClose}>
          <FaTimes size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <h3 className="text-xl font-semibold mb-2">Outils utilisés :</h3>
        <ul className="list-disc pl-5 text-gray-400">
          {project.tools.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
        {project.lien && (
          <a 
            href={project.lien} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center white hover:text-blue-400 mt-2"
          >
            <FaGitAlt size={24} className="mr-2" />
            Voir le projet sur GitHub
          </a>
        )}

      </motion.div>
    </div>
  );
}
