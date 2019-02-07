import React, { Component } from 'react';
import logo from './logo.svg';
import football from './ftball.png'
import './App.css';
import ImageViewer from "./Components/ImageViewer/ImageViewer.js";

class App extends Component {
  render() {
    return (
      <div >
        <header className="App-header">
          <img src={football} className="App-logo" alt="logo" />
        </header>
        <ImageViewer/>
      </div>
    );
  }
}

export default App;
