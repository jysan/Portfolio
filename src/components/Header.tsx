import logo from "../assets/logo-portfolio.png";
import CV from "../assets/CV_Stage_SanjyBOOT.pdf"

const logosite = [
  { image: logo, alt: "Logo Portfolio" },
];

function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-black text-white">
      <div className="flex items-center space-x-4">
        {logosite.map((logoItem, index) => (
          <img
            key={index}
            src={logoItem.image}
            alt={logoItem.alt}
            className="h-10 w-10"
          />
        ))}
        <h1 className="text-xl font-bold">Sanjy's Portfolio</h1>
      </div>
      <nav className="flex space-x-8">
        <a href="#about" className="hover:text-blue-400">Qui suis-je ?</a>
        <a href="#skills" className="hover:text-blue-400">Mes compétences</a>
        <a href="#projects" className="hover:text-blue-400">Mes projets</a>
        <a href="#veille" className="hover:text-blue-400">Ma Veille</a>
        <a href="#footer-contact" className="hover:text-blue-400">Me contacter</a>
      </nav>
      <a
        href={CV}
        download
        className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-500"
      >
        Télécharger mon CV
      </a>
    </header>
  );
}

export default Header;
