import { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";

const AnimatedIntro = ({ onComplete }: { onComplete: () => void }) => {
  const [showArrow, setShowArrow] = useState(false);

  // Affiche la flèche après 7 secondes
  useEffect(() => {
    const timer = setTimeout(() => setShowArrow(true), 3000);
    return () => clearTimeout(timer); // Cleanup du timer
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white z-50">
      <div className="flex items-center justify-center space-x-6">
        {/* Le texte centré */}
        <p className="text-black text-5xl font-bold underline">Bienvenue sur mon portfolio</p>
      </div>
      {showArrow && (
        <button
          className="absolute bottom-10 text-black text-3xl animate-bounce"
          onClick={onComplete}
        >
          <FaArrowDown />
        </button>
      )}
    </div>
  );
};

export default AnimatedIntro;
