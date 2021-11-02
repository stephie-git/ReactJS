import logo from './logo.svg';
import './App.css';
import './style.css'
import {NavBar} from './components/navBar'


function App() {

  const saludar ={

  }

  return (
    <div className="App">

      <NavBar />

      <h1>Hola Coder!</h1>

      <section style={ {border: '2px red solid'} }onClick={saludar}>
        <p>Coder reactJS</p>
      </section>
    </div>

  );
}

export default App;
