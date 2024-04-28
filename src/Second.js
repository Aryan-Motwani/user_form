import "./styles.css";
import ScratchCard from "react-scratchcard";
import couponCover from "./blue_card.png";
import squareImg from "./square.png";
import React, { useEffect } from "react";

const { useState } = React;

export default function Second() {
  useEffect(() => {
    setTimeout(() => {
      // document.querySelector("canvas").style.top = "30%";
      document.querySelector(".App").style.opacity = "100%";
      document.querySelector(".txt").style.fontSize = "30px";
      // document.querySelector(".txt").style.left = "100%";
      // document.querySelector(".txt").style.left = "100%";
      // document.querySelector(".Text").style.top = "10%";
    }, 500);
  }, []);
  const [scratchedText, setScratchedText] = useState("");
  const handleScratchComplete = () => {
    console.log("The card is now clear!");
    setScratchedText("Congratulations! You WON!");
  };

  let decider = [
    { w: 200, img: squareImg },
    { w: 500, img: couponCover },
  ];
  const idx = 0;

  const geht = false;
  const settings = {
    width: decider[idx]["w"],
    height: decider[idx]["w"],
    image: decider[idx]["img"],
    finishPercent: 90,
    onComplete: () => handleScratchComplete(),
  };
  return (
    <div className="App" style={{ opacity: "0" }}>
      <ScratchCard {...settings}>
        {geht ? (
          <div>
            <p>hallo</p>
          </div>
        ) : (
          <div className="Text txt"> {scratchedText}</div>
        )}
      </ScratchCard>
    </div>
  );
}
