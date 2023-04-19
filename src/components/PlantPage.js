import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import PlantCard from "./PlantCard";

const baseUrl = "http://localhost:6001";
const plantsUrl = baseUrl + "/plants"

function PlantPage() {

  const [ plantListings, setPlantListings ] = useState([])
   useEffect( fetchPlants, [] )

  function fetchPlants() {
    fetch( plantsUrl )
    .then( res => res.json())
    .then( setPlantListings )
  }


  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList 
        plantListings={ plantListings } 
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