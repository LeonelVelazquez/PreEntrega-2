import "./App.css";
import Navbar from "./components/navegacion/navbar";
import inicio from "./components/paginas/inicio";
import remeras from "./components/paginas/remeras";
import tazas from "./components/paginas/tazas";
import Cards from "./components/Cards/Cards";
import FlexWrapper from "./components/flexWrapper/flexWrapper";
import Button from "./components/button/Button";
import getItems from "./services/mockAsyncService";

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
import { useState } from "react";

function App() {
  const data = [
    {
      id: "1",
      title: "card 1",
      price: 15,
      detail: "lorem ipsum sararara",
      imgurl: imgRemeras,
      category: "remeras",
    },
    {
      id: "2",
      title: "card 2",
      price: 25,
      detail: "lorem ipsum sararara",
      imgurl: GRIZZY,
      category: "Set de jardin"
    },
    {
      id: "3",
      title: "card 3",
      price: 35,
      detail: "lorem ipsum sararara",
      imgurl: TazaRafa,
      category: "Taza de ceramica"
      
    },
    {
      id: "4",
      title: "card 4",
      price: 5,
      detail: "lorem ipsum sararara",
      imgurl: Llaveros,
      category: "Llavero"
    },
    {
      id: "5",
      title: "card 5",
      price: 75,
      detail: "lorem ipsum sararara",
      imgurl: Taza,
      category: "Taza de ceramica"
    },
    {
      id: "6",
      title: "card 6",
      price: 50,
      detail: "lorem ipsum sararara",
      imgurl: Cat,
      category: "Remera"
    },
    {
      id: "7",
      title: "card 7",
      price: 45,
      detail: "lorem ipsum sararara",
      imgurl: Idolos,
      category: "Tazas de ceramica"
    },
    {
      id: "8",
      title: "card 8",
      price: 52,
      detail: "lorem ipsum sararara",
      imgurl: vasoBad,
      category: "Vaso termico"
    },
    {
      id: "9",
      title: "card 9",
      price: 55,
      detail: "lorem ipsum sararara",
      imgurl: Set,
      category: "Set de jardin"
    },
    {
      id: "10",
      title: "card 10",
      price: 53,
      detail: "lorem ipsum sararara",
      imgurl: Jardin,
      category: "Set de jardin"
    },
  ];


  const [item, setItem] = useState([]);
  
  getItems().then((respuesta) => {
  console.log(respuesta);
  setItem(respuesta);
})
  
  return (
    <>

      <div className="App">
        <Navbar />
      </div>

      <hr />

      <FlexWrapper>
        {data.map((item) => (
          <Cards
            key={item.id}
            title={item.title}
            price={item.price}
            detail={item.detail}
            imgurl={item.imgurl}
          />
        ))}
      </FlexWrapper>
    </>
  );
}

export default App;
