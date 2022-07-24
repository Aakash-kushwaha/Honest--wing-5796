import React from 'react'
import styles from "./Slider.module.css";

const SliderCard = ({el}) => {


  



  // console.log(el)
  return (
   
     <div key={el.id} className={styles.container}>
              <div className={styles.result}>
                RESULT {el.name.split(",")[1]} {el.venue.split(",")[1]}
              </div>
              <div className={styles.teams}>
              <div style={{display:"flex"}}>
              <img width={"20px"} src={el.teamInfo[0].img}></img>
                <div>
                {el.teamInfo[0].shortname}</div>
              </div>
            
                <div>
                  {el.score[0].r}
                  {el.score[1] && `/${el.score[1].r}`}
                </div>
              </div>
           
              <div className={styles.teams}>
              <div style={{display:"flex"}}>
              <img width={"20px"} src={el.teamInfo[1].img}></img>
              <div>{el.teamInfo[1].shortname}</div>
              </div>
                <div>
                  {el.score[1]?.r} {el.score[2] && `/${el.score[2].r}`}
                </div>
             
              
              </div>
              <div className={styles.resultdiv}> 
                {el.status.split("-")[1] ? el.status.split("-")[1] : el.status}
              </div>
              <div style={{border:"1px solid whitesmoke",height:"2px"}}></div>
              <div className={styles.schedulereport}>
                <div>schedule</div>
                <div>Report</div>
              </div>
            </div>

  )
}

export default SliderCard