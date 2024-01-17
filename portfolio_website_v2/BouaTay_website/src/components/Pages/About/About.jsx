import React from "react";
import styles from "../About/About.module.css";
import {ProgressBar} from 'react-bootstrap';


function About() {
  return (  
    <>
       

      <div className={styles.about_container}>
        <span className={styles.ms}>My Skills</span>
        <div className={styles.progress_bar_container}>
        <ProgressBar variant="danger" now={80}></ProgressBar>
        </div>
        <div className={styles.progress_circle_container}></div>
      </div>
    </>
  );
}

export default About;
