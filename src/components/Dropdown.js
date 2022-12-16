import { useState } from 'react';

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = selectedOption => {
    onChange(selectedOption);
    setIsOpen(false);
  };

  const renderedOptions = options.map(option => {
    return (
      <div onClick={() => handleOptionClick(option)} key={option.value}>
        {option.label}
      </div>
    );
  });

  return (
    <div>
      <div onClick={handleClick}>{value?.label || 'Select...'}</div>
      {isOpen && <div>{renderedOptions}</div>}
      <br />
      {value?.label}
    </div>
  );
}

export default Dropdown;
