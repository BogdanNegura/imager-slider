import React, { useState } from "react";
import { ImageSlider } from "../image-slider/image-slider.component";
import { StyledApp, StyledHeader, StyledBodyAppContainer, StyledInputSearch, StyledInputSearchIcon } from "./app.style";
import { GoSearch } from "react-icons/go"

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
      <StyledApp>
        <StyledHeader>
          <StyledInputSearch onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Type here"/>
          <StyledInputSearchIcon onClick={runSearch}><GoSearch/></StyledInputSearchIcon>  
        </StyledHeader>
        <StyledBodyAppContainer>
          <ImageSlider images={images}/>
        </StyledBodyAppContainer>
      </StyledApp>
  );
};

export { App } 
