//import logo from './logo.svg';
import './App.css';
import MainComponent from './component/MainComponent';
import NavComponent from './component/NavComponent';
import BottomComponent from './component/BottomComponent';
import Jumbotron from './component/jumbotron';

function App() {
  return (
    <div className="App">
      <NavComponent />
      <Jumbotron />
      <MainComponent name="Wibisana" />
      <BottomComponent />
    </div>
  );
}

export default App;
