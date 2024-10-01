import React, { useRef, useEffect } from "react";

import "./slider.css";

import firstImage from "../../assets/Slider_main_Image.png";
import secondImag from "../../assets/slider_image_300_plus.png";
import thirdImage from "../../assets/slider_image_user_Section.png";
import fourthImg from "../../assets/slider_image_shapes.png";
import fifthImage from "../../assets/slider_image_free_try.png";

const Slider = () => {
  const scrollContainerRef = useRef(null); // Reference to the scrollable container
  const scrollIntervalRef = useRef(null); // Reference to the interval for scrolling

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const startScrolling = () => {
      scrollIntervalRef.current = setInterval(() => {
        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollLeft = 0; // Reset to start when it reaches the end
        } else {
          scrollContainer.scrollLeft += 1; // Scroll to the right
        }
      }, 10); // Adjust the speed by changing the interval value
    };

    const stopScrolling = () => {
      clearInterval(scrollIntervalRef.current); // Clear the interval to stop scrolling
    };

    startScrolling(); // Start scrolling initially

    // Add event listeners to stop and resume scrolling on hover
    scrollContainer.addEventListener("mouseenter", stopScrolling);
    scrollContainer.addEventListener("mouseleave", startScrolling);

    // Cleanup function to remove event listeners and clear interval on component unmount
    return () => {
      clearInterval(scrollIntervalRef.current);
      scrollContainer.removeEventListener("mouseenter", stopScrolling);
      scrollContainer.removeEventListener("mouseleave", startScrolling);
    };
  }, []);
  return (
    <section className="SliderSection" ref={scrollContainerRef}>
      <div className="lower">
        <div className="lowerSection">
          <div>
            <img src={firstImage} alt="Ai generated" />
          </div>
          <div>
            <img src={secondImag} alt="" />
            <img src={thirdImage} alt="" />
          </div>
          <div>
            <img src={fourthImg} alt="" />
            <img src={fifthImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
