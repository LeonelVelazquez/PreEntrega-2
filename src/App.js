
import "./App.css";
import Navbar from "./components/navegacion/Navbar";
import inicio from "./components/paginas/inicio";
import remeras from "./components/paginas/remeras";
import tazas from "./components/paginas/tazas";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import { BrowserRouter , Routes, Route, } from "react-router-dom";


function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter> 
          <Navbar/>
          <ItemListContainer />
          <Routes>
            <Route path="/remeras" element={<remeras/> } />
          </Routes>
        </BrowserRouter>
      
          
        

      </div>
      <hr />
    </>
  );
}

export default App;
