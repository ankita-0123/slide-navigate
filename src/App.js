// App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import SlidePage from './SlidePage';
import Modal from './Modal';
import { SlideProvider } from './SlideContext';

const App = () => {
  return (
    <SlideProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/slides" component={SlidePage} />
        </Switch>
        <Modal />
      </Router>
    </SlideProvider>
  );
};

export default App;
