import './Navbar.scss';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-left">
        <div className="logo">
          <img src="/logo.svg" alt="Windex logo" />
          <span>Windex</span>
        </div>
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
      </div>
      <div className="nav-right">
        <button type="button">Contact Us</button>
      </div>
    </nav>
  );
};

export default Navbar;
