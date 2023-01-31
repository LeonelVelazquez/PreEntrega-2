import "./App.css";
import Navbar from "./components/navegacion/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import { BrowserRouter , Routes, Route, } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";






function App() {

  return (
    <>
    
      <div className="App">
        <BrowserRouter> 
          <Navbar/>
          <Routes>
            
            <Route path="/" element={<ItemListContainer /> } />
            <Route path="/category/:id" element={<ItemListContainer /> } />
            <Route path="/item/:itemid" element={<ItemDetailContainer /> } />
          </Routes>
          
        </BrowserRouter>
        
      </div>
      
    </>
  );
}

export default App;