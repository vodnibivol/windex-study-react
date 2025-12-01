import { useEffect, useState } from 'react';
import './Navbar.scss';

import { IoCloseOutline, IoMenuOutline } from 'react-icons/io5';
import { wipAlert } from '../helpers/Utils';

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
      <div className="content">
        <div className="nav-left">
          <div className="logo">
            <img src="./logo.svg" alt="Windex logo" />
            <span>Windex</span>
          </div>
          <div className={'links' + (menuOpen ? ' menu-open' : '')}>
            <a href="#" className="underline-hover" onClick={wipAlert}>
              Home
            </a>
            <a href="#" className="underline-hover" onClick={wipAlert}>
              About
            </a>
            <a href="#" className="underline-hover" onClick={wipAlert}>
              Solutions
            </a>
            <a href="#" className="underline-hover" onClick={wipAlert}>
              Projects
            </a>
          </div>
        </div>
        <div className="nav-right">
          <button type="button" className="contact-button" onClick={wipAlert}>
            Contact Us
          </button>
          <button type="button" className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <IoCloseOutline /> : <IoMenuOutline />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
