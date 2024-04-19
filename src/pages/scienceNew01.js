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
import Headers from "@/utilities/HeaderScienceNew";
import data from "../../json/layout.json";
import ScrollToTop from "@/utilities/ScrollToTop";

import Footer from "@/utilities/Footer/";

const Science = ({ version }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { masterHead, Step01, Step02, Step03, Step04, Step05 } =
    scienza[version] || {};

  const videoRef = useRef(null);
  const [isMute, setMute] = useState(false);

  const handleToggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setMute(!isMute);
    }
  };

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
        introTitle: $(".js--intro-title"),
        third: $(".js--third"),
        thirdTitle: $(".js--third-title"),
        thirdLeft: $(".js--third-left"),
        thirdRight: $(".js--third-right"),
        sectionCard: $(".js--section-card"),
        block: $(".js--block"),
        more: $(".js--more"),
      };
    });
  }, []);
  return (
    <div className="SciencewithoutScroll">
      <main className="ScienceScrollAnimation">
        <div>
          <Headers
            link={data[version].links}
            version={version}
            iconLink={{
              cart: data[version].cartLink,
              login: data[version].login,
            }}
          />
        </div>
        <section class="section__intro is--scrolled ">
          <div className="height100Vh">
            <video
              width="1920"
              height="auto"
              ref={videoRef}
              loop
              autoPlay
              muted
            >
              <source
                src="https://cdn.shopify.com/videos/c/o/v/b45c94600c184f59a34a27c3f428ca33.mp4"
                type="video/mp4"
              />
            </video>
            <button className="MuteBtn" onClick={handleToggleMute}>
            {isMute ? (<img src="/images/unmute-icon.png"/>) : (<img src="/images/mute-icon.png"/>)}   
            </button>
          </div>
        </section>
        <section class="section__science  ">
          <ScienceStep1 />
        </section>

        <section class="section__understand-the-world  j js--third">
          <ScienceStep2 />
        </section>

        <section class="section__BlueZone  ">
          <ScienceStep3 />
        </section>

        <section class="section__farm-to-table  ">
          <ScienceStep4 />
        </section>
        <section class="section__nature  ">
          <ScienceStep5 />
        </section>

        <footer class="footer js--footer" data-section-name="footer">
          <Footer data={scienza[version].footer} />
        </footer>
        
        <ScrollToTop></ScrollToTop>

      </main>
    </div>
  );
};
Science.hideLayout = true;
export default Science;
