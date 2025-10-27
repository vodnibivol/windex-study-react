import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="top">
        <h1>Ready to Go Green With Wind Power?</h1>
        <ul className="contact-list">
          <li>4516 Washington Ave. Manchester, Kentucky 39495</li>
          <li>info@windexco.com</li>
          <li>(217) 555-0113</li>
        </ul>
      </div>

      <div className="middle">
        <div className="links-nav">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Solutions</a>
          <a href="/">Projects</a>
          <a href="/">Blog</a>
        </div>
        <div className="links-social">
          <i>fb</i>
          <i>insta</i>
          <i>linkedin</i>
          <i>x</i>
        </div>
      </div>

      <div className="bottom">
        <div className="logo">
          <img src="/logo.svg" alt="" />
          <h1>Windex</h1>
        </div>
        <div className="attribution">© 2025 Windex Designed by Opndoo</div>
      </div>
    </footer>
  );
};

export default Footer;
