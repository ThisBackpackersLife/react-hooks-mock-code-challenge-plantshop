import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
// import PlantCard from "./PlantCard";

const baseUrl = "http://localhost:6001";
const plantsUrl = baseUrl + "/plants"

function PlantPage() {

  const [ plantListings, setPlantListings ] = useState([])

  const [ plantsOutOfStock, setPlantsOutOfStock ] = useState([])

  const [ searchPlants, setSearchPlants ] = useState([])

  useEffect( fetchPlants, [] )

  function fetchPlants() {
    fetch( plantsUrl )
    .then( res => res.json())
    .then( setPlantListings )
  }

  function submitPlantForm(e, newPlantObj) {
    e.preventDefault()

    const postRequest = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify( newPlantObj)
    }
    fetch( plantsUrl, postRequest )
    .then(res => res.json())
    .then( newPlantData => setPlantListings([...plantListings, newPlantData]))
  }

  function markOutOfStock( id ) {
    setPlantsOutOfStock([...plantsOutOfStock, id])
  }

  function filterPlants( id ) {
    const filteredPlants = plantListings.filter( plant => {
      plant.id === id ? setSearchPlants([...filteredPlants]) : plantListings
      
    })
  }

  return (
    <main>
      <NewPlantForm 
        submitPlantForm={ submitPlantForm }
      />
      <Search 
        filterPlants={ filterPlants }
        searchPlants={ searchPlants }
      />
      <PlantList 
        plantListings={ plantListings } 
        markOutOfStock={ markOutOfStock }
        plantsOutOfStock={ plantsOutOfStock }
      />
    </main>
  );
}

export default PlantPage;



//renderPlantListings={ renderPlantListings }

// const singlePlant = plantListings.map( singlePlant => 
  //     <PlantCard 
  //       key={ singlePlant.id }
  //       name={ singlePlant.name }
  //       image={ singlePlant.image }
  //       price={ singlePlant.price }
  //     />
  //   )