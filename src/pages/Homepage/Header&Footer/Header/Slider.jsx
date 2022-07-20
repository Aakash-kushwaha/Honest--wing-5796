import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
// import { data } from "./data";
import styles from "./Slider.module.css";
import SliderCard from "./SliderCard";



export default function SimpleSlider() {

const [Data,setData] = React.useState([])

const getdata=()=>{
    // current matches
         axios.get("https://api.cricapi.com/v1/currentMatches?apikey=648c2c86-f6f4-4ce3-9c03-6bb9092ce9e5&offset=0")
         .then((res)=>setData(res.data.data))
     }

  React.useEffect(() => {

    getdata()

    setInterval(() => {
        // getdata()
    }, 5000);


  
 
  
  }, []);

//   console.log(data);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.maincontainer}>
      <Slider {...settings}>
        {Data?.map((el) => {
          return (
           <SliderCard key={el.id} el={el} ></SliderCard>
          );
        })}
      </Slider>
    </div>
  );
}
