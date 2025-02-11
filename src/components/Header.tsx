function Header() {
    return (
      <header className="flex items-center justify-between px-8 py-4 bg-black text-white">
        <div className="flex items-center space-x-4">
          <img src="/path-to-logo.png" alt="Logo" className="h-10 w-10" />
          <h1 className="text-xl font-bold">Sanjy's Portfolio</h1>
        </div>
        <nav className="flex space-x-8">
          <a href="#about" className="hover:text-blue-400">Qui suis-je ?</a>
          <a href="#projects" className="hover:text-blue-400">Mes projets</a>
          <a href="#skills" className="hover:text-blue-400">Mes compétences</a>
          <a href="#footer-contact" className="hover:text-blue-400">Me contacter</a>
        </nav>
        <a href="/path-to-cv.pdf" download className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-500">
          Télécharger mon CV
        </a>
      </header>
    );
  }
  
  export default Header;
  