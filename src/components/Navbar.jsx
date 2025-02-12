import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import images from './assets';

const NavLink = ({ href, children, onClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const navbar = document.querySelector('nav');
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      onClick && onClick();
    }
  };

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      className="relative group cursor-pointer text-gray-700 hover:text-primary-100 transition-colors duration-300"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-100 group-hover:w-full transition-all duration-300" />
    </motion.a>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ opacity: { duration: 2 } }}
      className="sticky top-0 shadow-md z-50 bg-white w-full font-bold px-6 py-4 flex justify-between items-center"
    >
      <div className="text-2xl text-primary-100 font-semibold">Logo</div>
      
      <div className="hidden md:flex space-x-6">
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#about-us">About</NavLink>
        <NavLink href="#products">Products</NavLink>
        <NavLink href="#career">Career</NavLink>
        <NavLink href="#contact">Contact</NavLink>
        <div className="flex gap-2 items-center cursor-pointer group">
          <img className='group-hover:animate-spin' src={images.globe} height={20} width={20} alt="Globe Icon" />
          <span>India</span>
        </div>
      </div>
      
      <div className="md:hidden" ref={menuRef}>
        <button onClick={() => setIsOpen(!isOpen)}>
          <img src={isOpen ? images.cross : images.burgerMenu} height={24} width={24} alt="Menu Icon" />
        </button>
      </div>
      
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center space-y-4 py-6 rounded-lg md:hidden"
        >
          <NavLink href="#home" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink href="#about-us" onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink href="#products" onClick={() => setIsOpen(false)}>Products</NavLink>
          <NavLink href="#career" onClick={() => setIsOpen(false)}>Career</NavLink>
          <NavLink href="#contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
          <div className="flex gap-2 items-center cursor-pointer hover:text-primary-100 transition-colors duration-300">
            <img src={images.globe} height={20} width={20} alt="Globe Icon" />
            <span>India</span>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
