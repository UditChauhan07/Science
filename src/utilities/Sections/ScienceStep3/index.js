import React from "react";
import styles from "./style.module.css";
import ScrollAnimation from 'react-animate-on-scroll';

const Index = () => {
  return (
    <div className={styles.height100vh}>
      <div className={styles.container}>
        <div className={styles.RowFlex}>
          <div className={styles.W70}>
          <ScrollAnimation  delay={1500} animateIn="fadeInUp">
          <div className={styles.ContentBox}>
          <h3>BLUE ZONE</h3>
          <h3>BLUE ZONE</h3>
        </div>
        <h1>BLUE ZONE</h1>
            

            </ScrollAnimation>
            <ScrollAnimation delay={2000}  animateIn="fadeInUp">
            <h2>Longevity.</h2>
            </ScrollAnimation>
            <ScrollAnimation delay={4000} animateIn="fadeInUp">
            <h3>Live Healthier, Longer Lives</h3>
            </ScrollAnimation>
            <ScrollAnimation delay={5000} animateIn="fadeInUp">
            <div className={styles.W80}>
              <p>
                Many pharmacological companies are scaled international
                conglomerates. The names of these companies are familiar and,
                unfortunately, are often known for being as impersonal as they
                are innovative.
                <br></br>
                <br></br>
                Bruno MD, an Italian company based in Rome, is a family-owned
                operation that allows the company to innovate from a different
                perspective.
              </p>
             
            </div>
            </ScrollAnimation>
            <ScrollAnimation delay={6000} animateIn="fadeInUp">
            <div>
              <button className={styles.ReadMoreBtn}>Read More</button>
            </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
