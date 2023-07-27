import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSlideContext } from './SlideContext';
import { FiMenu } from 'react-icons/fi'; // Import the Menu icon from react-icons
import './Modal.css'; // Create a new CSS file named Modal.css

const Modal = () => {
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();
  const { setActiveSlideIndex, markLevelAsFinished } = useSlideContext();

  const handleMenuToggle = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  const handleExit = () => {
    setActiveSlideIndex(0); // Reset the slide index when exiting to the home page
    history.push('/');
  };

  const handleContinue = () => {
    setShowMenu(false);
  };

  const handleFinish = () => {
    markLevelAsFinished();
    setShowMenu(false);
    history.push('/'); // Navigate to the homepage when "Finish" button is clicked
  };

  return (
    <div className="modal">
      <button className="menu-icon" onClick={handleMenuToggle}>
        <FiMenu /> {/* Use the Menu icon from react-icons */}
      </button>
      {showMenu && (
        <div className="menu">
          <button onClick={handleExit}>Exit</button>
          <button onClick={handleContinue}>Close</button>
          <button onClick={handleFinish}>Finish</button>
        </div>
      )}
    </div>
  );
};

export default Modal;
