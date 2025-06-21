import { navItems } from "@/data";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <nav className="fixed top-0 right-0 left-0 z-50 bg-[#3C3A39] px-6 py-4">
        <div className="flex items-center justify-between">
          <a
            href="/"
            className={cn(
              "text-lg font-bold text-white transition-opacity",
              isMenuOpen ? "opacity-0" : "opacity-100",
            )}
          >
            Dico Diaz Dussan
          </a>
          <div className="hidden items-center space-x-8 md:flex">
            {navItems.map(({ name, href }) => (
              <a
                key={name}
                href={href}
                className="text-white transition-colors duration-200 hover:text-gray-300"
              >
                {name}
              </a>
            ))}
          </div>
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none md:hidden"
            aria-label="Toggle menu"
          >
            <FaBars
              className={cn(
                "absolute h-6 w-6 transition-opacity",
                isMenuOpen ? "opacity-0" : "opacity-100",
              )}
            />
            <FaTimes
              className={cn(
                "h-6 w-6 transition-opacity",
                isMenuOpen ? "opacity-100" : "opacity-0",
              )}
            />
          </button>
        </div>
      </nav>
      <div
        className={cn(
          "fixed inset-0 z-40 bg-[#3C3A39] transition-transform duration-300 ease-in-out md:hidden",
          isMenuOpen ? "-translate-y-0" : "-translate-y-full",
        )}
      >
        <div className="flex flex-col gap-y-8 px-6 pt-20">
          {navItems.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              onClick={closeMenu}
              className="border-b border-[#6F6C6B] pb-2 text-4xl font-light text-[#FFF5E1] transition-colors duration-200 hover:text-gray-300"
            >
              {name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};
