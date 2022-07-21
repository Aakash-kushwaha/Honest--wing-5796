import React from "react";
import styles from "./MainNavbar.module.css";
import {Link} from "react-router-dom"
import {Box} from "@chakra-ui/react"
import {data} from "../data.js"
console.log(data,"data")
const MainNavbar = () => {
  return (
    <div className={styles.MainNavbar}>
      <div className={styles.container}>
        <div className={styles.logomenu}>
          <div>Logo</div>
          <div className={styles.hovermenu}>
              <div>
                Live Score
                <div className={styles.submenu1}>
                  <li><Link to="/">Live Scores Home</Link></li>
                  <li><Link to="/">Week View</Link></li>
                  <li><Link to="/">Month View</Link></li>
                  <li><Link to="/">Season View</Link></li>
                  <li><Link to="/">International Calendar</Link></li>
                  <li><Link to="/">Desktop Scoreboard</Link></li>
                </div>
              </div>
              <div>Series
              <div className={styles.submenu2}>
                 <div > 
                 <li><Link to="/">West Indies V India</Link></li>
                  <li><Link to="/">England v South Africa</Link></li>
                  <li><Link to="/">Ireland v New Zealand</Link></li>
                  <li><Link to="/">  Scottland v New Zealand</Link></li>
                  <li><Link to="/">  SA-W in England</Link></li>
                  <li><Link to="/">Country Div1</Link></li>
                  <li><Link to="/">  Test Championship</Link></li>
                  <li><Link to="/">  CWC Super League</Link></li>
                  <li><Link to="/">  Archives</Link></li>
              
                  </div>
                 <div style={{marginLeft:"12rem"}} > 
                 <li><Link to="/">  TNPL</Link></li>
                  <li><Link to="/">  Sri Lanka v Pakistan</Link></li>
                  <li><Link to="/">  Zimbabwe v Bangladesh</Link></li>
                  <li><Link to="/">  IRE Tri-Series (Women)</Link></li>
                  <li><Link to="/">  CWG Games (Cricket)</Link></li>
                  <li><Link to="/">  Country Div2</Link></li>
                  <li><Link to="/">  Women's Championship</Link></li>
                  <li><Link to="/">  Future series</Link></li>
                  </div>
                </div>
              </div>
              <div>Teams
              <div className={styles.submenu2}>
                 <div  > 
                 <li><Link to="/">  Australia</Link></li>
                  <li><Link to="/">  Bangladesh</Link></li>
                  <li><Link to="/">  England</Link></li>
                  <li><Link to="/">  India</Link></li>
                  <li><Link to="/">  New Zealand</Link></li>
                  <li><Link to="/">  Pakistan</Link></li>
                  <li><Link to="/">  South Africa</Link></li>
                  <li><Link to="/">  Sri Lanka</Link></li>
                  <li><Link to="/">  West Indies</Link></li>
                  <li><Link to="/"> Zimbabwe</Link></li>
                  </div>
                 <div style={{marginLeft:"11rem"}} > 
                 <li><Link to="/">  Afganistan</Link></li>
                  <li><Link to="/">  Ireland</Link></li>
                  <li><Link to="/">  Nuamibia</Link></li>
                  <li><Link to="/">  Nepal</Link></li>
                  <li><Link to="/">  Netherlands</Link></li>
                  <li><Link to="/">  Oman</Link></li>
                  <li><Link to="/">  PNG</Link></li>
                  <li><Link to="/">  Scottland</Link></li>
                  <li><Link to="/">  UAE</Link></li>
                  <li><Link to="/">  USA</Link></li>
                  </div>
                </div>
                </div>
              <div>News
              <div className={styles.submenu1}>
                  <li><Link to="/">  News Home</Link></li>
                  <li><Link to="/">  Covid-19</Link></li>
                  <li><Link to="/">  Ball-tampering</Link></li>
                  <li><Link to="/">  Technology in Cricket</Link></li>
                  <li><Link to="/">  Racism</Link></li>
            
                </div></div>
              <div>Features
              <div className={styles.submenu1}>
                  <li><Link to="/">  Features Home</Link></li>
                  <li><Link to="/">  Writers</Link></li>
                  <li><Link to="/">  Photo Galleries</Link></li>
                  <li><Link to="/">  The Cricket Monthly</Link></li>
            
                </div></div>
              <div>Videos
              <div className={styles.submenu2}>
                 <div > 
                 <li><Link to="/">  Videos Home</Link></li>
                  <li><Link to="/">  T20 Time Out Hindi</Link></li>
                  <li><Link to="/">  Match Day</Link></li>
                  <li><Link to="/">  Fantasy</Link></li>
                  <li><Link to="/">  Run Order</Link></li>
                  <li><Link to="/">  25 Question</Link></li>
                  <li><Link to="/">  Interviews</Link></li>
                  <li><Link to="/">  Press Conference</Link></li>
                
                  </div>
                 <div style={{marginLeft:"11rem"}} > 
                 <li><Link to="/">  T20 Time Out</Link></li>
                 <li><Link to="/"> Hindi Videos</Link></li>
                  <li><Link to="/">  Haan ya Naa</Link></li>
                  <li><Link to="/">  Polite Enquiries</Link></li>
                  <li><Link to="/">  Newsroom</Link></li>
                  <li><Link to="/">  News and Analysis</Link></li>
                  <li><Link to="/">  Features</Link></li>
                  <li><Link to="/">  YouTube</Link></li>
                  </div>
                </div>
                </div>
              <div>Stats
              <div className={styles.submenu2}>
                 <div > 
                 <li><Link to="/">  Stats home</Link></li>
                  <li><Link to="/">  IPL 2022</Link></li>
                  <li><Link to="/">  SuperStats</Link></li>
                  <li><Link to="/">  All records</Link></li>
                  <li><Link to="/">  Grounds</Link></li>
                  {/* <li><Link to="/">  Ketto.org</Link></li> */}
    
                  </div>
                 <div style={{marginLeft:"11-rem"}} > 
                 <li><Link to="/">  ASkCricinfo</Link></li>
                  <li><Link to="/">  Statsguru</Link></li>
                  <li><Link to="/">  2022 records</Link></li>
                  <li><Link to="/">  Players</Link></li>
                  <li><Link to="/">  Rankings</Link></li>
                  </div>
                </div>
                </div>
          
          </div>
        </div>
        <div className={styles.rightmenu}>
          <div>Extras</div>
          <div>Extras</div>
          <div>Extras</div>
          <div>Extras</div>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
