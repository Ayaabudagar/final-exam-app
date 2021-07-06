import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import FavoriteDrinks from './components/FavoriteDrinks';
import { BrowserRouter, Route,Switch  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route exact path='/favorite'>
            <FavoriteDrinks />

          </Route>
        </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
