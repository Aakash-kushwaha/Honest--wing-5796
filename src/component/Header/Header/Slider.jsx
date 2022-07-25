import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
// import { data } from "./data";
import styles from "./Slider.module.css";
import SliderCard from "./SliderCard";
// import CardNav from "./cardnav/CardNav";



export default function SimpleSlider({
  Data
}) {



  // console.log(Data);

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow:`${Data.length>=4?4:Data.length}`,
    slidesToScroll: 1,
    outerWidth:400
  };
  return (
    <div>
  
 
    <div className={styles.maincontainer}>
  
      <Slider {...settings} >
        {Data?.map((el) => {
          return (
           <SliderCard key={el.id} el={el} ></SliderCard>
          );
        })}
      </Slider>
    </div>
    </div> );
}
