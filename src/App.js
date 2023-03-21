import React from 'react';
import Home from './components/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Iphone from "./components/Iphone";
import Samsung from './components/Samsung';
import Motorola from './components/Motorola';
import Xiaomi from './components/Xiaomi';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/iphone" component={Iphone} />
        <Route path="/samsung" component={Samsung} />
        <Route path="/motorola" component={Motorola} />
        <Route path="/xiaomi" component={Xiaomi} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
