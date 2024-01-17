import React from "react";
import { Link } from "react-router-dom";
import styles from "../navbar/navbar.module.css";
import logo from "../../assets/logo.png";
import phone from "../../assets/phone.png";
import mail from "../../assets/mail.png";
import facebook from "../../assets/facebook1.png";
import instagram from "../../assets/instagram1.png";
import linkedin from "../../assets/linkedin.png";
import social from "../../assets/social.png";

function Navbar() {
  return (
    <>
      <nav className={styles.navbar_container}>
        <img src={logo} className={styles.logo} />
        <div className={styles.links_container}>
          <ul>
            <Link to="/Home" className={styles.home_button}>
              Home <br />
            </Link>
            <Link to="/About" className={styles.about_button}>
              About Me <br />
            </Link>
            <Link to="/Portfolio" className={styles.portfolio_button}>
              Portfolio <br />
            </Link>
            <Link to="/Contact" className={styles.contact_button}>
              Contact <br />
            </Link>
          </ul>
          <div className={styles.contact_container}>
            <div className={styles.phone_container}>
              <img src={phone} className={styles.phone} />
              <span className={styles.plus}>+</span>
              <span className={styles.num216}>216</span>
              <span className={styles.num}>20567323</span>
            </div>
            <div className={styles.mail_container}>
              <img src={mail} className={styles.mail} />
              <span className={styles.gmail}>moktarbouatay@gmail.com</span>
            </div>
            <div className={styles.socialmedia}>
              <a
                target="blank"
                href="https://www.facebook.com/moktar.bouatay.520/"
              >
                <img src={facebook} className={styles.facebook} />
              </a>
              <a
                target="blank"
                href="https://www.instagram.com/moktar_bouatay/"
              >
                <img src={instagram} className={styles.instagram} />
              </a>
              <a
                target="blank"
                href="https://www.linkedin.com/in/moktar-bouatay-b62360269/"
              >
                <img src={linkedin} className={styles.linkedin} />
              </a>
              <a target="blank" href="https://github.com/Moktar-BT">
                <img src={social} className={styles.social} />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
