import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantListings }) {
  console.log(plantListings)

  const renderPlantCard = plantListings.map( plant =>
      <PlantCard 
        key={ plant.id }
        plant={ plant }
      />
  )
  return (
    <ul className="cards">
      {/* render PlantCards components in here */}
      { renderPlantCard }
      
    </ul>
  );
}

export default PlantList;

// { renderPlantListings }