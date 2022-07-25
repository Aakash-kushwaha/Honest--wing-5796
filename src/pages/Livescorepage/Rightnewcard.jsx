import React from 'react'
import styles from "./livescore.module.css"

const Rightnewcard = ({data}) => {

    


  return (
    <div>
          <div className={styles.Newcard}>
                        <img src={data.urlToImage}></img>
                        <div>
                     {data.title}
                        </div>

                      </div>
    </div>
  )
}

export default Rightnewcard