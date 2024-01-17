import styles from '../Contact/Contact.module.css';
import React, { useState } from 'react';
import fs from 'fs';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToWrite = JSON.stringify(formData, null, 2);
    fs.writeFile('data.json', dataToWrite, (err) => {
      if (err) throw err;
      console.log('Données du formulaire enregistrées dans data.json :', formData);
    });
  };

  return (
    <div className={styles.contact_container}>
      <div className={styles.formulaire}>
        <span className={styles.contact_me}>Contact Me</span>
        <span className={styles.better_together}>Building Your Vision</span>
        <div className={styles.container2}>
          <form action="" className={styles.form_cont} onSubmit={handleSubmit}>
            {/* Noms des champs correspondant aux clés de formData */}
            <input name="firstName" placeholder='First Name' type="text" className={styles.input1} onChange={handleInputChange}></input>
            <input name="lastName" placeholder='Last Name' type="text" className={styles.input2} onChange={handleInputChange}></input>
            <input name="email" placeholder='Email' type="email" className={styles.input3} onChange={handleInputChange}></input>
            <input name="phoneNumber" placeholder='Phone Number' type="phone" className={styles.input4} onChange={handleInputChange}></input>
            <input name="subject" placeholder='Subject' type="text" className={styles.input5} onChange={handleInputChange}></input>
            <textarea name="message" placeholder='Tell Us Something ...' className={styles.input6} onChange={handleInputChange}></textarea>
            <button type="submit" className={styles.btn}>SEND TO ME</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;
