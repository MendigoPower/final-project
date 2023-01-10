import React from "react";
import "./carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
export default function Gallery({urls}) {
  return (
    <Carousel autoPlay interval="5000" transitionTime="1000" infiniteLoop className="drop-shadow-xl rounded-md">

    <div>
        <img src={`${urls[0]}`} alt="" />
    </div>
    <div>
        <img src={`${urls[1]}`} alt="" />
    </div>
    <div>
        <img src={`${urls[2]}`} alt="" />
    </div>
    <div>
        <img src={`${urls[3]}`} alt="" />
    </div>
    <div>
        <img src={`${urls[4]}`} alt="" />
    </div>

</Carousel>
  )
}