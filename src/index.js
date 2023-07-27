// index.js or App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { SlideProvider } from './SlideContext';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <SlideProvider>
      <App />
    </SlideProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
