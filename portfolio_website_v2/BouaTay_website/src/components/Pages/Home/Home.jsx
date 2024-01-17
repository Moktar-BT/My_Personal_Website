import React from 'react'
import styles from '../Home/Home.module.css';
import pdp from '../../../assets/pdp2.png';

function Home() {
  return (
    <>
    <div className={styles.home_container}>
    <span className={styles.span0}>
        <span className={styles.span1}>
          Welcome to My Portfolio!
          <br />
        </span>
        <span className={styles.span2}>
          <span className={styles.span21}>I'm </span>
          <span className={styles.span22}>
          Bouatay </span>Moktar,
          <br />
        </span>{" "}
        a <span className={styles.span3}>Web Developer </span>with 2 years of
        experience, and I'm passionate about shaping the future as a computer
        science engineer. Explore my work and join me on this exciting journey!
      </span>
      <img src={pdp} className={styles.pdp}/>
   
    

    </div>
    
    
 
    </>
    
  )
}

export default Home;