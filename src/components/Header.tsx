import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Github, Linkedin, LucideFacebook } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedium } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
    { name: "Certifications", href: "#certifications" },
  ];
  const socialItems = [
    {
      href: "https://github.com/mo7amedgom3a",
      icon: <Github className="text-white hover:text-secondary transition-colors" size={24} />,
    },
    {
      href: "https://www.linkedin.com/in/mohamed-gomaa-626a18249",
      icon: <Linkedin className="text-white hover:text-secondary transition-colors" size={24} />,
    },
    {
      href: "https://www.facebook.com/profile.php?id=100011375729397",
      icon: <LucideFacebook className="text-white hover:text-secondary transition-colors" size={24} />,
    },
    {
      href: "https://medium.com/@mo7amed.gom3a.7moda",
      icon: <FontAwesomeIcon icon={faMedium} className="text-white hover:text-secondary transition-colors" size="lg" />,
    },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <a href="#" className="text-xl font-bold text-white">
              <span className="text-accent font-serif italic text-2xl bg-gradient-to-r from-purple-400 via-pink-700 to-red-500 text-transparent bg-clip-text ">7moda</span>
            </a>
            <div className="social-icons flex items-center space-x-4">
              {socialItems.map((item) => (
                <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
              key={item.name}
              href={item.href}
              className="text-white hover:text-secondary transition-colors relative group"
              >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </a>
            ))}
            </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              className="mobile-menu-button text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu md:hidden py-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-white hover:text-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;