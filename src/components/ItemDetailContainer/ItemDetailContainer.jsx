import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getSingleItem } from '../../services/mockAsyncService'
import ItemListContainer from '../ItemListContainer/ItemListContainer'

function ItemDetailContainer() {
  const [item, setItem] = useState([])

  useEffect(() => {
    getSingleItem().then((respuesta) => {
      setItem(respuesta);
    })
  })

  return (
    <div className="car-detail_main">
      <div className="card-detail_img">
        <img src={item.imgurl} alt={item.title} />
      </div>
    </div>
  )
}

export default ItemDetailContainer