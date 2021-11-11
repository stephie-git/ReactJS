import './App.css';
import NavBar from './components/NavBar/NavBar.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import  HomeView from './components/HomeView/HomeView.js';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer.js';
import { CartWidget } from './components/CartWidget';


function App() {

  
  return (
    <div className="App">
      <NavBar/>
      <CartWidget/>
      <HomeView/>
      <ItemListContainer greeting= 'Bienvenidos'/>
    </div>

  )
}

export default App;
