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
      <div className="content">
        <div className="nav-left">
          <div className="logo">
            <img src="./logo.svg" alt="Windex logo" />
            <span>Windex</span>
          </div>
          <div className={'links' + (menuOpen ? ' menu-open' : '')}>
            <a href="#" className="underline-hover" onClick={() => alert('did not implement that currently:)')}>
              Home
            </a>
            <a href="#" className="underline-hover">
              About
            </a>
            <a href="#" className="underline-hover">
              Solutions
            </a>
            <a href="#" className="underline-hover">
              Projects
            </a>
          </div>
        </div>
        <div className="nav-right">
          <button type="button" className="contact-button" onClick={() => alert('did not implement that currently:)')}>
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
