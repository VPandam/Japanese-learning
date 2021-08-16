import './App.css';
import Game from './pages/Game/Game'
import React from 'react'
import Home from './pages/Home/Home'
import LvlSelect from './pages/LvlSelect/LvlSelect'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LvlSelect}/>
        <Route exact path='/game' component={Game}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
