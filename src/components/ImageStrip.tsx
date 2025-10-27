import './ImageStrip.scss';

const ImageStrip = () => {
  return (
    <div className="image-strip">
      <div className="img">
        <img src="/img/turbines-1.png" alt="Wind Turbine" />
      </div>
      <div className="img">
        <img src="/img/turbines-2.png" alt="Wind Turbine" />
      </div>
      <div className="img">
        <img src="/img/turbines-3.png" alt="Wind Turbine" />
      </div>
    </div>
  );
};

export default ImageStrip;
