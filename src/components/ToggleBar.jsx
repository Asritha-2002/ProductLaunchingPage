import React, { useState } from 'react';
 // Add basic styles if needed

const ToggleBar = ({ onToggle }) => {
  const [display, setDisplay] = useState(true);

  const handleToggle = () => {
    setDisplay(!display);
    onToggle(!display);
  };

  return (
    <div className="toggle-bar">
      <h4>3425 ITEMS</h4>
      <h5 onClick={handleToggle}>
        {display ? '< HIDE ITEMS' : '> SHOW ITEMS'}
      </h5>
    </div>
  );
};

export default ToggleBar;
