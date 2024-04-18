import React, { useState } from "react";
import styles from "./styles.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

const Index = () => {
  const [backgroundPosition, setBackgroundPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const moveinX = (e.pageX * -20) / -1000;
    const moveinY = (e.pageY * 25) / -1000;
    setBackgroundPosition({ x: moveinX, y: moveinY });
  };
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div
      className={styles.height100vh}
      onMouseMove={handleMouseMove}
      style={{
        backgroundPosition: `${backgroundPosition.x}px ${backgroundPosition.y}px`,
      }}
    >
      <div className={styles.container}>
        <div className={styles.RowFlex}>
          <div className={styles.W70}>
            <ScrollAnimation delay={600} animateIn="fadeInUp">
              <h1>Science</h1>
            </ScrollAnimation>

            <ScrollAnimation delay={1200} animateIn="fadeInUp">
              <h2>A human endeavor.</h2>
            </ScrollAnimation>
            <ScrollAnimation delay={3300} animateIn="fadeIn">
              <h3>Pharma, Meet Nature</h3>
            </ScrollAnimation>
            <ScrollAnimation delay={3600} animateIn="fadeIn">
              <div className={styles.W80}>
                <p>
                  Bruno MD is committed to furthering our understanding of the
                  power of natural substances to improve human health and
                  longevity. This goal is a moving target. One not easily
                  achieved.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={3800} animateIn="fadeIn">
              <div>
                <button
                  onClick={toggleVisibility}
                  className={styles.ReadMoreBtn}
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
              <h3>Science, A human endeavor</h3>
              <div className={styles.InneerDiscription}>
                <p>
                  Bruno MD is committed to furthering our understanding of the
                  power of natural substances to improve human health and
                  longevity. This goal is a moving target. One not easily
                  achieved. Nature is not always willing to show us her hand.
                  Pharmacology is another path to improving human health, and
                  Bruno also does this. We are the third-largest pharmaceutical
                  company in Italy today.
                </p>

                <p>
                  Knowing both sides, we understand that some solutions for
                  improving health outcomes are pharma&apos;s job. Still, we
                  also know that many diseases that lead to the necessity of
                  pharmacological intervention are often preventable through
                  leveraging the best ingredients that Nature has to offer and
                  unlocking some of Nature&apos;s secrets that she is reluctant
                  to share with us.
                </p>
                <p>
                  One of the seemingly insurmountable problems of deploying
                  nature-based solutions to improve health and longevity is the
                  issue of bioavailability. In our pharmaceutical business, we
                  customize molecules to interact with the human body in a
                  precise and targeted way with largely predictable outcomes
                  because we design them for specific receptors in the body.
                  Nature does not play this way. Our bodies block many
                  plant-based nutrients that would benefit our health. This low
                  bioavailability is a function of evolution, and the problem is
                  particularly acute with a special kind of plant nutrient known
                  as polyphenols.{" "}
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
