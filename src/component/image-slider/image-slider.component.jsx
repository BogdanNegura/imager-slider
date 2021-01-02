import React, { useState } from 'react'
import { StyledImageSliderCard, StyledImage, StyledSlide } from './image-slider.style'
import { VscTriangleLeft, VscTriangleRight } from "react-icons/vsc"

const ImageSlider = ({ images }) => {
    const [index, setIndex] = useState(0)

    const slideLeft = () => {
        const nextIndex = index - 1
        if (nextIndex < 0) {
            setIndex(images.length - 1) 
        } else {
            setIndex(nextIndex)
        }
    }

    const slideRight = () => {
        setIndex((index + 1) % images.length)
    }

    return (
        images.length > 0 && (
             <StyledImageSliderCard>
                 <StyledSlide onClick={slideLeft}><VscTriangleLeft/></StyledSlide>
                 <StyledImage src={images[index]}/>
                 <StyledSlide onClick={slideRight}><VscTriangleRight/></StyledSlide>
             </StyledImageSliderCard>
        )
    )
}

export { ImageSlider }
