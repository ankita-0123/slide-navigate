// MenuModal.js
import React, { useContext } from 'react';
import { SlideContext } from './SlideContext';

const MenuModal = ({ onClose }) => {
  const { setActiveLevel } = useContext(SlideContext);

  const handleExit = () => {
    setActiveLevel(1);
    onClose();
  };

  return (
    <div className="menu-modal">
      <button onClick={handleExit}>Exit</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default MenuModal;
