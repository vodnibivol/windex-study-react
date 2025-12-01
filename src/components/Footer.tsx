import { wipAlert } from '../helpers/Utils';
import './Footer.scss';

import {
  BiEnvelope,
  BiLogoFacebookCircle,
  BiLogoInstagramAlt,
  BiLogoLinkedinSquare,
  BiLogoTwitter,
  BiMap,
  BiPhone,
} from 'react-icons/bi';

const Footer = () => {
  return (
    <footer>
      <div className="content">
        <div className="top">
          <h1>Ready to Go Green With Wind Power?</h1>
          <ul className="contact-list">
            <li>
              <BiMap />
              <span>4516 Washington Ave. Manchester, Kentucky 39495</span>
            </li>
            <li>
              <BiEnvelope />
              <span>info@windexco.com</span>
            </li>
            <li>
              <BiPhone />
              <span>(217) 555-0113</span>
            </li>
          </ul>
        </div>

        <div className="middle">
          <div className="links-nav">
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
            <a href="#" className="underline-hover" onClick={wipAlert}>
              Blog
            </a>
          </div>
          <div className="links-social">
            <BiLogoFacebookCircle />
            <BiLogoInstagramAlt />
            <BiLogoLinkedinSquare />
            <BiLogoTwitter />
          </div>
        </div>

        <div className="bottom">
          <div className="logo">
            <img src="./logo.svg" alt="" />
            <h1>Windex</h1>
          </div>
          <div className="attribution">© 2025 Windex Designed by Opndoo</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
