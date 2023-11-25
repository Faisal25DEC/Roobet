import React from "react";
import "../App.css";
import TopBannerImage from "../assets/top-banner.jpg";
import TopBannerImage2 from "../assets/top-banner-2.png";
import Cards from "../assets/tb-1-1.png";
import TopBannerImage3 from "../assets/tb-1-2.png";
const TopBanner = () => {
  return (
    <div className="img-shadow h-[67vh] lg:h-[63vh]">
      <img
        src={TopBannerImage}
        alt=""
        className=" w-full rounded-xl h-[37.5vh] object-cover"
      />
      <img
        src={TopBannerImage2}
        alt=""
        className="hidden lg:block w-full h-[18.5vh] mt-[1rem] object-cover"
      />
      <img
        src={Cards}
        alt=""
        className="hidden lg:block right-[-0.5rem] bottom-[56vh] w-[12rem] h-[24.5vh] absolute"
      />
      <img
        src={TopBannerImage3}
        alt=""
        className="block lg:hidden h-[23vh] w-full mt-[1rem] rounded-lg"
      />
    </div>
  );
};

export default TopBanner;
