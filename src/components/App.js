import React, {useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [searchItem, setSearchItem] = useState('')

  function searchListings(item){
      setSearchItem(item)
  }


  return (
    <div className="app">
      <Header searchListings={searchListings}/>
      <ListingsContainer searchItem={searchItem}/>
    </div>
  );
}

export default App;
