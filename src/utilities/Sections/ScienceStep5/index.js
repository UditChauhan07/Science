import React, { useState } from "react";
import styles from "./styles.module.css";
import ScrollAnimation from "react-animate-on-scroll";
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
            <ScrollAnimation delay={600} animateIn="fadeInUp">
              <h1>Nature,</h1>
            </ScrollAnimation>
            <ScrollAnimation delay={1200} animateIn="fadeInUp">
              <h2>Meet Pharma.</h2>
            </ScrollAnimation>
            <ScrollAnimation delay={3000} animateIn="fadeInUp">
              <h3>Clinically Proven Ingredients</h3>
            </ScrollAnimation>
            <ScrollAnimation delay={4000} animateIn="fadeInUp">
              <div className={styles.W80}>
                <p>
                  When a company makes a claim, it should be transparent and
                  verifiable. Because we are both a pharmacological company and
                  a nutritional supplement company
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={5000} animateIn="flipInX">
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
              <h3> Nature Meet, Pharma </h3>
              <div className={styles.InneerDiscription}>
                <p>
                  When a company makes a claim, it should be transparent and
                  verifiable. Because we are both a pharmacological company and
                  a nutritional supplement company, Bruno MD applies the same
                  principled methods for safety, provenance, and effectiveness
                  on all of our products, whether they are molecules we
                  formulate or ones we source from Nature. We substantiate all
                  advertised health benefits and claims.
                </p>

                <p>
                  All clinical trials on our ingredients are randomized,
                  double-blind, placebo-controlled, and published. In addition,
                  all Bruno MD dietary supplements undergo the same rigorous
                  manufacturing and internal regulatory processes as our
                  pharmaceutical products. Finally, the efficacy of the actives
                  in all of our pharmacological or botanical products delivered
                  with Phytosome Technology is guaranteed.
                </p>
              </div>
            </div>
            <span onClick={toggleVisibility}>X</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
