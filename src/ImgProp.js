import React, { useEffect, useState } from "react";

const loadImage = (setImageDimensions, imageUrl) => {
  const img = new Image();
  img.src = imageUrl;

  img.onload = () => {
    setImageDimensions({
      height: img.height,
      width: img.width,
    });
  };
  img.onerror = (err) => {
    console.log("img error");
    console.error(err);
  };
};

const IMgg = () => {
  const [imageDimensions, setImageDimensions] = useState({});
  const imageUrl =
    "https://grohit.com/scratchcard/images/google-scratch-card.jpg";

  useEffect(() => {
    loadImage(setImageDimensions, imageUrl);
    console.log(imageDimensions);
  }, []);

  return (
    <div>
      {Object.keys(imageDimensions).length === 0 ? (
        <b>Calculating...</b>
      ) : (
        <>
          <p>
            <b>Height:</b> {imageDimensions.height}{" "}
          </p>
          <p>
            <b>Width:</b> {imageDimensions.width}{" "}
          </p>
        </>
      )}
    </div>
  );
};

export default IMgg;
