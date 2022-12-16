import { GoChevronDown, GoChevronLeft } from 'react-icons/go';
import { useState } from 'react';

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState('');

  const clickHandler = id => {
    setExpandedIndex(id !== expandedIndex ? id : 'close all');
  };

  const renderedItems = items.map(item => {
    const expanded = item.id === expandedIndex;

    const icon = expanded ? <GoChevronDown /> : <GoChevronLeft />;

    return (
      <div key={item.id} onClick={() => clickHandler(item.id)}>
        <div className="flex p-3 bg-gray-50 border-b items-center cursor-pointer justify-between">
          {item.label}
          {icon}
        </div>
        {expanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });
  return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
