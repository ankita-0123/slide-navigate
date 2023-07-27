// SlideContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const SlideContext = createContext();

export function SlideProvider({ children }) {
  const [activeLevel, setActiveLevel] = useState(1);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  // Load slide index from local storage on component mount
  useEffect(() => {
    const storedSlideIndex = localStorage.getItem('slideIndex');
    if (storedSlideIndex) {
      setActiveSlideIndex(parseInt(storedSlideIndex));
    }
  }, []);

  // Store slide index in local storage when it changes
  useEffect(() => {
    localStorage.setItem('slideIndex', activeSlideIndex.toString());
  }, [activeSlideIndex]);

  const markLevelAsFinished = () => {
    setActiveLevel(activeLevel + 1);
    setActiveSlideIndex(0); // Reset the slide index for the next level
  };

  return (
    <SlideContext.Provider
      value={{
        activeLevel,
        setActiveLevel,
        activeSlideIndex,
        setActiveSlideIndex,
        markLevelAsFinished,
      }}
    >
      {children}
    </SlideContext.Provider>
  );
}

export function useSlideContext() {
  return useContext(SlideContext);
}
