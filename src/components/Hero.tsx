import './Hero.scss';

const Hero = () => {
  return (
    <div className="hero">
      <div className="content">
        <h3 className="text-gray upper">Our project</h3>
        <h1>Powering Progress Through Wind Energy</h1>
        <p>
          Expore our portfolio of sustainable wind projects that are transforming communities and shaping cleaner
          future.
        </p>
        <button type="button" onClick={() => alert('did not implement that currently:)')}>
          Explore solutions
        </button>
      </div>
    </div>
  );
};

export default Hero;
