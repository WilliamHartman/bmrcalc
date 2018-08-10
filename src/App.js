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
          <div className='router-sub-container'>
            {router}
          </div>
        </div>
      </div>
    );
  }
}

export default App;