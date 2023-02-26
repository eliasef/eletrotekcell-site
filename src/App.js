import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Servicos from "./components/Servicos";
import Iphone from "./components/Iphone";

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Banner />
        <Cards />
        <Servicos />
        <Switch>
          <Route exact path="/iphone" component={Iphone} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
