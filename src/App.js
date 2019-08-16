import React, { Component } from 'react';
import './App.css';

import {
  Container,
} from 'semantic-ui-react';                    //npm install semantic-ui-react semantic-ui-css --save
import 'semantic-ui-css/semantic.min.css';      //npm install semantic-ui-react semantic-ui-css --save
import Footer from './components/Footer';      //--Footer
import Header from './components/Header';      //--Header

import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import MoviesPage from './components/pages/MoviesPage';
import NewMoviePage from './components/pages/NewMoviePage';


class App extends Component {

  state = {

  }

  render() {
    return (
      <div className="App">
        <Header />
        <Container text>
          <div>
            <Route exact path='/' component={HomePage}></Route>
            <Route exact path="/movies" component={MoviesPage} />
            <Route exact path="/movies/new" component={NewMoviePage} />
            <Route exact path="/movie/:_id" component={NewMoviePage} />
          </div>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
