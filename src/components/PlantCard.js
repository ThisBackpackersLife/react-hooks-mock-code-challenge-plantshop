import React from "react";

function PlantCard({ plant, markOutOfStock, plantsOutOfStock }) {
  
  const { id, name, image, price } = plant

  return (
    <li className="card">
      <img src={ image } alt={ name } />
      <h4>{ name }</h4>
      <p>Price: { price }</p>
      {!plantsOutOfStock.includes( id ) ? (
        <button 
          className="primary"
          onClick={ () => markOutOfStock( id ) }
          >In Stock
        </button>
      ) : (
        <button 
          >Out of Stock
        </button>
      )}
    </li>
  );
}

export default PlantCard;
