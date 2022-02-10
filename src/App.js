//import logo from './logo.svg';
import './App.css';
import React from 'react';
import MainComponent from './component/MainComponent';
import NavComponent from './component/NavComponent';
import BottomComponent from './component/BottomComponent';
import Jumbotron from './component/jumbotron';

function App() {
  return (
    <div className="App">
      <React.StrictMode>
      <NavComponent />
      <Jumbotron />
      <MainComponent name="Wibisana" />
      <BottomComponent />
      </React.StrictMode>
    </div>
  );
}

export default App;
