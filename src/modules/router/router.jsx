import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../home/homeContainer';
import Acting from '../acting/actingContainer';
import Dance from '../dance/index';
import Reel from '../reel/index';
import Contact from '../contact/index';
import MenuBar from '../../molecules/MenuBar/index';

const AppRouter = () => (
  <Router>
    <div>
      <div>
        <MenuBar 
          brand="danielle kotch"
          menuItems={
          [
            { name: 'Home', active: true },
            { name: 'Acting', active: false },
            { name: 'Dance', active: false },
            { name: 'Reel', active: false },
            { name: 'Contact', active: false },
          ]
        }
        />
      </div>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/Home/" component={Home} />
        <Route path="/Acting/" component={Acting} />
        <Route path="/Dance/" component={Dance} />
        <Route path="/Reel/" component={Reel} />
        <Route path="/Contact/" component={Contact} />
      </div>
    </div>
  </Router>
);

export default AppRouter;
