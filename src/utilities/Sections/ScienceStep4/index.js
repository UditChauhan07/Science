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
              <div className={`${styles.Mask} `}>
                <h1 className={styles.animateCh}>Farm to Table.</h1>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={2000} animateIn="fadeIn">
              <h3>Rooted in Italian Soil</h3>
            </ScrollAnimation>
            <ScrollAnimation delay={2500} animateIn="fadeIn">
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
              <h3>Farm to Table</h3>
              <div className={styles.InneerDiscription}>
                <p>
                  If you take supplements, you should be aware that the
                  ingredients you consume, such as Vitamin C or E, are often
                  produced in a lab and not harvested from natural sources.
                  While these compounds appear identical to their naturally
                  derived counterparts on a molecular level, they are not the
                  same nor provide equivalent health benefits. Artificially
                  manufactured vitamins are not as beneficial as naturally
                  occurring vitamins of the same type because natural vitamins
                  are accompanied by cofactors such as enzymes, minerals, and
                  other organic molecules that work together to support their
                  absorption, bioavailability, and utilization in the body.
                  Unfortunately, these cofactors are often absent or removed
                  during the manufacturing process of artificial vitamins, which
                  results in reduced effectiveness and increased risk of
                  toxicity.
                </p>

                <p>
                  Furthermore, natural vitamins are usually present in a complex
                  matrix of other beneficial compounds, such as antioxidants,
                  fiber, flavonoids, and phytonutrients, that interact
                  synergistically to provide additional health benefits beyond
                  the vitamin itself, like natural vitamin C. On the other hand,
                  artificial vitamins typically contain only the isolated
                  vitamin molecules, which lack these synergistic components and
                  may even interfere with their absorption and function in the
                  body. Moreover, when taken in high doses, artificial vitamins
                  may even be toxic, whereas natural vitamins are generally safe
                  in any amount. Given our philosophy, it is unsurprising that
                  Bruno MD only sources natural ingredients for our products.
                  What may surprise you is that we also follow our Mediterranean
                  philosophy as a core principle of our sourcing methods. We
                  prefer to work with small, Italian-owned family farms and
                  people we know.
                </p>
                <p>
                  Our citrus, for example, is sourced from a network of orchards
                  situated on only a few hectares of land at the base of the
                  Etna Volcano in Sicily. We source our blood oranges from these
                  areas because we know the farmers run organic operations, pick
                  their fruit by hand, and harvest only when the citrus hits its
                  peak nutritional value. We also know the mineral-rich soil fed
                  by the volcano imparts other beneficial co-factors like a
                  higher percentage of anthocyanins, a compound of flavonoids
                  representing a potent group of antioxidants proven to help
                  tame free radicals and provide anti-inflammatory benefits. The
                  over 60+ flavonoids found in our Red Orange Complex can
                  encourage heart health, help maintain cholesterol levels in
                  the healthy range, and boost cognitive function. If our
                  ingredients can&apos;t be grown on Italian soil, Bruno MD
                  searches worldwide for farmers and ingredients that live up to
                  the same standards, then transforms them into products that
                  deliver 100% food-grade composition and the highest
                  bioavailability available.
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
