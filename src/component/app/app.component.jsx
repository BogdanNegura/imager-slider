import React, { useState } from "react";

const App = () => {
  const [search, setSearch] = useState("")
  const [images, setImages] = useState([])

  const runSearch = () => {
    fetch(`https://pixabay.com/api/?key=19742937-c0f64b725814d526608dca2ee&q=${search}&image_type=photo`)
      .then(response => response.json())
      .then(({hits}) => hits.map(({ webformatURL }) => webformatURL))
      .then(setImages)
  }
  return (
    <div className="App"> 
      <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Type here"/>
      <button onClick={runSearch}>Search</button>
      <div>
        {images.length > 0 && <img src={images[0]}/>}
        
      </div>
    </div>
  );
};

export { App } 
