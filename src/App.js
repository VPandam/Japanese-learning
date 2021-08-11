import './App.css';
import Game from './pages/Game'
import React from 'react'
import Home from './pages/Home'
import LvlSelect from './pages/LvlSelect'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/lvlselect' component={LvlSelect}/>
        <Route exact path='/game' component={Game}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
