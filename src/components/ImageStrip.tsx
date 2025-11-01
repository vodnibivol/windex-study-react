import './ImageStrip.scss';

import turbines1 from '../assets/img/turbines-1.png';
import turbines2 from '../assets/img/turbines-2.png';
import turbines3 from '../assets/img/turbines-3.png';

const ImageStrip = () => {
  return (
    <section className="image-strip">
      <div className="img">
        <img src={turbines1} alt="Wind Turbine" />
      </div>
      <div className="img">
        <img src={turbines2} alt="Wind Turbine" />
      </div>
      <div className="img">
        <img src={turbines3} alt="Wind Turbine" />
      </div>
    </section>
  );
};

export default ImageStrip;
