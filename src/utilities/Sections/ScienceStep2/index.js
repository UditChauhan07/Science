import React, { useState } from "react";
import styles from "./styles.module.css";
import ScrollAnimation from "react-animate-on-scroll";

const Index = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
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
            </ul>

            <ScrollAnimation delay={600} animateIn="fadeIn">
              <div className={styles.Mask}>
                <h1>Understand the world</h1>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={2200} animateIn="fadeInUp">
              <h3>Unlocking Nature’s Secrets</h3>
            </ScrollAnimation>
            <ScrollAnimation delay={2500} animateIn="fadeInUp">
              <div className={styles.W80}>
                <p>
                  Polyphenols are compounds in many plant-based foods, such as
                  fruits, vegetables, tea, and wine. They are antioxidants,
                  which means they can help protect our cells from damage caused
                  by free radicals.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={2800} animateIn="fadeIn">
              <div>
                <button
                  onClick={toggleVisibility}
                  className={styles.ReadMoreBtnWhite}
                >
                  Read More
                </button>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {isVisible ? (
          <span></span>
        ) : (
          <div
            className={`${styles.hiddenParagraph} ${styles.animated} ${styles.fadeInUp} ${styles.animatedFadeInUp}`}
          >
            <div className={styles.container}>
              <h3>Understand the world</h3>
              <p>
                Polyphenols are compounds in many plant-based foods, such as
                fruits, vegetables, tea, and wine. They are antioxidants, which
                means they can help protect our cells from damage caused by free
                radicals. Some polyphenols have anti-inflammatory and
                anti-cancer properties. A diet rich in polyphenols has various
                health benefits, including reducing the risk of heart disease,
                diabetes, and certain cancers. 
              </p>

              <p>
              Until recently, these
                antioxidants, when included in supplements, remained mostly
                unavailable to our bodies, meaning that no matter how much of a
                supplement containing polyphenols we consume, very little of it
                is absorbed. The low bioavailability problem is vexing. Our
                bodies block botanical compounds like polyphenols in two ways:
                low water solubility and limited intestinal absorption. Creating
                optimal bio absorption without altering the natural actives
                found in plants is the elusive target. As a pharma, we are
                skilled at creating molecular solutions to health problems, but
                our mission is different here. 
              </p>
              <p>
              The goal is to deliver 100% of a
                plant's food-grade benefits into your body without altering the
                botanical itself. In other words, let Nature do what she does
                best. To do this, natural derivatives must balance
                hydrophilicity (the ability to dissolve in gastrointestinal
                fluids) and lipophilicity (the ability to cross lipid
                membranes). Complicating this mission is that all plant-based
                polyphenols carry a different pharmacokinetic profile, so Bruno
                MD utilizes a new technology called Phytosome that optimizes the
                bioavailability of each botanical. Hence, our bodies absorb them
                in the best possible way. With Phytosome Technology, Bruno MD
                supplements deliver a higher percentage (up to 3000% more) of
                highly beneficial polyphenols into the bloodstream. Importantly,
                Phytosome Technology does this without changing the natural
                ingredients themselves or relying on drugs, making it safe and
                tolerated by our bodies over time.
              </p>
            </div>
            <span onClick={toggleVisibility}>X</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
