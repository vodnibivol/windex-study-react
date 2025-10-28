import { useEffect, useState } from 'react';
import './Navbar.scss';

import { IoCloseOutline, IoMenuOutline } from 'react-icons/io5';

const Navbar = () => {
  const [shadow, setShadow] = useState(false);
  useEffect(() => {
    document.addEventListener('scroll', toggleNavShadow);

    return () => document.removeEventListener('scroll', toggleNavShadow);
  }, []);

  function toggleNavShadow() {
    setShadow(window.scrollY > 0);
  }

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={shadow ? 'shadow' : ''}>
      <div className="nav-left">
        <div className="logo">
          <img src="./logo.svg" alt="Windex logo" />
          <span>Windex</span>
        </div>
        {menuOpen && (
          <div className="links">
            <a href="/home" className="underline-hover">
              Home
            </a>
            <a href="/about" className="underline-hover">
              About
            </a>
            <a href="/solutions" className="underline-hover">
              Solutions
            </a>
            <a href="/projects" className="underline-hover">
              Projects
            </a>
          </div>
        )}
      </div>
      <div className="nav-right">
        <button type="button" className="contact-button">
          Contact Us
        </button>
        <button type="button" className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <IoCloseOutline /> : <IoMenuOutline />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
