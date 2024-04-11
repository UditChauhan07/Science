import React, { useState } from "react";
import styles from "./style.module.css";
import ScrollAnimation from 'react-animate-on-scroll';

const Index = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    
      <div className={styles.height100vh}>
        <div className={styles.container}>
          <div className={styles.RowFlex}>
            <div className={styles.W70}>
            <ScrollAnimation delay={1500}  animateIn="fadeInUp">
              <div className={styles.Mask}>
                <h1>Farm to Table.</h1>
              </div>
              </ScrollAnimation>
              <ScrollAnimation delay={4000} animateIn="fadeInUp">
              <h3>Rooted in Italian Soil</h3>
              </ScrollAnimation>
              <ScrollAnimation delay={5000} animateIn="fadeInUp">
              <div className={styles.W80}>
                <p>
                  If you take supplements, you should be aware that the
                  ingredients you consume, such as Vitamin C or E, are often
                  produced in a lab and not harvested from natural sources.
                  While these compounds appear identical to their naturally
                  derived counterparts on a molecular level...
                </p>
              </div>
              </ScrollAnimation>
              <ScrollAnimation delay={6000} animateIn="fadeInUp">
              <div>
                <button  onClick={toggleVisibility} className={styles.ReadMoreBtnWhite}>Read More</button>
              </div>
              </ScrollAnimation>
            </div>
          </div>
             
        {isVisible ? (
       <span></span>
      ) : (
          <div className={`${styles.hiddenParagraph} ${styles.animated} ${styles.fadeInUp} ${styles.animatedFadeInUp}`}>  
          <div className={styles.container}>

            <h3>Farm to Table</h3>
            <p>
            Bruno MD is committed to furthering our understanding of the power of natural substances to improve human health and longevity. This goal is a moving target. One not easily achieved. Nature is not always willing to show us her hand. Pharmacology is another path to improving human health, and Bruno also does this. We are the third-largest pharmaceutical company in Italy today. 
            </p>

            <p>Knowing both sides, we understand that some solutions for improving health outcomes are pharma&apos;s job. Still, we also know that many diseases that lead to the necessity of pharmacological intervention are often preventable through leveraging the best ingredients that Nature has to offer and unlocking some of Nature&apos;s secrets that she is reluctant to share with us.</p>
            <p>One of the seemingly insurmountable problems of deploying nature-based solutions to improve health and longevity is the issue of bioavailability. In our pharmaceutical business, we customize molecules to interact with the human body in a precise and targeted way with largely predictable outcomes because we design them for specific receptors in the body. Nature does not play this way. Our bodies block many plant-based nutrients that would benefit our health. This low bioavailability is a function of evolution, and the problem is particularly acute with a special kind of plant nutrient known as polyphenols. </p>

          </div>
          <span  onClick={toggleVisibility}>X</span>
          </div>
          )}
        </div>
      </div>
    
  );
};

export default Index;
