import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Navbar from './Components/layout/Navbar';
import Footer from './Components/layout/footer';
import Login from './Components/Login/Login'
import Landing from './Components/Home/Landing';
import Movie from './Components/Home/Movie';
import Signin from './Components/Login/Signup'

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/movie/:id" component={Movie} /> 
              <Route path="/signin" component ={Signin}/>       
                   <Route exact path="/login" component={Login}/>
         
           
          </div>
          {/* <Footer /> */}
        </Router>
      </Provider>
    );
  }
}

export default App;