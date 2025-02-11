import mail from "../assets/pulsora.png";
// import project2 from "../images/project2.jpg";
// import project3 from "../images/project3.jpg";

const projects = [
  {
    title: "Pulsora",
    date: "Octobre 2024 - Mars 2025",
    image: mail,
  },
  {
    title: "AC2L",
    date: "Décembre 2023 - Janvier 2024",
    image: mail,
  },
  {
    title: "Webdocumentaire",
    date: "Septembre 2023 - Novembre 2023",
    image: mail, // Remplace par project3 si dispo
  },
];

export default function Home() {
  return (
    <section id="projects" className="flex flex-col items-center justify-center min-h-screen text-white px-6">
      <h2 className="text-3xl font-bold mb-8">MES PROJETS</h2>
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
  );
}
