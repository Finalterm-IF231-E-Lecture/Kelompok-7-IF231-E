import React from "react";

function Card(props) {
  return (
    <div id="divCard">
      <div className="heads">
        <h2>{props.name}</h2>
      </div>
      <div className="bawah">
        <div>
          <p>{props.phone}</p>
        </div>
        <div>
          <p>{props.email}</p>
        </div>
      </div>
      <div className="right">
        <img id="img" src={props.imgURL} />
      </div>
    </div>
  );
}

export default Card;
// Fungsi Card nya yang di eksport
