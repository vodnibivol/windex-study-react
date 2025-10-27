interface DataItemProps {
  icon: string;
  title: string;
  text: string;
}

const DataItem = ({ icon, title, text }: DataItemProps) => {
  return (
    <div className="data-item">
      <div className="icon">
        <img src={'/img/icons/' + icon + '.svg'} alt="Icon" />
      </div>
      <h2 className="number">{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default DataItem;
