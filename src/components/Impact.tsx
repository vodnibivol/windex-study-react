import { IoHomeOutline, IoThunderstormOutline, IoBulbOutline, IoEarthOutline } from 'react-icons/io5';

import DataItem from './DataItem';
import './Impact.scss';

const Impact = () => {
  return (
    <div className="impact">
      <h3 className="text-gray upper">Our Impact</h3>
      <h2>Turning Wind Into Measurable Change</h2>
      <div className="data-strip">
        <DataItem icon={<IoEarthOutline />} title="500+" text="MW Installed Capacity" />
        <DataItem icon={<IoHomeOutline />} title="120K" text="Homes Powered" />
        <DataItem icon={<IoThunderstormOutline />} title="1M+" text="Tons CO2 Saved Annually" />
        <DataItem icon={<IoBulbOutline />} title="10Y+" text="Years Experience" />
      </div>
    </div>
  );
};

export default Impact;
