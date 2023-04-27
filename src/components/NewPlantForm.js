import React, { useState } from "react";

function NewPlantForm({ submitPlantForm }) {

  const [ name, setName ] = useState( "" )
  const [ image, setImage ] = useState( "" )
  const [ price, setPrice ] = useState( "" )

  const changeName = e => {
    setName( e.target.value )
  }

  const changeImage = e => {
    setImage( e.target.value )
  }

  const changePrice = e => {
    setPrice( e.target.value )
  }

  const newPlantObj = {
    name: name,
    image: image,
    price: price
  }
  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={ e => submitPlantForm( e, newPlantObj ) } >
        <input type="text" value={ name } onChange={ changeName } name="name" placeholder="Plant name" />
        <input type="text" value={ image } onChange={ changeImage } name="image" placeholder="Image URL" />
        <input type="number" value={ price } onChange={ changePrice } name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
