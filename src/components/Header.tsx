import project1 from "../images/project1.jpg";
import project2 from "../images/project2.jpg";
import project3 from "../images/project3.jpg";

const projects = [
  {
    title: "L’art des liens",
    date: "janvier 23, 2025",
    image: project1,
  },
  {
    title: "Au-delà de l’obstacle",
    date: "janvier 23, 2025",
    image: project2,
  },
  {
    title: "Croissance libérée",
    date: "janvier 23, 2025",
    image: project3,
  },
];

export default function Home() {
  return (
    <section className="bg-black text-white py-10 px-6">
      <h2 className="text-2xl font-bold mb-6">PROJETS SCOLAIRES</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-900 rounded-lg overflow-hidden">
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
