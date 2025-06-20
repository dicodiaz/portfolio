import navItems from "@/data/navItems";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <nav className="relative z-50 bg-[#3C3A39] px-6 py-4 text-white">
        <div className="flex items-center justify-between">
          <a
            href="/"
            className={`text-lg font-bold transition-opacity ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
          >
            Dico Diaz Dussan
          </a>
          <div className="hidden items-center space-x-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white transition-colors duration-200 hover:text-gray-300"
              >
                {item.name}
              </a>
            ))}
          </div>
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none md:hidden"
            aria-label="Toggle menu"
          >
            <Menu
              className={`absolute h-6 w-6 transition-opacity ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
            />
            <X
              className={`h-6 w-6 transition-opacity ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
            />
          </button>
        </div>
      </nav>
      <div
        className={`fixed inset-0 z-40 bg-[#3C3A39] transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "-translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col gap-y-8 px-6 pt-20">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={closeMenu}
              className="border-b border-[#6F6C6B] pb-2 text-4xl font-light text-[#FFF5E1] transition-colors duration-200 hover:text-gray-300"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
