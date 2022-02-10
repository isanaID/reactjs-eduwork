//import logo from './logo.svg';
import React from 'react';
import MainComponent from './MainComponent';
import NavComponent from './NavComponent';
import BottomComponent from './BottomComponent';
import Jumbotron from './jumbotron';
import '../sass/style.scss';

function Home() {
  return (
    <div>
      <NavComponent />
      <Jumbotron />
      <MainComponent name="Wibisana" />
      <BottomComponent />
    </div>
  );
}

export default Home;
