import React from 'react';
import Home from './Pages/Home';
import Tienda from './Pages/Tienda';
import Canales from './Pages/Canales';
import MiEspacio from './Pages/Mi-espacio';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Switch> 

        <Route exact path="/">
          <Home/>
        </Route>

        <Route exact path="/Tienda">
          <Tienda/>
        </Route>

        <Route exact path="/Canales">
          <Canales/>
        </Route>

        <Route exact path="/MiEspacio">
          <MiEspacio/>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
