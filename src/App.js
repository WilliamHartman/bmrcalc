import React, { Component } from 'react';
import './App.css';
import router from './router';
import Navbar from './components/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className = 'router-container'>
          {router}
        </div>
      </div>
    );
  }
}

export default App;