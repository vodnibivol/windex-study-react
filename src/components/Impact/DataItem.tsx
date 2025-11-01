import type { ReactElement } from 'react';

interface DataItemProps {
  icon: ReactElement;
  title: string;
  text: string;
}

const DataItem = ({ icon, title, text }: DataItemProps) => {
  return (
    <div className="data-item">
      <div className="icon">{icon}</div>
      <h2 className="number">{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default DataItem;
