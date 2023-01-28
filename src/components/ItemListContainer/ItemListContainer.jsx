import { useState, useEffect } from "react";
import React from "react";
import getItems from "../../services/mockAsyncService";


function ItemListContainer(){

 const [item, setItem] = useState([]);
 

const data = [
  
  {
    id: "1",
    title: "card 1",
    price: 15,
    detail: "lorem ipsum sararara",
    imgurl: "./assets/img/bugs.png",
    category: "remeras",
  },
  {
    id: "2",
    title: "card 2",
    price: 25,
    detail: "lorem ipsum sararara",
    imgurl: "./assets/img/GRIZZY.png",
    category: "Set de jardin"
  },
  {
    id: "3",
    title: "card 3",
    price: 35,
    detail: "lorem ipsum sararara",
    imgurl: "./assets/img/TazaRAfa.png",
    category: "Taza de ceramica"
    
  },
  {
    id: "4",
    title: "card 4",
    price: 5,
    detail: "lorem ipsum sararara",
    imgurl: "./assets/img/Llaveros.png",
    category: "Llavero"
  },
  {
    id: "5",
    title: "card 5",
    price: 75,
    detail: "lorem ipsum sararara",
    imgurl: "./assets/img/Idolos.png",
    category: "Taza de ceramica"
  },
  {
    id: "6",
    title: "card 6",
    price: 50,
    detail: "lorem ipsum sararara",
    imgurl: "./assets/img/Cat.png",
    category: "Remera"
  },
  {
    id: "7",
    title: "card 7",
    price: 45,
    detail: "lorem ipsum sararara",
    imgurl: "./assets/img/Idolos.png",
    category: "Tazas de ceramica"
  },
  {
    id: "8",
    title: "card 8",
    price: 52,
    detail: "lorem ipsum sararara",
    imgurl: "./assets/img/vasoBad.png",
    category: "Vaso termico"
  },
  {
    id: "9",
    title: "card 9",
    price: 55,
    detail: "lorem ipsum sararara",
    imgurl: "./assets/img/set.png",
    category: "Set de jardin"
  },
  {
    id: "10",
    title: "card 10",
    price: 53,
    detail: "lorem ipsum sararara",
    imgurl: "./assets/img/Jardin.png",
    category: "Set de jardin"
  },
];
 useEffect(() => {
    
  getItems().then((respuesta) => {
  console.log(respuesta);
  setItem(respuesta);
})
  }, [])
 } 
 export default ItemListContainer