import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function Listings({searchItem}) {

    const [listings, setListings] = useState([]);


    
    useEffect(() => { fetch("http://localhost:6001/listings")
        .then((r) => r.json())
        .then((data) => {
            setListings(data)
        })
    }, [])


    if (!searchItem) {
    return (
        <>
            {listings.map((listing) => (
                <ListingCard 
                    id={listing.id}
                    key={listing.id}
                    description={listing.description}
                    location={listing.location}
                    image={listing.image}
                />
            ))}
        </>
    )} else {
        return(
        <>
            {listings.map((listing) => {
                if (listing.description === searchItem){
                return(
                    <ListingCard 
                    id={listing.id}
                    key={listing.id}
                    description={listing.description}
                    location={listing.location}
                    image={listing.image}
                />
                )
                }
            })}
        </>
        )
    }

}

export default Listings