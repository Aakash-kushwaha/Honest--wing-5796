import axios from 'axios'
import React from 'react'
import Slider from 'react-slick'
import MainNavbar from '../Mainnavbar/MainNavbar'
import SimpleSlider from '../Slider'
import styles from "./cardnav.module.css"
import {data} from "../data.js"
console.log(data,"data")

const CardNav = () => {

    const [Data,setData] = React.useState([])
    const [nav,setNav]=  React.useState([])
    const [id,setid]= React.useState("")
   


// console.log(Data,"data")
const getdata=()=>{
    // current matches
         axios.get("https://api.cricapi.com/v1/currentMatches?apikey=648c2c86-f6f4-4ce3-9c03-6bb9092ce9e5&offset=0")
         .then((res)=>{setData(res.data.data); setNav(res.data.data)})
         .then((err)=>{setData(data); setNav(data) })
     }

  React.useEffect(() => {

    getdata()
  
  }, []);

   let div1= nav.filter((item) => {
    return item.name.includes("County Div 1");
  })

  let div2= nav.filter((item) => {
    return item.name.includes("County Div 2");
  })
  console.log(div1,"div")

  const showcard=(el)=>{
    // console.log(el.name.split(",")[1],"el")
    // let newlist = Data.filter((pro)=>pro.name.split(",")[1]!==el.name.split(",")[1])
    // console.log(newlist,"newlist")

    setData([el])
      console.log(el.id)
    setid(el.id)
    console.log(id)

  }

  return (
    <div className={styles.maincontainer}>
    <div className={styles.cardnav}>
    <div onClick={()=>getdata()}>Matches ({nav.length})</div>
     {
        data?.map((el)=>{  
          if(el.name.split(",")[1].includes("County")) return 
           return( 
           <div key={el.id}  onClick={()=>(showcard(el))}  >
           {el.teamInfo[0].shortname} vs {el.teamInfo[1].shortname}

       {/* {
        el.name.split(",")[1].includes("County")? "": `${el.teamInfo[0].shortname} vs ${el.teamInfo[1].shortname}`
       } */}
        </div>)})
    }
     <div onClick={()=>setData(div1)}>
     {
      div1? `County DIV1( ${div1.length})`:""
      }
      </div>
     <div onClick={()=>setData(div2)}>
     {
      div2? `County DIV2 (${div2.length})`:""
      }
     </div>
    </div> 
    <SimpleSlider Data={Data}></SimpleSlider>
   
    </div> )
}

export default CardNav