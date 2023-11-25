import React from "react";
import "../App.css";
import TopBannerImage from "../assets/top-banner.jpg";
import TopBannerImage2 from "../assets/top-banner-2.png";

const TopBanner = () => {
  return (
    <div className="img-shadow h-[65vh]">
      <img
        src={TopBannerImage}
        alt=""
        className="rounded-xl h-[40vh] object-cover"
      />
      <img
        src={TopBannerImage2}
        alt=""
        className="w-full h-[20vh] mt-[1rem] object-cover"
      />
    </div>
  );
};

export default TopBanner;
