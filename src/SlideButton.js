// SlideButton.js
import React from 'react';

const SlideButton = ({ onClick, disabled, children }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default SlideButton;
