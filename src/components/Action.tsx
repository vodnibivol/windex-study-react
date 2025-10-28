import './Action.scss';
import { IoIosStarHalf } from 'react-icons/io';

import turbines10 from '../assets/img/turbines-10.png';

const Action = () => {
  return (
    <section className="action">
      <div className="left">
        <div className="img">
          <img src={turbines10} alt="Wind Turbine" />
        </div>
        <div className="rating">
          <div className="icon">
            <IoIosStarHalf />
          </div>
          <div className="text">
            <h2>4.5</h2>
            <span>Positive feedback</span>
          </div>
        </div>
      </div>

      <div className="right">
        <h3 className="text-gray upper">Call-To-Action</h3>
        <h1>Let's Build a Sustainable Tomorrow</h1>
        <p className="text-gray">Discover how our techology can help your business achieve its sustainability goals</p>
        <button type="button" className="upper">
          Get Started
        </button>
      </div>

      <h1 className="text-overlay">Windex</h1>
    </section>
  );
};

export default Action;
