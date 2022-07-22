import axios from 'axios'
import React from 'react'
import Slider from 'react-slick'
import MainNavbar from '../Mainnavbar/MainNavbar'
import SimpleSlider from '../Slider'
import styles from "./cardnav.module.css"


const CardNav = () => {

    const [Data,setData] = React.useState([])
    const [nav,setNav]=  React.useState([])
// console.log(Data,"data")
const getdata=()=>{
    // current matches
         axios.get("https://api.cricapi.com/v1/currentMatches?apikey=648c2c86-f6f4-4ce3-9c03-6bb9092ce9e5&offset=0")
         .then((res)=>{setData(res.data.data); setNav(res.data.data)})
     }

  React.useEffect(() => {

    getdata()

    setInterval(() => {
        // getdata()
    }, 5000);


  
  }, []);

  const showcard=(el)=>{
    console.log(el)
    // let newlist = Data.filter((pro)=>pro.id==el.id)
    // console.log(newlist,"newlist")
    setData([el])
  }

  return (
    <div className={styles.maincontainer}>
    <div className={styles.cardnav}>
    <div onClick={()=>getdata()}>Matches ({Data.length})</div>
     {
        nav?.map((el)=><div key={el.id} onClick={()=>(showcard(el))} >
        {el.teamInfo[0].shortname} vs {el.teamInfo[1].shortname}</div>)
     }
    </div>
    <SimpleSlider Data={Data}></SimpleSlider>
    {/* <MainNavbar></MainNavbar> */}
    </div> )
}

export default CardNav