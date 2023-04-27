import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantListings, markOutOfStock, plantsOutOfStock }) {

   

  const renderPlantCard = plantListings.map( plant =>
      <PlantCard 
        key={ plant.id }
        plant={ plant }
        markOutOfStock={ markOutOfStock }
        plantsOutOfStock={ plantsOutOfStock }
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
