import React from "react";
import image1 from "../Images/Vector.png";
import image2 from "../Images/Vector1.png";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="foot">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
      </div>
    </div>
  );
}

export default Footer;
