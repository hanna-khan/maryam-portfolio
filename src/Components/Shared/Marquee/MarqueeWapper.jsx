import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeWapper = ({ items, direction }) => {
  return (
    <div className="marquee-wrapper text-slider">
      <div className="marquee-inner">
        <Marquee direction={direction} speed={60} gradient={false}>
          {items?.map((text, index) => (
            <span key={index} style={{ marginRight: "2rem", fontWeight: "bold", fontSize: "1.5rem", color: "#000", letterSpacing: "5px" }}>
              {text}
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeWapper;
