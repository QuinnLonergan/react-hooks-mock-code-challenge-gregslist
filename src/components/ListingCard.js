import React, { useState, useEffect } from "react";

function ListingCard(props) {
  const [isFavorited, setIsFavorited] = useState(false)

  function handleFavorite() {
    setIsFavorited(!isFavorited)
  }



  function handleTrash() {
    fetch(`http://localhost:6001/listings/${props.id}`, {
      method: 'DELETE',
    })
    .then((r) => r.json())
    .then((data) => {
        console.log(data)
    })
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={props.image} alt={props.description} />
      </div>
      <div className="details">
        {isFavorited ? (
          <button onClick={handleFavorite} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavorite} className="emoji-button favorite">☆</button>
        )}
        <strong>{props.description}</strong>
        <span> · {props.location}</span>
        <button onClick={handleTrash} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
