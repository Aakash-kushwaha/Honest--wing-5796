import React from 'react'
import styles from "./livescore.module.css"
import {data} from "../Homepage/../../component/Header/Header/data"

import axios from 'axios'
import Rightnewcard from './Rightnewcard'
import SliderCard from '../../component/Header/Header/SliderCard'
// console.log(data)

const Livescore = () => {
    const [Data,setData] = React.useState([])
    const [rightdata,setRightdata]= React.useState([])


console.log(rightdata)
    const getdata=()=>{
        // current matches
             axios.get("https://api.cricapi.com/v1/currentMatches?apikey=648c2c86-f6f4-4ce3-9c03-6bb9092ce9e5&offset=0")
             .then((res)=>{setData(res.data.data)})
             .then((err)=>{setData(data) })
         }
    
  
         const getrightsidedata=()=>{
            axios.get("https://databasefornewsapp.herokuapp.com/sports")
            .then((res)=>{setRightdata(res.data)})
        
        }
    
      React.useEffect(() => {
    setInterval(() => {
      getdata()

    }, 2000);
      
        getrightsidedata()
      
      }, []);



  return (
    <div>
        <div className={styles.container}>
               <div className={styles.leftside}>
                 <div className={styles.topnav}>
                    <div>Live</div>
                    <div>Upcoming</div>
                    <div>Result</div>
                 </div>
                 <div className={styles.secondnav}>
                    <div>Format</div>
                    <div>Team</div>
                    <div>Competitions</div>
                 </div>
                  
                 <div className={styles.cardsbox}>
                    {
                      Data && Data.map((card)=>{
                     return  <SliderCard key={card.id} el={card}></SliderCard>
                      })
                    }
               
                 </div>
                 <div className={styles.bottomnews}>
                    {
                        rightdata && rightdata.map((card,i)=>{
                    if(card.author=="Simon Burnton") return
                    return <Rightnewcard key={i} data={card}></Rightnewcard>
                  }) 
                    }
                 </div>
               </div>
               <div className={styles.rightside}>
                <div className={styles.quicklinks}>
                  <div style={{fontWeight:"bold",padding:"5px"}}>Quick Links</div>
                  <div className={styles.links}>
                    <div>Desktop Scoreboard</div>
                    <div>A Quick min Scoreboard that stays with you and updates all the current matches</div>
                    <div>Series Archives</div>
                    <div>Internation Calendor</div>
                  </div>
                </div>

              <div className={styles.Newscards}>

              {
                  rightdata && rightdata.map((card,i)=>{
                    if(card.author=="Simon Burnton") return
                    return <Rightnewcard key={i} data={card}></Rightnewcard>
                  })
              }

                  
              </div>

               </div>
        </div>
    </div>
  )
}

export default Livescore