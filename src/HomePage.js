// HomePage.js
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSlideContext } from './SlideContext';
import './Style.css';
const HomePage = () => {
  const history = useHistory();
  const { activeLevel, setActiveLevel } = useSlideContext();

  const levels = [1, 2, 3, 4,5]; // Add more levels here

  const handleLevelClick = (level) => {
    if (level <= activeLevel) {
      setActiveLevel(level);
      history.push('/slides');
    }
  };

  return (
    <div className="home-page">
      
      <div className="level-buttons">
        {levels.map((level) => (
          <button
            key={level}
            onClick={() => handleLevelClick(level)}
            disabled={level > activeLevel && level !== 1}
          >
            Level {level}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
