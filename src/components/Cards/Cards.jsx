import React, { useState } from "react";
import Button from "../button/Button";
import "./cards.css";

function Cards(props) {
  const { title, price, detail, imgurl } = props;
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => setIsActive(!isActive);

  let classToggleBtn;
  if (isActive) classToggleBtn = "item-card_favicon favorite";
  else classToggleBtn = "item-card_favicon";

  return (
    <div className="tarjetas">
      <div>
        <img width="300px" src={imgurl} alt="Imagen" />
        <center>
          <div>
            <h3>{title}</h3>
            <h4>$ {price}</h4>
            <p>{detail}</p>
          </div>
          <Button text={"Ver mas"} />

          <button className={classToggleBtn} onClick={handleClick}>
            ❤️
          </button>
        </center>
      </div>
    </div>
  );
}

export default Cards;
