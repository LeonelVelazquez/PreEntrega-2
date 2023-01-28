import "./App.css";
import Navbar from "./components/navegacion/Navbar";
import inicio from "./components/paginas/inicio";
import remeras from "./components/paginas/remeras";
import tazas from "./components/paginas/tazas";
import getItems from "./services/mockAsyncService";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";

import imgRemeras from "./assets/img/Remeras.png";
import GRIZZY from "./assets/img/GRIZZY.png";
import TazaRafa from "./assets/img/TazaRafa.png";
import Llaveros from "./assets/img/llaveros.png";
import Taza from "./assets/img/Bugs.png";
import Cat from "./assets/img/Cat.png";
import Idolos from "./assets/img/Idolos.png";
import vasoBad from "./assets/img/vasoBad.png";
import Set from "./assets/img/set.png";
import Jardin from "./assets/img/Jardin.png";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <ItemListContainer/>
      </div>
      <hr />
    </>
  );
}

export default App;
