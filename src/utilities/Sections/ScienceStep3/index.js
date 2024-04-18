import React, { useState } from "react";

import styles from "./style.module.css";
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
            <ScrollAnimation delay={600} animateIn="fadeIn">
              <div className={styles.ContentBox}>
                <h3>BLUE ZONE</h3>
                <h3>BLUE ZONE</h3>
              </div>
              <h1>BLUE ZONE</h1>
            </ScrollAnimation>
            <ScrollAnimation delay={900} animateIn="fadeIn">
              <h2>Longevity.</h2>
            </ScrollAnimation>
            <ScrollAnimation delay={3000} animateIn="fadeInUp">
              <h3 className={styles.LiveHealter}>
                Live Healthier, Longer Lives
              </h3>
            </ScrollAnimation>
            <ScrollAnimation delay={3500} animateIn="fadeInUp">
              <div className={styles.W80}>
                <p>
                  Many pharmacological companies are scaled international
                  conglomerates. The names of these companies are familiar and,
                  unfortunately, are often known for being as impersonal as they
                  are innovative.                 
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
              <h3>BLUE ZONE, Longevity</h3>
              <div className={styles.InneerDiscription}>
              <p>
                Many pharmacological companies are scaled international
                conglomerates. The names of these companies are familiar and,
                unfortunately, are often known for being as impersonal as they
                are innovative. Bruno MD, an Italian company based in Rome, is a
                family-owned operation that allows the company to innovate from
                a different perspective. It is not hyperbole to say that we
                treat our employees, scientists, doctors, and company
                representatives like family. 
              </p>

              <p>
              This philosophy extends to our
                customers and the innovations we bring to them in both our
                pharmacological and supplementation businesses. We see human
                health as a holistic rubric that benefits from the basic rituals
                of a Mediterranean lifestyle; eating fresh food sourced daily,
                socializing regularly, connecting with family and friends, and
                taking regular daily walks are effective prescriptions for
                longevity, health, and happiness. This philosophy is born out of
                new scientific evidence surrounding Blue Zone communities
                worldwide, where people live extraordinarily long and healthy
                lives. 
              </p>
              <p>
              Two of the five Blue Zones are in the Mediterranean—one
                in Sardinia and the other on the island of Ikaria in Greece. A
                study of the diet and lifestyles found in these areas reveals
                remarkable similarities. Men and women stay active and engaged
                well into their 90s, and living past 100 is common. In contrast,
                lifespan in many industrialized countries has stalled or is
                decreasing, as in the United States. This trend brings us back
                to our philosophy: we believe in medicine. We are very good at
                creating pharmacological solutions, but we embrace the lifestyle
                and diet of Mediterranean Blue Zones to reduce the need for
                pharmaceutical intervention in the first place.
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
