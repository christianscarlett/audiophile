import React from 'react';
import './App.css';

import Room from './views/Room';
import AudiophileNavbar from './components/Navbar';
import { HashRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <AudiophileNavbar />
      <HashRouter>
        <Route exact={true} path="/" render={() => (
          <Room/>
        )}>
        </Route>
      </HashRouter>
    </div>
  );
}

export default App;
