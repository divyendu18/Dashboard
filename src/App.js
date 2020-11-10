import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Sidebar from './sidebar';
import Home from './home';

class App extends Component {
  render() {
    return (
      <div className="app container-fluid">
        <Sidebar />
        <Home />
      </div>
    )
  }
}

export default App;
