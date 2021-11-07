import './App.css';
import NavBar from './components/navBar.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import  HomeView from './components/HomeView/HomeView.js';
function App() {

  
  return (
    <div className="App">
      <NavBar/>
      <HomeView/>
    </div>

  )
}

export default App;
