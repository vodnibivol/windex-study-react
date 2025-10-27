import DataItem from './DataItem';
import './Impact.scss';

const Impact = () => {
  return (
    <div className="impact">
      <h3 className="text-gray upper">Our Impact</h3>
      <h2>Turning Wind Into Measurable Change</h2>
      <div className="data-strip">
        <DataItem icon="battery" title="500+" text="MW Installed Capacity" />
        <DataItem icon="bluetooth" title="120K" text="Homes Powered" />
        <DataItem icon="bulb" title="1M+" text="Tons CO2 Saved Annually" />
        <DataItem icon="globe" title="10Y+" text="Years Experience" />
      </div>
    </div>
  );
};

export default Impact;
