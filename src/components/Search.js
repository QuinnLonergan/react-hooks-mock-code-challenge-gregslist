import React, {useState} from "react";

function Search({searchListings}) {
  const [searchItem, setSearchItem] = useState('')

  function handleItemChange(e){
    let value = e.target.value
    setSearchItem(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    searchListings(searchItem)
  }


  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchItem}
        onChange={handleItemChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
