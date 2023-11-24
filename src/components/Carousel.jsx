import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentindex: 0,
        }
    }

    render() {
        const { currentindex } = this.state

        const currentImage = images[currentindex]

        let handleNext = () => {
            this.setState((prev) => ({
                currentindex: (prev.currentindex + 1) % images.length
            }))
            console.log(currentindex)
        }
        let handlePrev = () => {
            this.setState((prev) => ({
                currentindex:    (prev.currentindex - 1 + images.length) % images.length,
            }))
            console.log(currentindex)
        }
        console.log(currentindex)
        return <>

<div className="carousel-container">
        <button className="arrow-btn" onClick={handlePrev}>
          <ArrowBackIosIcon />
        </button>
        <div className="carousel-item">
          <img className="image" src={currentImage.img} alt={currentImage.title} />
            <h2>{currentImage.title}</h2>
            <p>{currentImage.subtitle}</p>
        </div>
        <button className="arrow-btn" onClick={handleNext}>
          <ArrowForwardIosIcon />
        </button>
      </div>

        </>
    }
}

export default Carousel;