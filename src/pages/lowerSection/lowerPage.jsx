import React, { useEffect, useRef } from "react";
import "./lowerPage.css";

import sm1 from "../../assets/caroselmage/small_1.png";
import sm2 from "../../assets/caroselmage/small_2.png";
import sm3 from "../../assets/caroselmage/small_3.png";

const LowerPage = () => {
  const crousalRef = useRef(null); // Reference to the carousel section

  useEffect(() => {
    const handleScroll = () => {
      const carousel = crousalRef.current;
      const rect = carousel.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if the carousel is in view and toggle the animate class
      if (rect.top < windowHeight && rect.bottom > 0) {
        carousel.classList.add("animate");
      } else {
        carousel.classList.remove("animate");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="lowerPageSection">
      <div className="textArea">
        <p>Journey Through Art of community</p>
      </div>

      <div className="crousalSide" ref={crousalRef}>
        <div className="LargeImage"></div>
        <div className="smallImageSection">
          <div className="smallIMG1">
            <img src={sm1} alt="" />
            <img src={sm2} alt="" />
          </div>
          <div className="bigIMG"></div>
          <div className="smallIMG1">
            <img src={sm3} alt="" />
            <img src={sm1} alt="" />
          </div>
        </div>
        <div className="LargeImage"></div>
      </div>
    </section>
  );
};

export default LowerPage;
