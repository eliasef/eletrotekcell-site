import React from 'react';
import Home from './components/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Iphone from "./components/Iphone";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/iphone" component={Iphone} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
