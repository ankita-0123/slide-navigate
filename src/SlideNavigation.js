// SlideNavigation.js
import React, { useContext, useState } from 'react';
import { SlideContext } from './SlideContext';
import SlideButton from './SlideButton';
import MenuModal from './MenuModal';
import './Style.css';
const SlideNavigation = () => {
  const { slideIndex, setSlideIndex } = useContext(SlideContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const handleFinish = () => {
    // Add logic to mark the current level as finished
    // and make the next level active
  };

  // Add any other necessary functions and event handlers

  return (
    <div className="slide-navigation">
      <SlideButton onClick={() => setSlideIndex((prevIndex) => prevIndex - 1)} disabled={slideIndex === 0}>
        Back
      </SlideButton>
      <SlideButton onClick={() => setSlideIndex((prevIndex) => prevIndex + 1)} disabled={slideIndex===1}>
        Next
      </SlideButton>
      {slideIndex === slide.length - 1 && <SlideButton onClick={handleFinish}>Finish</SlideButton>}
      <SlideButton onClick={handleMenuClick}>Menu</SlideButton>
      {isMenuOpen && <MenuModal onClose={handleCloseMenu} />}
    </div>
  );
};

export default SlideNavigation;
