import React, {useState} from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" relative mb-10 flex items-center justify-between py-6 px-6 lg:px-10">
      <div className="flex items-center">
        <h2 className="text-2xl md:text-3xl">Portfolio</h2>
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-2xl focus:outline-none">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <div className={`absolute top-16 right-0 w-1/2 bg-slate-950 text-white md:hidden ${isOpen ? 'block' : 'hidden'} shadow-lg`}>
        <div className="flex flex-col items-center gap-4 p-4 text-sm md:text-lg">
          <a href="#About" className="hover:text-blue-400">About</a>
          <a href="#Technology" className="hover:text-blue-400">Technologies</a>
          <a href="#Experience" className="hover:text-blue-400">Experience</a>
          <a href="#Projects" className="hover:text-blue-400">Projects</a>
          <a href="#Contact" className="hover:text-blue-400">Get in Touch</a>
          <a href="#Contactinfo" className="hover:text-blue-400">Contact</a>
        </div>
        <div className="flex items-center justify-center gap-4 text-2xl md:text-3xl p-4">
          <a href="https://www.linkedin.com/in/maria-imran-bba538275/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className='hover:scale-125 transform transition-transform duration-300'>
            <FaLinkedin />
          </a>
          <a href="https://github.com/MariaImran2023" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className='hover:scale-125 transform transition-transform duration-300'>
            <FaGithub />
          </a>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <div className="flex items-center gap-2 lg:gap-6 pl-3 text-sm md:text-lg">
          <a href="#About" className="hover:text-blue-400">About</a>
          <a href="#Technology" className="hover:text-blue-400">Technologies</a>
          <a href="#Experience" className="hover:text-blue-400">Experience</a>
          <a href="#Projects" className="hover:text-blue-400">Projects</a>
          <a href="#Contact" className="hover:text-blue-400">Get in Touch</a>
          <a href="#Contactinfo" className="hover:text-blue-400">Contact</a>
        </div>
        <div className="flex items-center gap-4 text-2xl md:text-3xl">
          <a href="https://www.linkedin.com/in/maria-imran-bba538275/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className='hover:scale-125 transform transition-transform duration-300'>
            <FaLinkedin />
          </a>
          <a href="https://github.com/MariaImran2023" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className='hover:scale-125 transform transition-transform duration-300'>
            <FaGithub />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
