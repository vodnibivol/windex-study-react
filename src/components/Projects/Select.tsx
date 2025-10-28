import { useEffect, useState } from 'react';

interface selectProps {
  categories: string[];
  category: string;
  setCategory: (cat: string) => void;
}

const Select = ({ categories, category, setCategory }: selectProps) => {
  const [sliderStyles, setSliderStyles] = useState({ left: 0, width: 0 });

  useEffect(() => {
    setSliderPosition();
  }, [category]);

  useEffect(() => {
    setSliderPosition();
    window.addEventListener('resize', setSliderPosition);
    return () => window.removeEventListener('resize', setSliderPosition);
  }, []);

  function setSliderPosition() {
    // get selected item styles
    const selectedItem = document.querySelector('.select-item[data-selected="true"]');
    const itemParent = selectedItem?.parentElement;
    if (selectedItem instanceof HTMLElement && itemParent instanceof HTMLElement) {
      const itemBox = selectedItem.getBoundingClientRect();
      const itemParentBox = itemParent.getBoundingClientRect();

      setSliderStyles({
        left: itemBox.left - itemParentBox.left,
        width: itemBox.width,
      });
    }
  }

  return (
    <div className="select">
      {categories.map((cat: string) => (
        <div
          className="select-item text-gray upper"
          data-selected={cat === category}
          onClick={() => setCategory(cat)}
          key={cat}
        >
          {cat}
        </div>
      ))}

      <div className="select-slider" style={sliderStyles}></div>
    </div>
  );
};

export default Select;
