import React, { useEffect, useRef, useState } from "react";
import ScienceStep1 from "@/utilities/Sections/ScienceStep1";
import ScienceStep2 from "@/utilities/Sections/ScienceStep2";
import ScienceStep3 from "@/utilities/Sections/ScienceStep3";
import ScienceStep4 from "@/utilities/Sections/ScienceStep4";
import ScienceStep5 from "@/utilities/Sections/ScienceStep5";
import scienza from "../../json/scienza.json";
import PageHead from "@/utilities/Head";
import SEO from "../../json/SEO.json";
import MasterHeadImg from "@/utilities/MasterHeadImg";

import Footer from "@/utilities/Footer/";
const ScienceNew = ({ version }) => {
  const { masterHead, Step01, Step02, Step03, Step04, Step05 } =
    scienza[version] || {};
  useEffect(() => {
    $(document).ready(() => {
      if ($.scrollify) {
        $.scrollify({
          section: ".js--scrollify",
          interstitialSection: "",
          easing: "easeOutExpo",
          scrollSpeed: 1100,
          offset: 0,
          scrollbars: true,
          standardScrollElements: "",
          setHeights: true,
          overflowScroll: true,
          updateHash: true,
          touchScroll: true,
          before: function () {},
          after: function () {},
          afterResize: function () {},
          afterRender: function () {},
        });
      } else {
        console.error("jQuery Scrollify plugin is not available.");
      }
    });
  }, []);
  return (
    <section>
      <div class="content">
        <section class="scrolls active">
          <div class="background"></div>
          <div class="container">
            <div class="image">
              <img src="https://i.ibb.co/JHjh3jJ/slide1.jpg" alt="" />
            </div>
            <div class="items">
              <h2>Scrollify is so slick.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                maxime labore, esse repellat dolor dignissimos optio placeat
                accusantium commodi at voluptas ut, a quisquam porro excepturi.
              </p>
              <button>Read More</button>
            </div>
          </div>
        </section>
        <section class="scrolls">
          <div class="background"></div>
          <div class="container">
            <div class="image">
              <img src="https://i.ibb.co/JHjh3jJ/slide1.jpg" alt="" />
            </div>
            <div class="items">
              <h2>I like natural colors.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                maxime labore, esse repellat dolor dignissimos optio placeat
                accusantium commodi at voluptas ut, a quisquam porro excepturi.
              </p>
              <button>Read More</button>
            </div>
          </div>
        </section>
        <section class="scrolls">
          <div class="background"></div>
          <div class="container">
            <div class="image">
              <img src="https://i.ibb.co/JHjh3jJ/slide1.jpg" alt="" />
            </div>
            <div class="items">
              <h2>End of the Page.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                maxime labore, esse repellat dolor dignissimos optio placeat
                accusantium commodi at voluptas ut, a quisquam porro excepturi.
              </p>
              <button>Read More</button>
            </div>
          </div>
        </section>
        <section class="scrolls">
          <div class="background"></div>
          <div class="container">
            <div class="image">
              <img src="https://i.ibb.co/JHjh3jJ/slide1.jpg" alt="" />
            </div>
            <div class="items">
              <h2>It was a lie.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                maxime labore, esse repellat dolor dignissimos optio placeat
                accusantium commodi at voluptas ut, a quisquam porro excepturi.
              </p>
              <button>Read More</button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

const Science = () => {
  useEffect(() => {
    $(function () {
      "use strict";
      const elements = {
        scrollify: $(".js--scrollify"),
        header: $(".js--header"),
        footer: $(".js--footer"),
        navigate: $(".js--navigate"),
        navigateItems: $(".js--navigate-items"),
        navigateLink: $(".js--navigate-link"),
        firstTitle: $(".js--first-title"),
        third: $(".js--third"),
        thirdTitle: $(".js--third-title"),
        thirdLeft: $(".js--third-left"),
        thirdRight: $(".js--third-right"),
        sectionCard: $(".js--section-card"),
        block: $(".js--block"),
        more: $(".js--more"),
      };

      elements.navigateItems.on("click", ".js--navigate-link", (ev) => {
        ev.preventDefault();

        const $this = $(ev.currentTarget);
        const hash = $this.attr("href");

        $.scrollify.move(hash);
      });

      elements.more.on("click", (ev) => {
        elements.block.slideToggle();
      });

      setTimeout(() => {
        elements.firstTitle.addClass("bounceInDown");
      }, 100);

      $.scrollify({
        section: ".js--scrollify",
        sectionName: "section-name",
        overflowScroll: false,
        setHeights: true,
        interstitialSection: ".footer, .section__fourth",
        standardScrollElements: ".footer",
        before(index, sections) {
          const ref = sections[index].data("section-name");

          if (ref === "first" || ref === "footer") {
            elements.header.removeClass("is--active");
            elements.firstTitle.addClass("bounceInDown");
          }

          if (ref === "second") {
            setTimeout(function () {
              elements.sectionCard.addClass("flipInY");
            }, 100);
          }

          if (ref === "third") {
            elements.third.removeClass("is--inactive");
            elements.thirdLeft.addClass("fadeInLeft");
            elements.thirdRight.addClass("fadeInRight");
            elements.thirdTitle.addClass("bounceInDown");
          }

          if (ref === "footer") {
            elements.navigate.addClass("is--inactive");
          } else {
            elements.navigate.removeClass("is--inactive");
          }

          elements.navigateLink
            .parent()
            .siblings()
            .find(".js--navigate-link")
            .removeClass("is--active");
          elements.navigateLink.eq(index).addClass("is--active");
        },
        after: function (index, sections) {
          var ref = sections[index].data("section-name");

          if (ref !== "second") {
            elements.sectionCard.removeClass("flipInY");
          }

          if (ref === "third") {
            elements.thirdLeft.removeClass("fadeInLeft");
            elements.thirdRight.removeClass("fadeInRight");
            elements.thirdTitle.removeClass("bounceInDown");
          }

          if (ref !== "third") {
            elements.third.addClass("is--inactive");
          }

          if (ref !== "first" && ref !== "footer") {
            elements.header.addClass("is--active");
            elements.firstTitle.removeClass("bounceInDown");
          }
        },
        afterRender() {},
      });
    });
  }, []);
  return (
    <main className="ScienceScrollAnimation">
      <nav class="section-navigate js--navigate">
        <ul class="section-navigate__items js--navigate-items">
          <li class="section-navigate__item">
            <a
              href="#first"
              class="section-navigate__link js--navigate-link is--active"
            >
              <span class="section-navigate__name">First</span>
            </a>
          </li>
          <li class="section-navigate__item">
            <a href="#second" class="section-navigate__link js--navigate-link">
              <span class="section-navigate__name">Second</span>
            </a>
          </li>
          <li class="section-navigate__item">
            <a href="#third" class="section-navigate__link js--navigate-link">
              <span class="section-navigate__name">Third</span>
            </a>
          </li>
          <li class="section-navigate__item">
            <a href="#fourth" class="section-navigate__link js--navigate-link">
              <span class="section-navigate__name">Fourth</span>
            </a>
          </li>
          <li class="section-navigate__item">
            <a href="#fifth" class="section-navigate__link js--navigate-link">
              <span class="section-navigate__name">Fifth</span>
            </a>
          </li>
        </ul>
      </nav>

      <section
        class="section__first is--scrolled js--scrollify"
        data-section-name="first"
      >
        <div className="height100Vh">
          <video width="1920" height="auto" loop autoPlay muted>
            <source
              src="https://cdn.shopify.com/videos/c/o/v/b45c94600c184f59a34a27c3f428ca33.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </section>
      <section
        class="section__second is--scrolled js--scrollify"
        data-section-name="second"
      >
        <ScienceStep1 />
      </section>

      <section
        class="section__third is--scrolled js--scrollify js--third"
        data-section-name="third"
      >
        <ScienceStep2 />
      </section>

      <section
        class="section__fourth is--scrolled js--scrollify"
        data-section-name="fourth"
      >
        <ScienceStep3 />
      </section>

      <section
        class="section__fifth is--scrolled js--scrollify"
        data-section-name="fifth"
      >
        <ScienceStep4 />
      </section>
      <section
        class="section__six is--scrolled js--scrollify"
        data-section-name="six"
      >
        <ScienceStep5 />
      </section>

      <footer class="footer js--footer" data-section-name="footer">
        {/* <Footer data={scienza[version].footer} /> */}
       
      </footer>
    </main>
  );
};
Science.hideLayout = true;
export default Science;
