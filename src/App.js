import React, { Component } from 'react';
import Home from './components/pages/Home/Home';
import Movies from './components/pages/Movies/Movies';
import Tv from './components/pages/Tv/Tv';
import Primium from './components/pages/primium/Primium';

import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
         <div className="App">
          <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='streamflow_movies' element={<Movies/>}/>
                <Route path='webseries/tv' element={<Tv/>}/>
                <Route path='prmium_movies&Tv&Webseries' element={<Primium/>}/>

          </Routes>
          </div>
      </Router>
    );
  }
}

export default App;
