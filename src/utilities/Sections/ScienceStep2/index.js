import React from "react";
import styles from "./styles.module.css";
import ScrollAnimation from 'react-animate-on-scroll';

const Index = () => {
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
   

  return (
    <div>
      <div className={`${styles.height100vh} ${styles.bg} `}>
        
        <div className={styles.container}>
          <div className={styles.RowFlex}>
          <div className={styles.W70}>
    <ul className={styles.fireflies}> 
        <li></li> 
        <li></li> 
        <li></li> 
        <li></li> 
        <li></li> 
        <li></li> 
        <li></li> 
        <li></li> 
        <li></li> 
        <li></li> 
        <li></li> 
        <li></li> 
        <li></li> 
        <li></li> 
        {/* <li></li> 
        <li></li> 
        <li></li> 
        <li></li> 
        <li></li> 
        <li></li>  */}
    </ul>
    <ScrollAnimation delay={1000} animateIn="fadeInUp">
    <div className={styles.Mask}>
                <h1>Understand the world</h1>
              </div>
          </ScrollAnimation>
          <ScrollAnimation delay={4000} animateIn="fadeInUp">
              <h3>Unlocking Nature’s Secrets</h3>
              </ScrollAnimation>
              <ScrollAnimation delay={5000} animateIn="fadeInUp">
              <div className={styles.W80}>
                <p>
                  Polyphenols are compounds in many plant-based foods, such as
                  fruits, vegetables, tea, and wine. They are antioxidants,
                  which means they can help protect our cells from damage caused
                  by free radicals.
                </p>
              </div>
              </ScrollAnimation>
              <ScrollAnimation delay={6000} animateIn="fadeInUp">
              <div>
                <button className={styles.ReadMoreBtnWhite}>Read More</button>
              </div>
              </ScrollAnimation>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Index;
