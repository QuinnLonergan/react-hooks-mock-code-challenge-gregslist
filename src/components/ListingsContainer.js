import React from "react";
import ListingCard from "./ListingCard"
// import ListingCard from "./ListingCard";
import Listings from "./Listings";

function ListingsContainer({searchItem}) {
  return (
    <main>
      <ul className="cards">
        {<Listings searchItem={searchItem}/>}
      </ul>
    </main>
  );
}

export default ListingsContainer;
