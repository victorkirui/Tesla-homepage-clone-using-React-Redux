import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
