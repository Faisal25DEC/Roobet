import React from "react";
import "../App.css";
import TopBannerImage from "../assets/top-banner.jpg";
import TopBannerImage2 from "../assets/top-banner-2.png";
import Cards from "../assets/tb-1-1.png";
import TopBannerImage3 from "../assets/tb-1-2.png";
import MobileBanner1 from "../assets/tb-3-1.jpeg";

const TopBanner = () => {
  return (
    <div className="img-shadow h-[67vh] lg:h-[63vh] relative">
      <img
        src={TopBannerImage}
        alt=""
        className=" w-full rounded-xl h-[39vh] md:h-[37.5vh] object-cover"
      />
      <div className="relative">
        <img
          src={TopBannerImage2}
          alt=""
          className="hidden lg:block w-full h-[18.5vh] mt-[1rem] object-cover"
        />
        <img
          src={Cards}
          alt=""
          className="aboslute hidden object-contain lg:block  md1024:right-[-1rem] top-[-2.25rem] w-[16rem] h-fit absolute"
        />
      </div>
      <div className="relative block lg:hidden">
        <img
          src={MobileBanner1}
          alt=""
          className=" block lg:hidden h-[21vh] w-full mt-[1rem] rounded-lg"
        />
        <h1 className="text-center maxSc360:text-[17px] text-[20px] md:text-[24px] w-full font-bold text-white absolute top-[50%] z-[50] left-[50%] translate-x-[-50%] translate-y-[-100%] maxSc360:translate-y-[-120%]">
          Roo's $100,000 No Limit November{" "}
          <p className="text-[14px] md:text-[18px] font-bold text-[#c4c4c4]">
            Kazananlar belirlenecek 11/27 04:59AM UTC
          </p>
        </h1>
        <div className="absolute left-3 bottom-2 flex gap-2 w-[97%] m-auto text-white">
          {" "}
          <button className="rounded-lg bg-[#60af5a] w-[50%] p-1 maxSc360:p-0">
            100 <p>Kazananlar</p>
          </button>
          <button className="rounded-lg w-[50%] p-1 bg-[#2196f3] maxSc360:p-0">
            200 <p>Biletleriniz</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
