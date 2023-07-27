// SlidePage.js
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSlideContext } from './SlideContext';
import './Style.css';
const slides = [
  <div className="slide-content slide-1">"Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do."</div>,
  <div className="slide-content slide-2">"Hard work spotlights the character of people: some turn up their sleeves, some turn up their noses, and some don’t turn up at all."</div>,
  <div className="slide-content slide-3">"Sometimes, you have to give up. Sometimes, knowing when to give up, when to try something else, is genius. Giving up doesn’t mean stopping. Don’t ever stop."</div>,
  <div className="slide-content slide-4">"I’m a great believer in luck, and I find the harder I work the more I have of it." </div>,
  // Add more slides here
];

const SlidePage = () => {
  const history = useHistory();
  const { activeSlideIndex, setActiveSlideIndex, markLevelAsFinished, activeLevel } = useSlideContext();
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    // Add event listener to handle user leaving the site
    const handleUnload = () => {
      localStorage.setItem('slideIndex', activeSlideIndex.toString());
    };
    window.addEventListener('beforeunload', handleUnload);
    return () => {
      window.removeEventListener('beforeunload', handleUnload);
    };
  }, [activeSlideIndex]);

  const handleNextSlide = () => {
    if (activeSlideIndex < slides.length - 1) {
      setActiveSlideIndex((prevIndex) => prevIndex + 1);
    } else {
      setShowMenu(true); // Show the menu options on reaching the end of slides
    }
  };

  const handlePreviousSlide = () => {
    setActiveSlideIndex((prevIndex) => prevIndex - 1);
  };

  const currentSlide = slides[activeSlideIndex];
  const isLastSlide = activeSlideIndex === slides.length - 1;
  const nextLevel = activeLevel + 1;

  const handleFinish = () => {
    markLevelAsFinished();
    setActiveSlideIndex(0); // Reset slide index for Level 2
    history.push(`/?level=${nextLevel}`); // Navigate back to the homepage with Level 2 active
  };

  const handleExit = () => {
    history.push('/'); // Navigate back to the home page on exit
  };

  const handleClose = () => {
    setShowMenu(false); // Close the menu and continue viewing the slides
  };
  

  return (
    <div className="slide-page">
      
      <div className="slide-container">
        {currentSlide && <div className="slide">{currentSlide}</div>}
        <div className="slide-buttons">
          {activeSlideIndex > 0 && (
            <button onClick={handlePreviousSlide}>Back</button>
          )}
          <button onClick={handleNextSlide} disabled={isLastSlide}>
            {isLastSlide ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>
      {showMenu && (
        <div className="menu">
          <button onClick={handleClose}>Close</button>
          <button onClick={handleExit}>Exit</button>
        </div>
      )}
    </div>
  );
};

export default SlidePage;
