import mail from "../assets/pulsora.png";
// import project2 from "../images/project2.jpg";
// import project3 from "../images/project3.jpg";

const projects = [
  {
    title: "Pulsora",
    date: "janvier 23, 2025",
    image: mail,
  },
  {
    title: "AC2L",
    date: "janvier 23, 2025",
    image: mail,
  },
  {
    title: "Webdocumentaire",
    date: "janvier 23, 2025",
    image: mail, // Remplace par project3 si dispo
  },
];

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6">
      <h2 className="text-3xl font-bold mb-8">PROJETS SCOLAIRES</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
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

