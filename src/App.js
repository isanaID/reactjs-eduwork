//import logo from './logo.svg';
import './App.css';
import MainComponent from './component/MainComponent';
import NavComponent from './component/NavComponent';
import BottomComponent from './component/BottomComponent';

function App() {
  return (
    <div className="App">
      <NavComponent />
      <MainComponent name="Wibisana" />
      <BottomComponent />
    </div>
  );
}

export default App;
