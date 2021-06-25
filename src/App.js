import { BrowserRouter, Route, Switch } from 'react-router-dom';
import  React from "react";

import {Home} from "./home";
import {About} from "./about";
import {SignIn} from "./signin";
import {SignUp} from "./signup";
import {NavBar} from "./nav";
import injectContext from './appContext';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <NavBar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/signin">
          <SignIn/>
        </Route>
        <Route exact path="/signup">
          <SignUp/>
        </Route>
      </Switch>
    </BrowserRouter>
      
    </div>
  );
}

export default injectContext( App);
