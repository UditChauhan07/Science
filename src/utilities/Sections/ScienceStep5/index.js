import React from "react";
import styles from "./styles.module.css";
import ScrollAnimation from 'react-animate-on-scroll';
const Index = () => {
  return (
    <div className={styles.height100vh}>
      <div className={styles.container}>
        <div className={styles.RowFlex}>
          <div className={styles.W70}>
          <ScrollAnimation  animateIn="fadeIn">
            <h1>Nature,</h1>
            </ScrollAnimation>
            <ScrollAnimation delay={800} animateIn="fadeIn">
            <h2>Meet Pharma.</h2>
            </ScrollAnimation>
            <ScrollAnimation delay={1000} animateIn="fadeIn">
            <h3>Clinically Proven Ingredients</h3>
            </ScrollAnimation>
            <ScrollAnimation delay={1000} animateIn="fadeIn">
            <div className={styles.W80}>
              <p>
                When a company makes a claim, it should be transparent and
                verifiable. Because we are both a pharmacological company and a
                nutritional supplement company, Bruno MD applies the same
                principled methods for safety, provenance, and effectiveness on
                all of our products...
              </p>
            </div>
            </ScrollAnimation>
            <ScrollAnimation delay={3000} animateIn="fadeIn">
            <div>
              <button className={styles.ReadMoreBtnWhite} >Read More</button>
            </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
